import { atom, map } from 'nanostores'
import type { MenuItem } from '../lib/types'

export interface CartItem {
  menuItem: MenuItem
  quantity: number
}

export const cart = map<Record<string, CartItem>>({})

export function addToCart(menuItem: MenuItem) {
  const current = cart.get()
  const existingItem = current[menuItem.id]
  
  if (existingItem) {
    cart.setKey(menuItem.id, {
      ...existingItem,
      quantity: existingItem.quantity + 1
    })
  } else {
    cart.setKey(menuItem.id, {
      menuItem,
      quantity: 1
    })
  }
}

export function removeFromCart(menuItemId: string) {
  const current = cart.get()
  const { [menuItemId]: removed, ...rest } = current
  cart.set(rest)
}

export function updateQuantity(menuItemId: string, quantity: number) {
  if (quantity <= 0) {
    removeFromCart(menuItemId)
    return
  }
  
  const current = cart.get()
  const existingItem = current[menuItemId]
  
  if (existingItem) {
    cart.setKey(menuItemId, {
      ...existingItem,
      quantity
    })
  }
}

export function clearCart() {
  cart.set({})
}

export function getCartTotal(): number {
  const items = Object.values(cart.get())
  return items.reduce((total, item) => {
    return total + (item.menuItem.price * item.quantity)
  }, 0)
}

export function getCartItemCount(): number {
  const items = Object.values(cart.get())
  return items.reduce((count, item) => count + item.quantity, 0)
}

export function getCartItems(): CartItem[] {
  return Object.values(cart.get())
}
