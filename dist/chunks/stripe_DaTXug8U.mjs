import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not set");
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-12-18.acacia"
});
const STRIPE_CURRENCY = "eur";

export { STRIPE_CURRENCY as S, stripe as s };
