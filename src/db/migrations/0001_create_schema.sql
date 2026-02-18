-- Supabase migration
-- Table: categories
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text
);

-- Table: menu_items
create table if not exists menu_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category_id uuid references categories(id),
  price numeric not null,
  description text,
  image_url text,
  in_stock boolean default true
);

-- Table: orders
create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  order_id text unique not null,
  stripe_session_id text,
  customer_name text,
  total numeric not null,
  status text default 'Pending',
  estimated_time int,
  created_at timestamp not null default now()
);

-- Table: order_items
create table if not exists order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references orders(id),
  menu_item_id uuid references menu_items(id),
  quantity int not null, 
  price numeric not null
);
