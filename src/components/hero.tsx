'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { assets } from '@/lib/assets';
import { Icon } from './icons';
// Keep the supplied film's final frame: its composition differs from the poster.
export function Hero() {
 const [play, setPlay] = useState(false);
 useEffect(() => {
  const mq = matchMedia('(prefers-reduced-motion: reduce)');
  if (!mq.matches) setPlay(true);
  const update = () => { if (mq.matches) setPlay(false); };
  mq.addEventListener('change', update);
  return () => mq.removeEventListener('change', update);
 }, []);
 return <section className="hero">
  <div className="hero-atmosphere" aria-hidden="true" style={{ backgroundImage: `url(${assets.hero})` }}/>
  <div className="hero-art">
   <Image src={assets.hero} alt="Ceema coconut hair oil rising from a freshly cracked coconut in a sunlit splash" fill sizes="100vw" priority fetchPriority="high"/>
   {play && <video autoPlay muted playsInline preload="metadata" poster={assets.hero} onError={() => setPlay(false)} aria-hidden="true">
    <source src={assets.heroMp4} type="video/mp4"/>
   </video>}
  </div>
  <div className="hero-copy">
   <h1>A little coconut.<br/>A lot of good<br/>hair days.</h1>
   <p>Meet your new pre-wash ritual.<br/>Coconut hair oil. A little care, bottled.</p>
   <Link href="/shop" className="button hero-button">Find your size <Icon name="bag" size={20}/></Link>
   <span className="hero-size">500 ml & 1 litre · Made for your ritual</span>
  </div>
  <div className="hero-bottom"><span>Coconut hair oil, with love.</span><span>Take a moment for your hair <span aria-hidden="true">↓</span></span></div>
 </section>;
}
export function Marquee() { const [paused, setPaused] = useState(false); const text = <><span>Coconut hair oil</span><Icon name="coconut"/><span>Two everyday sizes</span><Icon name="drop"/><span>A pre-wash ritual</span><Icon name="hair"/><span>A little time for you</span><Icon name="sun"/></>; return <div className={`marquee ${paused ? 'paused' : ''}`}><div className="marquee-track"><div>{text}</div><div aria-hidden="true">{text}</div></div><button aria-label={paused ? 'Play product marquee' : 'Pause product marquee'} onClick={() => setPaused(!paused)}>{paused ? '▶' : 'Ⅱ'}</button></div>; }
