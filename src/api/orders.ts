import type {SupabaseClient} from '@supabase/supabase-js'
import type {Order, OrderItem} from '../lib/types'

export const createOrder = async (client: SupabaseClient, order: Order, items: OrderItem[]) => {
  const {data: orderData, error: orderError} = await client
    .from('orders')
    .insert([order])
    .select('*')
    .single()

  if (orderError) throw orderError

  const orderId = orderData.id

  const itemRows = items.map(i => ({...i, order_id: orderId}))
  const {error: itemsError} = await client
    .from('order_items')
    .insert(itemRows)

  if (itemsError) throw itemsError

  return orderData
}
