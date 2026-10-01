import type { Metadata } from 'next';
import '@fontsource-variable/bricolage-grotesque';
import '@fontsource-variable/dm-sans';
import './globals.css';
import { StoreProvider, Header } from '@/components/store';
import { Footer } from '@/components/sections';
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL : 'http://localhost:3000');
export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: { default: 'Ceema — A little coconut. A lot of good hair days.', template: '%s | Ceema' }, description: 'Meet your new coconut hair oil ritual. Explore Ceema in 500 ml and 1 litre, from Ceem Healthcare Private Limited.', openGraph: { title: 'Ceema — A little coconut. A lot of good hair days.', description: 'Coconut care. For your kind of hair.', images: [{ url: '/images/og.png', width: 1200, height: 630 }] }, twitter: { card: 'summary_large_image', images: ['/images/og.png'] }, icons: { icon: '/icon.svg' }, robots: { index: !!process.env.SHOPIFY_STORE_DOMAIN, follow: true } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-IN"><body><a href="#main" className="skip-link">Skip to content</a><StoreProvider><Header/><main id="main">{children}</main><Footer/></StoreProvider></body></html>; }

