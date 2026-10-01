# Ceema design plan — pass 1

## Color
- Deep Lagoon `#0B5D6B`: headlines, navigation and primary ink on light surfaces.
- Coconut White `#FBFDFC`: clear, cool page surface; never cream.
- Sky Splash `#8FE3E1`: hero pool and product stage.
- Hibiscus `#FF4F7B`: primary purchase actions, with dark ink for contrast.
- Mango `#FFB62E`: a restrained size-selection detail.
- Ink `#07262D`: body text and accessible action text.

## Typography
Bricolage Grotesque, weight 600–800, supplies the broad, rounded, coconut-like wordmark and headlines. DM Sans, 400–600, supplies readable shopping information. Self-host font files. Scale: 14/16/20/28/40/64/112 px, fluid at larger sizes. Body line-height 1.6, headings 0.98–1.12; measure capped at 65 characters. Sentence case throughout. No colored single words in headlines or ornamental eyebrows.

## Layout concept
A bottle breaks the surface of a coconut-blue pool beside enormous left-aligned type, then the page settles into purposeful, spacious product storytelling.

Hero — left-aligned copy, centered artwork within right column:
```
Ceema           Shop  Our story  The hair wall           Bag (0)
┌────────────────────────────────────────────────────────────┐
│ A little coconut.       [bottle rising from cracked         │
│ A lot of good           coconut and suspended water]       │
│ hair days.                                                 │
│ Coconut hair oil…                                          │
│ [Find your size]            500 ml / 1 litre                │
└────────────────────────────────────────────────────────────┘
 Coconut hair oil    Two everyday sizes    Your pre-wash ritual
```

Feature — left visual, left-aligned benefit rows, no card grid:
```
 [transparent bottle]     Good hair starts with a little care.
                         (custom drop) Coconut oil ritual
                         (custom strand) Made for your routine
                         (custom bottle) A size that fits
                         [Meet your hair oil]
```

Product — left gallery, left-aligned right buy box:
```
 [thumb] [large scroll-snap gallery]    Ceema Coconut Hair Oil
 [thumb]                              500 ml / 1 litre
 [thumb]                              ₹price / ₹per ml
         [prev]  • • •  [next]         [− quantity +]
                                      [Add to cart] [Buy now]
                                      [pincode] [Check]
 Description / ingredients / routine / comparison / hair wall
 Mobile: stacked gallery and buy box + sticky add-to-cart bar
```

## Distinctive principles
1. Coconut water and light are the material vocabulary, not medicinal brown bottles or botanical ornaments.
2. Boldness is concentrated in the hero's giant rounded typography and photographic splash. Remaining sections use spacious flat compositions with varied, functional geometry.
3. The Hair Wall resembles a real hair album, with different photo heights, meaningful tags and a lightbox. Demo status is explicit; no invented social proof is presented as fact.
4. All commerce works through one typed adapter. Unconfigured services tell the truth instead of claiming a message was sent or payment was completed.
5. Only the hero has an automatic reveal. Marquee can pause; reduced motion shows the final scene immediately.

## Review before implementation
The initial idea included floating benefit stickers and a rotating coconut seal. Those are common cosmetic-site accessories and compete with the bottle. Removed them. Replaced a generic review-card grid with an image-first album and visible filters. Kept hibiscus for real actions rather than random text accents. Comparison will distinguish known sizes and disclosed information, without inventing competitors' deficiencies.

## Scope assumptions
The workspace is empty. Build the requested Next.js App Router/TypeScript/Tailwind project for Vercel, not a different hosting stack. Prices are demo values; Shopify is the source of truth when connected. No real certification, formula, shipping promise, address or customer endorsement is known. Video generation is not available as a dedicated tool: supply a locally rendered concept animation in both formats if an encoder is available, and exact replacement prompts. Contact/newsletter delivery needs configured endpoints and must not fake success.

## Pass 2 critique
Removed the registered-trademark accessory from the footer: it added visual noise and implied an unverified registration. The memorable element is the oversized lagoon headline beside the bottle emerging from coconut water. A first desktop preview revealed that the hero crop cut into the bottle; the final canvas extends the scene to keep the product in view. The page becomes deliberately quieter below the hero. The hero currently uses the completed final poster. Video playback support is built, but the cinematic video and intermediate storyboard frames remain unfinished. Browser testing stopped at the user's request; no comprehensive visual or accessibility audit is claimed.

