import Stripe from "stripe";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

if (!STRIPE_SECRET_KEY) {
  console.warn(
    "STRIPE_SECRET_KEY is not set - Stripe functionality will be disabled",
  );
}

export const stripe = STRIPE_SECRET_KEY
  ? new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: "2026-01-28.clover",
    })
  : (null as unknown as Stripe);

export const STRIPE_CURRENCY = "eur";
