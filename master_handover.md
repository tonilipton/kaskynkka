# Master Handover Document - Ravintola Käskynkkä

**Project**: Ravintola Käskynkkä Restaurant Website  
**Date**: 2026-02-18  
**Status**: In Development (MVP Complete, Phase 5-6 In Progress)  
**Tech Stack**: Astro, React, TypeScript, Tailwind CSS, Supabase, Stripe, Telegram Bot API

---

## 📋 Executive Summary

This is a production-ready restaurant website with online ordering capabilities. The site features a sophisticated "Urban" design aesthetic (dark theme with gold accents), bilingual support (Finnish/English), real-time order tracking, and Telegram notifications for restaurant staff.

**Key Differentiators:**

- **Pickup-only ordering** with clear customer communication
- **Real-time status updates** via polling (10-second intervals)
- **Interactive Telegram bot** with time selection buttons
- **Urban dark theme** - sophisticated, fine-dining aesthetic
- **Bilingual** - Full Finnish/English support

---

## 🏗️ Architecture Overview

### Frontend

- **Framework**: Astro (SSG with client-side hydration)
- **Styling**: Tailwind CSS with custom Urban design system
- **Language**: TypeScript
- **State**: React context for cart, vanilla JS for order tracking

### Backend

- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth (for admin)
- **Payments**: Stripe Checkout
- **Notifications**: Telegram Bot API
- **Hosting**: Static site (Astro build output)

### External Services

- **Supabase**: Database + Auth
- **Stripe**: Payment processing
- **Telegram**: Staff notifications
- **Google Fonts**: Cormorant Garamond + Inter

---

## 📁 File Structure

```
kaskynkka/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Cart.astro       # Shopping cart component
│   │   ├── CartButton.tsx   # Cart toggle button (React)
│   │   ├── Hero.astro       # Hero section with video/bg image
│   │   ├── LanguageToggle.tsx # FI/EN switcher
│   │   ├── MenuItem.astro   # Individual menu item card
│   │   ├── MobileNav.tsx    # Mobile hamburger menu
│   │   ├── Navigation.astro # Main navigation header
│   │   └── Services.astro   # Services/services section
│   │
│   ├── layouts/
│   │   └── Layout.astro     # Global layout with SEO, fonts, theme
│   │
│   ├── pages/
│   │   ├── index.astro      # Home page (Hero + Menu preview)
│   │   ├── menu.astro       # Full menu page
│   │   ├── checkout.astro   # Checkout page (Stripe integration)
│   │   ├── tilaus.astro     # Finnish checkout (alias)
│   │   ├── order/
│   │   │   └── [id].astro   # Order tracking page with polling
│   │   ├── admin/
│   │   │   ├── orders.astro # Admin: View/manage orders (needs styling)
│   │   │   └── menu.astro   # Admin: Menu management (TODO)
│   │   └── api/             # Serverless API routes
│   │       ├── create-checkout-session.ts  # Stripe checkout creation
│   │       ├── order-status.ts             # Order status polling endpoint
│   │       ├── order-by-session.ts         # Get order by Stripe session
│   │       ├── stripe-webhook.ts           # Stripe webhook handler
│   │       └── update-order-status.ts      # Update order status (Telegram callbacks)
│   │
│   ├── lib/
│   │   ├── supabaseClient.ts  # Supabase client initialization
│   │   └── i18n.ts            # Translation utilities
│   │
│   ├── tools/
│   │   └── telegramBot.ts     # Telegram bot logic & notifications
│   │
│   └── styles/
│       └── global.css         # Global styles (minimal)
│
├── public/                    # Static assets
│   ├── images/               # Food photos, hero images
│   ├── fonts/                # Local fonts (if any)
│   └── favicon.svg          # Site favicon
│
├── supabase/
│   └── migrations/           # Database migrations (if using)
│
├── tailwind.config.mjs       # Tailwind configuration
├── astro.config.mjs          # Astro configuration
├── package.json              # Dependencies
└── .env.example              # Environment variables template
```

---

## 🎨 Design System (Urban Theme)

### Color Palette

```javascript
// tailwind.config.mjs
colors: {
  dark: '#121212',      // Page background
  surface: '#1E1E1E',   // Cards, sections
  accent: '#C4A484',    // Buttons, prices, highlights
  light: '#F5F5F5',     // Primary text
  muted: '#A3A3A3',     // Secondary text
}
```

### Typography

- **Headings**: Cormorant Garamond (300, 400) - Elegant serif
- **Body**: Inter (400, 500) - Modern sans-serif
- **Accent**: Uppercase + `tracking-ultra` (0.2em) for luxury feel

