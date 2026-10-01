import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { assets } from '@/lib/assets';
import { TrustStrip } from '@/components/sections';
export const metadata: Metadata = { title: 'Our story' };
export default function About() { return <><section className="about-hero section"><div><h1>Rooted in<br/>a familiar ritual.</h1><p>Oiling your hair. Taking your time. A small moment that belongs entirely to you.</p><p>Ceema is a coconut hair oil brand by Ceem Healthcare Private Limited. We’re making room for an everyday ritual, with a fresh outlook and two simple sizes.</p><Link href="/shop" className="button">Find your Ceema</Link></div><div className="about-photo"><Image src={assets.lifestyle} fill alt="Ceema concept bottle in sunlit tropical surroundings" sizes="(max-width: 700px) 100vw, 50vw"/></div></section><section className="section story-text"><h2>A little less complicated.<br/>A little more you.</h2><p>Hair care doesn’t need a new promise every day. We believe it can start with something familiar: coconut hair oil and the time you choose to spend on yourself.</p><p>Our story is still taking shape. Sourcing details, the complete formula and manufacturing information will be shared when verified. Until then, we’ll be clear about what we know and what we’re still confirming.</p></section><TrustStrip/></>; }
