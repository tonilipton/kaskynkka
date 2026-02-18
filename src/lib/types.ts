export interface Category {
  id: string
  title: string
  description?: string
}

export interface MenuItem {
  id: string
  title: string
  category_id: string
  price: number
  description?: string
  image_url?: string
  in_stock?: boolean
}

export interface Order {
  id: string
  order_id: string
  stripe_session_id?: string
  customer_name?: string
  total: number
  status: string
  estimated_time?: number
  created_at?: string
}

export interface OrderItem {
  id?: string
  order_id?: string
  menu_item_id: string
  quantity: number
  price: number
}