### Usage Examples

```astro
<!-- Card with surface background -->
<div class="bg-surface border border-dark p-6">
  <h2 class="font-serif text-2xl text-accent uppercase tracking-ultra">Title</h2>
  <p class="text-muted">Description text</p>
</div>

<!-- Accent button -->
<button class="px-6 py-3 bg-accent text-dark font-sans uppercase tracking-wider text-sm hover:bg-accent/90 transition-colors">
  Click Me
</button>

<!-- Muted text -->
<span class="text-muted text-sm">€24.00</span>
```

---

## 🗄️ Database Schema

### orders

```sql
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id text UNIQUE NOT NULL,        -- Customer-facing ID (e.g., "KSK-2024-001")
  stripe_session_id text,               -- Stripe Checkout session ID
  customer_name text,
  customer_email text,
  total numeric NOT NULL,
  status text DEFAULT 'Pending',        -- Pending, Confirmed, Ready
  estimated_time integer,               -- Minutes until ready
  created_at timestamp DEFAULT now()
);
```

### order_items

```sql
CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id uuid REFERENCES menu_items(id),
  quantity integer NOT NULL,
  price numeric NOT NULL                -- Price at time of order
);
```

### menu_items

```sql
CREATE TABLE menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  price numeric NOT NULL,
  category text,                        -- starter, main, dessert, etc.
  image text,                           -- Image URL/path
  sold_out boolean DEFAULT false
);
```

### categories (optional)

```sql
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  sort_order integer DEFAULT 0
);
```

---

## 🔌 API Endpoints

### Customer-Facing

| Endpoint                        | Method | Description                          |
| ------------------------------- | ------ | ------------------------------------ |
| `/api/create-checkout-session`  | POST   | Creates Stripe checkout session      |
| `/api/order-status?orderId=xxx` | GET    | Get current order status for polling |
| `/api/order-by-session?id=xxx`  | GET    | Get order details by Stripe session  |

### Webhooks

| Endpoint              | Method | Description                       |
| --------------------- | ------ | --------------------------------- |
| `/api/stripe-webhook` | POST   | Handles Stripe payment completion |

### Admin/Internal

| Endpoint                   | Method | Description                        |
| -------------------------- | ------ | ---------------------------------- |
| `/api/update-order-status` | POST   | Update order status (Telegram bot) |

---

## 🤖 Telegram Bot

### Setup

