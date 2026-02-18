/**
 * Generate a unique order ID
 * Format: ORD-YYYYMMDD-HHMMSS-RANDOM
 */
export function generateUniqueId(): string {
  const now = new Date()
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '')
  const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '')
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()
  return `ORD-${dateStr}-${timeStr}-${random}`
}
