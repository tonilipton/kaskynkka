import {getSupabaseClient} from '../lib/supabaseClient'
import type {SupabaseClient} from '@supabase/supabase-js'

export const getOrderById = async (orderId: string, client: SupabaseClient = getSupabaseClient()) => {
  const {data, error} = await client.from('orders').select('*').eq('order_id', orderId).single()
  if (error) throw error
  return data
}
