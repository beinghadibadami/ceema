import type { Metadata } from 'next';
import Link from 'next/link';
import { commerce } from '@/lib/commerce';
import { BuyBox } from '@/components/store';
import { Gallery } from '@/components/gallery';
import { Ingredients, HowTo, Comparison, FAQ, Feature, TrustStrip } from '@/components/sections';
import { HairWall } from '@/components/hair-wall';
export const metadata: Metadata = { title: 'Coconut Hair Oil — 500 ml & 1 litre', description: 'Choose your Ceema coconut hair oil size, explore the bottle, and build your pre-wash ritual.', openGraph: { title: 'Ceema Coconut Hair Oil', description: '500 ml or 1 litre. Your coconut hair ritual.', images: ['/images/bottle-500.webp'] }, twitter: { title: 'Ceema Coconut Hair Oil', images: ['/images/bottle-500.webp'] } };
export const dynamic = 'force-dynamic';
export default async function ProductPage({ searchParams }: { searchParams: Promise<{ size?: string }> }) { const { size } = await searchParams; const product = await commerce().getProduct(); return <><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/shop">Shop</Link><span>/</span><span>Coconut hair oil</span></nav><section className="product-layout"><Gallery/><BuyBox key={size} product={product} initialSize={size}/></section><Feature/><Ingredients/><HowTo/><Comparison/><HairWall/><FAQ/><TrustStrip/></>; }

