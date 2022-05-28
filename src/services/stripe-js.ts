import { loadStripe } from '@stripe/stripe-js';


export async function getStripeJs() {
    const stripeJs = await loadStripe(process.env.NEXT_PLUBLIC_STRIPE_PUBLIC_KEY)

    return stripeJs;
}