1. Create bot via [@BotFather](https://t.me/botfather)
2. Get bot token
3. Set `TELEGRAM_BOT_TOKEN` in `.env`
4. Get chat ID (use [@userinfobot](https://t.me/userinfobot))
5. Set `TELEGRAM_CHAT_ID` in `.env`

### Flow

```
1. New order created
   ↓
2. Bot sends message with time selection buttons:
   "📦 Pickup Order #12345
    👤 Customer: John Doe
    💰 Total: €45.90
    ⏰ [20 min] [30 min] [40 min] [Custom]"
   ↓
3. Staff clicks time button
   ↓
4. Order updated in DB (status: Confirmed, estimated_time: 30)
   ↓
5. Bot edits message: "✅ Confirmed - Ready in 30 min [Ready!]"
   ↓
6. Customer sees update on tracking page (10s polling)
   ↓
7. Staff clicks "Ready!" when order done
   ↓
8. Order status updated to "Ready"
   ↓
9. Customer notified on tracking page
```

### Bot Commands (in `src/tools/telegramBot.ts`)

- `sendOrderNotification(order)` - Send new order alert
- `updateOrderStatus(orderId, status, estimatedTime)` - Update status with callback handling

---

## 🌐 Internationalization (i18n)

### Structure

```typescript
// src/lib/i18n.ts
export const translations = {
  fi: {
    // Finnish translations
    nav: { home: "Etusivu", menu: "Menu", about: "Meistä" },
    cart: { add: "Lisää Tilaukseen", total: "Yhteensä" },
    // ...
  },
  en: {
    // English translations
    nav: { home: "Home", menu: "Menu", about: "About" },
    cart: { add: "Add to Order", total: "Total" },
    // ...
  },
};
```

### Usage

```astro
---
import { getLocale, t } from '../lib/i18n';
const locale = getLocale(Astro.url.pathname);
---

<a href="/">{t(locale, 'nav.home')}</a>
<button>{t(locale, 'cart.add')}</button>
```

### URL Structure

- `/` → Finnish (default)
- `/en` → English
- `/menu` → Finnish menu
- `/en/menu` → English menu

---

## 🛒 Order Flow

```
1. Customer browses menu
   ↓
2. Customer adds items to cart (React context)
   ↓
3. Customer clicks "Checkout"
   ↓
4. /api/create-checkout-session creates Stripe session
   ↓
5. Redirect to Stripe Checkout
   ↓
6. Customer completes payment
   ↓
7. Stripe redirects to /order/{session_id}
   ↓
8. /api/stripe-webhook receives payment confirmation
   ↓
9. Order created in DB with status "Pending"
   ↓
10. Telegram bot sends notification to restaurant
   ↓
11. Restaurant selects prep time via Telegram
   ↓
12. Order status updated to "Confirmed" with ETA
   ↓
13. Customer sees confirmation on tracking page (polling)
   ↓
14. Restaurant clicks "Ready!" when done
   ↓
15. Order status updated to "Ready"
   ↓
16. Customer notified on tracking page
   ↓
17. Customer picks up order
```

---

## 🔐 Environment Variables

```env
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIs...

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Telegram
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=-1001234567890

# Site
PUBLIC_SITE_URL=https://kaskynkka.net
```

---

## 🚀 Deployment

### Build

```bash
npm run build
# Output: dist/ folder
```

### Deploy to Netlify

```bash
# Using Netlify CLI
netlify deploy --prod --dir=dist

# Or connect GitHub repo to Netlify
```

### Environment Setup on Host

1. Set all environment variables in hosting dashboard
2. Configure Stripe webhook endpoint: `https://kaskynkka.net/api/stripe-webhook`
3. Set webhook secret in env vars

---

## 📱 Order Tracking Page

**File**: `src/pages/order/[id].astro`

**Features:**

- Displays order details
- Shows current status with visual indicator
- Polls `/api/order-status` every 10 seconds
- Updates UI when status changes (Pending → Confirmed → Ready)
- Shows estimated pickup time when confirmed
- Displays pickup location prominently

**Polling Logic:**

```javascript
async function checkStatus() {
  const response = await fetch(`/api/order-status?orderId=${orderId}`);
  const data = await response.json();
  updateStatusUI(data.status, data.estimated_time);
}

const pollInterval = setInterval(checkStatus, 10000);
```

---

## 🎨 Admin Panel (TODO)

**Current State**: Basic functionality exists but needs Urban theme styling

**Files to Style:**

- `src/pages/admin/orders.astro` - Order management
- `src/pages/admin/menu.astro` - Menu management (create)

**Requirements:**

- Apply dark theme (bg-dark, text-light)
- Use accent color for buttons/links
- Style tables with surface background
- Add proper typography (serif headings, sans body)

---

## ⚠️ Known Issues & TODOs

### High Priority

- [ ] **Admin Panel Styling** - Apply Urban theme to admin pages
- [ ] **Menu Management Page** - Create CRUD interface for menu items
- [ ] **CSRF Protection** - Add CSRF tokens to API routes
- [ ] **Sitemap Generation** - Create dynamic sitemap.xml

### Medium Priority

- [ ] **Image Optimization** - Use Astro Image component
- [ ] **Accessibility** - ARIA labels, keyboard navigation
- [ ] **Error Boundaries** - Better error handling
- [ ] **Loading States** - Skeleton loaders for menu

### Low Priority

- [ ] **Gallery Section** - Photo gallery of food/interior
- [ ] **Blog/News** - Restaurant updates
- [ ] **Gift Cards** - Digital gift card system
- [ ] **Reservation System** - Table booking

---

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# URL: http://localhost:4321

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Type checking
npx tsc --noEmit
```

---

## 📞 Support Contacts

**Project Owner**: Ravintola Käskynkkä  
**Address**: Soikkokuja 12, 70780 Kuopio, Finland  
**Phone**: +358 50 123 4567  
**Email**: info@kaskynkka.net

**Technical Lead**: [Your Name]  
**GitHub**: [Repository URL]  
**Staging**: [Staging URL]

---

## 📝 Notes for Future Developers

### Adding a New Page

1. Create `.astro` file in `src/pages/`
2. Wrap with `Layout` component
3. Use Urban design classes
4. Add translations to `src/lib/i18n.ts`
5. Update navigation if needed

### Adding a New Menu Category

1. Add category to `menu_items` table
2. Update menu page query
3. Add translations

### Modifying Order Status Flow

1. Update status values in DB (orders.status)
2. Update Telegram bot logic (`src/tools/telegramBot.ts`)
3. Update order tracking UI (`src/pages/order/[id].astro`)
4. Update admin panel status display

### Changing Colors

1. Update `tailwind.config.mjs`
2. Search/replace in all files (be careful!)
3. Update this document

---

**End of Document**

_Last Updated: 2026-02-18_  
_Version: 1.0_
