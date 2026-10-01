import type { Metadata } from 'next';
import { CartContents } from '@/components/store';
export const metadata: Metadata = { title: 'Your bag', robots: { index: false } };
export default function CartPage() { return <section className="cart-page section"><h1>Your bag.</h1><CartContents/></section>; }
