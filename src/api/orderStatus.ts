import type {SupabaseClient} from '@supabase/supabase-js'
import {getSupabaseClient} from '../lib/supabaseClient'

export const updateOrderStatus = async (orderId: string, status: string, client: SupabaseClient = getSupabaseClient()) => {
  const {error} = await client
    .from('orders')
    .update({status})
    .eq('order_id', orderId)
    .maybeSingle()
  if (error) throw error
}
