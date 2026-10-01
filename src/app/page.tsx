import { Hero, Marquee } from '@/components/hero';
import { Feature, Ingredients, ConcernPicker, HowTo, Comparison, Quality, SizePicker, FAQ, TrustStrip } from '@/components/sections';
import { HairWall } from '@/components/hair-wall';
import { commerce } from '@/lib/commerce';
export const dynamic = 'force-dynamic';
export default async function Home() { const product = await commerce().getProduct(); return <><Hero/><Marquee/><Feature/><Ingredients/><ConcernPicker/><HowTo/><Comparison/><Quality/><HairWall/><SizePicker product={product}/><FAQ/><TrustStrip/></>; }
