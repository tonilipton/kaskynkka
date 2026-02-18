Restaurant Website with Live Order Tracking
🛠 Technical Stack
Framework: Astro (SSR mode enabled for order handling)

CMS: Sanity.io (Menu & Content management)

Payments: Stripe Checkout

Real-time State: A lightweight database (e.g., Supabase or Vercel KV) to store and update order statuses.

Merchant Notifications: Telegram Bot API (Instant alerts to the owner's phone)

📋 Task List for LLM
1. Content Architecture (Sanity.io)
[ ] Implement schemas for Weekly Lunch, A la carte, and Catering.

[ ] Add an "In Stock" boolean toggle for menu items.

[ ] Connect Astro to Sanity to fetch menu data.

2. Ordering & Stripe Integration
[ ] Build a frontend Shopping Cart (Nanostores).

[ ] Implement Stripe Checkout redirect.

[ ] Set up a Stripe Webhook to catch successful payments.

[ ] Upon successful payment:

Create a new entry in the database (Status: Pending, ID: unique_order_id).

Redirect the customer to /order/[unique_order_id].

3. Merchant Notification System (Telegram)
[ ] Integrate a Telegram Bot that triggers on new orders.

[ ] The message sent to the merchant should include:

Order summary (Items & Total).

A direct link to the Merchant Management Page for that specific order.

4. Merchant Management UI (Mobile-optimized)
[ ] Build a simple, secure /admin/orders route.

[ ] For each order, provide buttons: Accept (15 min), Accept (30 min), Accept (45 min), and Mark as Ready.

[ ] Clicking a button must update the order status and estimated_time in the database.

5. Customer "Live Tracking" Page
[ ] Build the /order/[id] page.

[ ] Implement SWR (Stale-While-Revalidate) or simple polling (every 10-20 seconds) to check the database for status changes.

[ ] Visual States to display:

Status 1 (Pending): "Waiting for restaurant to confirm..."

Status 2 (Confirmed): "Order accepted! Estimated pickup in [X] minutes."

Status 3 (Ready): "Your order is ready for pickup! Welcome."

[ ] Ensure the page is lightweight and clearly visible on mobile screens.

6. SEO & Performance
[ ] Generate JSON-LD Structured Data for Local Business and Menu.

[ ] Use Astro's <Image /> component for all food photography.

[ ] Ensure perfect Lighthouse scores for Core Web Vitals (Speed & Accessibility).