import { atom, map } from "nanostores";
import type { MenuItem } from "../lib/types";

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

// LocalStorage configuration
const CART_STORAGE_KEY = "kaskynkka-cart-v1";
const CART_EXPIRY_HOURS = 24;
const CART_MAX_AGE_MS = CART_EXPIRY_HOURS * 60 * 60 * 1000;

// Load cart from localStorage
function loadCartFromStorage(): Record<string, CartItem> {
  if (typeof window === "undefined") return {};

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      const { items, timestamp } = parsed;

      // Check if cart is not expired
      if (timestamp && Date.now() - timestamp < CART_MAX_AGE_MS) {
        return items || {};
      } else {
        // Clear expired cart
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    }
  } catch (e) {
    console.error("Failed to load cart from storage:", e);
  }
  return {};
}

// Save cart to localStorage
function saveCartToStorage(items: Record<string, CartItem>) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify({
        items,
        timestamp: Date.now(),
      }),
    );
  } catch (e) {
    console.error("Failed to save cart to storage:", e);
  }
}

// Initialize cart with stored data or empty object
export const cart = map<Record<string, CartItem>>(loadCartFromStorage());

// Subscribe to cart changes and save to localStorage
cart.subscribe((value) => {
  saveCartToStorage(value);
});

export function addToCart(menuItem: MenuItem) {
  const current = cart.get();
  const existingItem = current[menuItem.id];

  if (existingItem) {
    cart.setKey(menuItem.id, {
      ...existingItem,
      quantity: existingItem.quantity + 1,
    });
  } else {
    cart.setKey(menuItem.id, {
      menuItem,
      quantity: 1,
    });
  }
}

export function removeFromCart(menuItemId: string) {
  const current = cart.get();
  const { [menuItemId]: removed, ...rest } = current;
  cart.set(rest);
}

export function updateQuantity(menuItemId: string, quantity: number) {
  if (quantity <= 0) {
    removeFromCart(menuItemId);
    return;
  }

  const current = cart.get();
  const existingItem = current[menuItemId];

  if (existingItem) {
    cart.setKey(menuItemId, {
      ...existingItem,
      quantity,
    });
  }
}

export function clearCart() {
  cart.set({});
  if (typeof window !== "undefined") {
    localStorage.removeItem(CART_STORAGE_KEY);
  }
}

export function getCartTotal(): number {
  const items = Object.values(cart.get());
  return items.reduce((total, item) => {
    return total + item.menuItem.price * item.quantity;
  }, 0);
}

export function getCartItemCount(): number {
  const items = Object.values(cart.get());
  return items.reduce((count, item) => count + item.quantity, 0);
}

export function getCartItems(): CartItem[] {
  return Object.values(cart.get());
}
