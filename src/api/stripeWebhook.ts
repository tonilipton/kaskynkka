import {createOrder} from '../api/orders'
import {getSupabaseClient} from '../lib/supabaseClient'
import type {Order, OrderItem} from '../lib/types'
import {generateUniqueId} from '../utils/uniqueId'

/**
 * Handle successful Stripe payment
 * This function is used by the webhook handler
 */
export const handleStripeSuccess = async (
  session: Stripe.Checkout.Session,
  items: any[]
): Promise<Order> => {
  const customerName = session.metadata?.customer_name || 'Guest'
  const totalStr = session.metadata?.total || '0'
  const total = parseFloat(totalStr)
  
  const order: Order = {
    id: '',
    order_id: generateUniqueId(),
    customer_name: customerName,
    total: total,
    status: 'Pending'
  }
  
  const orderItems: OrderItem[] = items.map((item: any) => ({
    menu_item_id: item.menu_item_id,
    quantity: item.quantity,
    price: item.price,
  }))
  
  const createdOrder = await createOrder(getSupabaseClient(), order, orderItems)
  return createdOrder
}
