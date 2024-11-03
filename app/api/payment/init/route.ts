import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(request: NextRequest) {
  try {

    // you can implement some basic check here like, is user valid or not
    const { product } = await request.json();

    const checkoutSession: Stripe.Checkout.Session =
      await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: { 
                currency: "usd", 
                product_data: { 
                    name: product.name,
                    description: product.description ? product.description : "No description",
                }, 
                unit_amount: product.price * 100, 
            }, 
            quantity: product.quantity, 
          }
        ],
        mode: 'payment',
        success_url: "https://tts-new-eight.vercel.app/exhibit/success/book", 
        cancel_url: "https://tts-new-eight.vercel.app/", 
        metadata: {
            description: product.description ? product.description : "No description",
        }
      });
    return NextResponse.json({ id: checkoutSession.id });
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Server', { status: 500 });
  }
}