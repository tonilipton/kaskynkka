// Telegram bot for order notifications
import { Telegraf, Markup } from 'telegraf'
import { getSupabaseClient } from '../lib/supabaseClient'

const token = process.env.TELEGRAM_BOT_TOKEN
const chatId = process.env.TELEGRAM_CHAT_ID
const bot = token ? new Telegraf(token) : null

// Store for awaiting custom time input
const awaitingCustomTime = new Map<string, string>()

// Handle button callbacks
if (bot) {
  // Set predefined time (20, 30, 40 min)
  bot.action(/set_time_(\d+)_(.+)/, async (ctx) => {
    const minutes = ctx.match[1]
    const orderId = ctx.match[2]
    
    try {
      const supabase = getSupabaseClient()
      
      // Update order with estimated time
      const { error } = await supabase
        .from('orders')
        .update({ 
          estimated_time: parseInt(minutes),
          status: 'Confirmed'
        })
        .eq('order_id', orderId)
      
      if (error) {
        console.error('Error updating order:', error)
        await ctx.answerCbQuery('❌ Error updating order')
        return
      }
      
      await ctx.answerCbQuery(`✅ Pickup time set to ${minutes} minutes`)
      
      // Update the message
      const newText = ctx.callbackQuery?.message?.text?.replace('⏳ Pending', `✅ Confirmed (${minutes} min)`) || ''
      
      await ctx.editMessageText(
        newText + '\n\n✅ *Order confirmed!* Pickup in ' + minutes + ' minutes.',
        { 
          parse_mode: 'Markdown',
          reply_markup: Markup.inlineKeyboard([
            [Markup.button.callback('✅ Ready for Pickup!', `ready_${orderId}`)]
          ]).reply_markup
        }
      )
      
    } catch (error) {
      console.error('Error setting pickup time:', error)
      await ctx.answerCbQuery('❌ Error processing request')
    }
  })
  
  // Custom time request
  bot.action(/custom_time_(.+)/, async (ctx) => {
    const orderId = ctx.match[1]
    const userId = ctx.from?.id.toString()
    
    if (userId) {
      awaitingCustomTime.set(userId, orderId)
    }
    
    await ctx.answerCbQuery('⌨️ Enter custom time')
    
    await ctx.reply(
      `⌛ *Custom Pickup Time*\n\nOrder: ${orderId}\n\nPlease reply with the number of minutes (e.g., "25"):`,
      { parse_mode: 'Markdown' }
    )
  })
  
  // Handle custom time input
  bot.on('text', async (ctx) => {
    const userId = ctx.from?.id.toString()
    if (!userId) return
    
    const orderId = awaitingCustomTime.get(userId)
    if (!orderId) return // Not awaiting custom time
    
    const text = ctx.message.text.trim()
    const minutes = parseInt(text)
    
    if (isNaN(minutes) || minutes <= 0 || minutes > 120) {
      await ctx.reply('❌ Please enter a valid number between 1 and 120 minutes.')
      return
    }
    
    try {
      const supabase = getSupabaseClient()
      
      const { error } = await supabase
        .from('orders')
        .update({ 
          estimated_time: minutes,
          status: 'Confirmed'
        })
        .eq('order_id', orderId)
      
      if (error) {
        console.error('Error updating order:', error)
        await ctx.reply('❌ Error updating order. Please try again.')
        return
      }
      
      awaitingCustomTime.delete(userId)
      
      await ctx.reply(
        `✅ *Order ${orderId} confirmed!*\n\nPickup time set to ${minutes} minutes.`,
        { parse_mode: 'Markdown' }
      )
      
    } catch (error) {
      console.error('Error setting custom time:', error)
      await ctx.reply('❌ Error processing request. Please try again.')
    }
  })
  
  // Mark order as ready
  bot.action(/ready_(.+)/, async (ctx) => {
    const orderId = ctx.match[1]
    
    try {
      const supabase = getSupabaseClient()
      
      const { error } = await supabase
        .from('orders')
        .update({ status: 'Ready' })
        .eq('order_id', orderId)
      
      if (error) {
        console.error('Error marking order ready:', error)
        await ctx.answerCbQuery('❌ Error updating order')
        return
      }
      
      await ctx.answerCbQuery('✅ Order marked as ready!')
      
      const newText = ctx.callbackQuery?.message?.text || ''
      await ctx.editMessageText(
        newText.replace('✅ Confirmed', '✅✅ READY FOR PICKUP') + 
        '\n\n🎉 *Order is READY!* Customer has been notified.',
        { parse_mode: 'Markdown' }
      )
      
    } catch (error) {
      console.error('Error marking order ready:', error)
      await ctx.answerCbQuery('❌ Error processing request')
    }
  })
  
  // Start bot
  bot.launch()
  console.log('Telegram bot started')
  
  // Enable graceful stop
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
}

export const notifyOrder = async (orderId: string) => {
  if (!bot || !chatId) {
    console.log('Telegram bot not configured, skipping notification')
    return
  }

  try {
    const supabase = getSupabaseClient()
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('*')
      .eq('order_id', orderId)
      .single()
    
    if (orderError || !order) {
      console.error('Error fetching order for Telegram:', orderError)
      return
    }
    
    // Fetch order items
    const { data: orderItems } = await supabase
      .from('order_items')
      .select('*, menu_items(*)')
      .eq('order_id', order.id)
    
    // Build order summary
    const itemsSummary = orderItems?.map((item: any) => 
      `  • ${item.menu_items?.title || 'Unknown'} × ${item.quantity} - €${(item.price * item.quantity).toFixed(2)}`
    ).join('\n') || '  No items found'
    
    const baseUrl = process.env.PUBLIC_SITE_URL || 'http://localhost:4321'
    const adminUrl = `${baseUrl}/admin/orders`
    
    const msg = `🔔 *NEW ORDER - PICKUP ONLY*

🆔 *Order ID:* ${order.order_id}
👤 *Customer:* ${order.customer_name || 'Guest'}
💶 *Total:* €${order.total.toFixed(2)}
⏳ *Status:* Pending

📦 *Items:*
${itemsSummary}

📍 *Pickup Location:* Soikkokuja 12, Kuopio

*Select pickup time:*`
    
    // Create time selection keyboard
    const keyboard = Markup.inlineKeyboard([
      [
        Markup.button.callback('⏱ 20 min', `set_time_20_${order.order_id}`),
        Markup.button.callback('⏱ 30 min', `set_time_30_${order.order_id}`),
        Markup.button.callback('⏱ 40 min', `set_time_40_${order.order_id}`)
      ],
      [
        Markup.button.callback('⌨️ Custom Time', `custom_time_${order.order_id}`)
      ],
      [
        Markup.button.url('📋 View in Admin', adminUrl)
      ]
    ])
    
    await bot.telegram.sendMessage(chatId, msg, {
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
      ...keyboard
    })
    
    console.log(`Telegram notification sent for order ${orderId}`)
    
  } catch (error) {
    console.error('Telegram notification error:', error)
  }
}

export { bot }
