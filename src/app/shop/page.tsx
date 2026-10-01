import type { Metadata } from 'next';
import { SizePicker, TrustStrip } from '@/components/sections';
import { commerce } from '@/lib/commerce';
export const metadata: Metadata = { title: 'Shop coconut hair oil' };
export const dynamic = 'force-dynamic';
export default async function Shop() { const product = await commerce().getProduct(); return <><div className="page-intro shop-intro"><p>One hair oil. Your kind of ritual.</p><h1>A little coconut.<br/>All yours.</h1><p>Meet Ceema Coconut Hair Oil.<br/>Find your size and make a little time for yourself.</p></div><SizePicker product={product}/><TrustStrip/></>; }
