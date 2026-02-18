# Ravintola Käskynkkä - Development Roadmap

## 📊 Current Status Analysis

### ✅ Completed:

- **Backend Infrastructure**: Supabase schema, API endpoints, Stripe integration, Telegram bot
- **Core Functionality**: Cart system, checkout flow, order tracking, admin panel
- **Design System**: Tailwind CSS configured with Urban dark theme
- **Language Toggle**: Finnish/English language switcher implemented
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Real Images**: Professional food photography integrated
- **Order Tracking**: Real-time status updates with polling (every 10s)
- **Telegram Notifications**: Interactive bot with time selection buttons (20/30/40 min + custom)
- **Pickup Only System**: Clear messaging on checkout and order tracking pages

### ⚠️ Remaining Tasks:

- **SEO**: JSON-LD structured data, Open Graph tags, sitemap
- **Admin Panel Styling**: Apply Urban dark theme to admin pages
- **Menu Management**: Admin page to update menu items
- **CSRF Protection**: Add CSRF tokens to API routes

---

## 🎯 Implementation Tasks

### Phase 1: Foundation ✓ COMPLETED

- [x] **Install Tailwind CSS**: Dark theme with Urban color palette
- [x] **Create Layout Component**: Global Layout.astro with fonts, dark theme
- [x] **Configure Tailwind**: Colors (dark: #121212, surface: #1E1E1E, accent: #C4A484)
- [x] **Google Fonts**: Cormorant Garamond + Inter loaded

### Phase 2: Core Features ✓ COMPLETED

- [x] **Hero Section**: Full viewport with background image and overlay
- [x] **Menu Display**: Urban-styled menu items with proper typography
- [x] **Cart System**: Add to cart, quantity controls, totals
- [x] **Checkout Flow**: Stripe integration with pickup messaging
- [x] **Order Tracking**: Real-time status updates via polling

### Phase 3: Language & Navigation ✓ COMPLETED

- [x] **Language Toggle**: FI/EN switcher in header
- [x] **Finnish Content**: Default language for all customer-facing content
- [x] **English Translations**: Complete English version
- [x] **Mobile Navigation**: Hamburger menu with smooth animations

### Phase 4: Notifications & Real-time Updates ✓ COMPLETED

- [x] **Telegram Bot**: Restaurant notification system
- [x] **Interactive Buttons**: 20min, 30min, 40min, Custom time options
- [x] **Status Updates**: Pending → Confirmed → Ready workflow
- [x] **Client-side Polling**: 10-second interval for live updates
- [x] **Pickup Messaging**: Clear "Pickup Only" notices on all pages

### Phase 5: SEO & Admin (IN PROGRESS)

- [ ] **SEO Implementation**:
  - [ ] JSON-LD structured data (Restaurant schema)
  - [ ] Open Graph tags for social sharing
  - [ ] Meta descriptions and keywords
  - [ ] Sitemap.xml generation
- [ ] **Admin Panel Styling**:
  - [ ] Apply Urban dark theme to /admin/orders
  - [ ] Style tables, buttons, forms with accent colors
  - [ ] Mobile-responsive admin interface
- [ ] **Menu Management**:
  - [ ] Create /admin/menu page
  - [ ] CRUD operations for menu items
  - [ ] Image upload for new items
  - [ ] Category management
- [ ] **Security**:
  - [ ] Add CSRF protection to API routes
  - [ ] Validate all form inputs
  - [ ] Secure admin authentication

### Phase 6: Documentation (IN PROGRESS)

- [x] **Update To-Do List**: Mark completed tasks
- [ ] **Create Master Handover**: Comprehensive documentation for future developers

---

## 🎨 Design System Reference

### Colors

| Token     | Value     | Usage                    |
| --------- | --------- | ------------------------ |
| `dark`    | `#121212` | Page background          |
| `surface` | `#1E1E1E` | Cards, sections          |
| `accent`  | `#C4A484` | Buttons, prices, borders |
| `light`   | `#F5F5F5` | Primary text             |
| `muted`   | `#A3A3A3` | Secondary text           |

### Typography

- **Headings**: Cormorant Garamond (300/400) - "Fine Dining" elegance
- **Body**: Inter (400/500) - Modern readability
- **Special**: Uppercase + `tracking-ultra` (0.2em) for luxury feel

---

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📋 Environment Variables Required

```env
# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_key

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Telegram
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id

# Site
PUBLIC_SITE_URL=https://kaskynkka.net
```

---

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.astro
│   ├── MenuItem.astro
│   ├── Cart.astro
│   ├── CartButton.astro
│   ├── LanguageToggle.astro
│   └── MobileNav.astro
├── layouts/
│   └── Layout.astro     # Global layout with theme
├── pages/
│   ├── index.astro      # Home page
│   ├── menu.astro       # Menu page
│   ├── checkout.astro   # Checkout page
│   ├── order/
│   │   └── [id].astro   # Order tracking
│   ├── admin/
│   │   ├── orders.astro # Admin order management
│   │   └── menu.astro   # (TODO) Menu management
│   └── api/             # API routes
│       ├── create-checkout-session.ts
│       ├── stripe-webhook.ts
│       ├── order-status.ts
│       └── update-order-status.ts
├── lib/
│   ├── supabaseClient.ts
│   └── i18n.ts          # Translation utilities
├── tools/
│   └── telegramBot.ts   # Telegram bot logic
└── styles/
    └── global.css
```

---

## 📝 Database Schema

### orders

- `id`: uuid (primary key)
- `order_id`: text (unique, customer-facing ID)
- `stripe_session_id`: text
- `customer_name`: text
- `customer_email`: text
- `total`: numeric
- `status`: text (Pending, Confirmed, Ready)
- `estimated_time`: integer (minutes)
- `created_at`: timestamp

### order_items

- `id`: uuid (primary key)
- `order_id`: uuid (foreign key)
- `menu_item_id`: uuid (foreign key)
- `quantity`: integer
- `price`: numeric

### menu_items

- `id`: uuid (primary key)
- `title`: text
- `description`: text
- `price`: numeric
- `category`: text
- `image`: text
- `sold_out`: boolean

---

## 🔔 Telegram Bot Commands

The bot sends notifications to the restaurant with interactive buttons:

**New Order Notification:**

```
📦 Pickup Order #12345
👤 Customer: John Doe
💰 Total: €45.90
⏰ Choose preparation time:
[20 min] [30 min] [40 min] [Custom]
```

**After Time Selected:**

```
✅ Order #12345 Confirmed
⏱️ Ready in: 30 minutes
[Ready for Pickup!]
```

**Pickup Ready:**

```
🎉 Order #12345 is Ready!
Customer has been notified.
```

---

## 🎯 Next Steps

1. **Add SEO** - JSON-LD + Open Graph tags
2. **Style Admin Panel** - Apply Urban theme
3. **Create Menu Admin** - CRUD for menu items
4. **Add CSRF Protection** - Secure API routes
5. **Generate Sitemap** - SEO optimization

---

_Last Updated: 2026-02-18_
_Next Priority: **SEO Implementation**_
