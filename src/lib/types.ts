export interface Category {
  id: string;
  title: string;
  description?: string;
}

export type Locale = "fi" | "en";

export interface MenuItem {
  id: string;
  // Support both old format (string) and new format (localized object)
  title: string | Record<Locale, string>;
  titleFi?: string; // Legacy support
  titleEn?: string; // Legacy support
  category_id: string;
  price: number;
  description?: string | Record<Locale, string>;
  descriptionFi?: string; // Legacy support
  descriptionEn?: string; // Legacy support
  image_url?: string;
  in_stock?: boolean;
}

export interface Order {
  id: string;
  order_id: string;
  stripe_session_id?: string;
  customer_name?: string;
  total: number;
  status: string;
  estimated_time?: number;
  created_at?: string;
}

export interface OrderItem {
  id?: string;
  order_id?: string;
  menu_item_id: string;
  quantity: number;
  price: number;
}
