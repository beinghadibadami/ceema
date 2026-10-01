# Ceema asset prompts

Generated with the built-in image-generation tool. PNG masters and WebP deliverables live in `public/images`. Keep one canonical bottle: clear softly squared cylindrical bottle, pale clear oil, dark lagoon ribbed cap, pale aqua blank label. Never ask the image model to render packaging text. Composite approved SVG label artwork afterward.

## Product and brand files

| Filename | Ready-to-use prompt |
| --- | --- |
| `bottle-500.png` | Premium photorealistic 500 ml coconut hair oil bottle, clear softly squared cylindrical body, pale clear oil, deep teal ribbed screw cap, wide completely blank pale-aqua label. Front view, sunlit studio highlights, isolated true transparent background, portrait 1024×1536. No text, logo or watermark. |
| `bottle-1000.png` | Use bottle-500 as exact packaging reference. One litre version with wider taller body, identical cap material and blank aqua label. Front view, transparent background, portrait 1024×1536. No text. |
| `hero-splash.png` | Reference the canonical bottle. A coconut cracks into two halves in crystalline water, the bottle rises between them on the right, dramatic suspended splash, brilliant tropical light, clear turquoise #8FE3E1 backdrop, calm negative space at left. Landscape 1536×1024. Blank label; no typography, no UI. |
| `hero-start.png` | Match hero-splash camera, lighting and turquoise pool exactly. An intact coconut rests at bottom right, calm water, no visible bottle, no text. This is the opening animation frame. |
| `hero-mid.png` | Match hero-splash composition. Coconut halves part as the canonical bottle emerges halfway through them; a moderate crystalline splash begins. Blank label, exact same cap and proportions. |
| `gallery-back.png` | Use canonical bottle reference, straight back view, white aqua studio, blank back label with clean seam. Leave space for approved manufacturing and ingredient text. No invented text. |
| `gallery-label.png` | Macro photo of the canonical bottle's blank aqua label, straight front-on view, realistic clear bottle edges, tropical studio reflections. No text. |
| `size-comparison.png` | Canonical 500 ml and matching one litre bottles side by side, same teal cap and blank aqua labels, one litre naturally larger, turquoise studio background, no text. |
| `ingredient-story.png` | Editorial flat lay of fresh cut coconut halves and clear water, cool aqua background, hard tropical sunlight and fluid shadows. No leaves as ornament, no beige background, no text. |
| `lifestyle.png` | Canonical coconut oil bottle on a sunlit cool aqua bathroom shelf, tropical daylight and natural shadows, premium editorial product photography, blank aqua label, no text. |
| `in-use.png` | Natural Indian adult hands holding canonical coconut oil bottle during a simple hair oiling routine, close crop, realistic skin, fresh tropical daylight, aqua surroundings. No invented text. |

`hero-poster.webp` is the labeled final hero frame; `hero-splash.webp` is the exact static final. WebP derivatives retain matching base filenames. `ceema-logo.svg`, `ceema-logo-mono.svg`, `public/icon.svg` and `og.png` are created deterministically from the wordmark, droplet and hero composition.

## Hair Wall: independent fictional portraits

For each filename below generate a separate 3:4 photorealistic editorial photograph of a fictional Indian adult, non-celebrity, no recognizable real person, natural daylight, realistic hair texture. Mostly rear or three-quarter views, no text, watermark or claim of results. Vary cool white, aqua and natural foliage settings. These are placeholders, never real testimonials.

| Filename | Specific subject |
| --- | --- |
| `hair-01.png` | Long wavy dark hair, rear view, soft daylight. |
| `hair-02.png` | Shoulder-length curly dark hair, three-quarter back view. |
| `hair-03.png` | Long straight dark hair, window light. |
| `hair-04.png` | Short natural curls, rear view, realistic texture. |
| `hair-05.png` | Long loose waves, sunlight on the lengths. |
| `hair-06.png` | Short straight bob, side/back view. |
| `hair-07.png` | Long dense curls, rear view, garden daylight. |
| `hair-08.png` | Shoulder-length waves, casual natural setting. |
| `hair-09.png` | Close-up of long straight hair with natural shine. |
| `hair-10.png` | Short wavy haircut, rear three-quarter view. |
| `hair-11.png` | Long curly hair, natural volume, no exaggerated gloss. |
| `hair-12.png` | Shoulder-length straight hair, cool window light. |
| `review-video-01.png` | Fictional adult with long wavy hair speaking naturally to camera, home setting, no play icon. |
| `review-video-02.png` | Fictional adult with short curly hair speaking to camera, bright home setting, no play icon. |
| `review-video-03.png` | Fictional adult with long straight hair speaking to camera, relaxed natural light, no play icon. |

## Production hero-video replacement

Target filenames: `hero-reveal.webm` (VP9), `hero-reveal.mp4` (H.264). 1920×1024 master, 24 fps, 4–5 seconds, silent, non-looping. Use the exact labeled final composition in `hero-splash.webp` as the final frame reference. Begin with the intact coconut on the right in a turquoise pool. Split naturally into two halves; clear water splashes upward and the canonical Ceema bottle emerges. Settle to the exact final bottle position, scale and lighting. Preserve the blank left space; headlines and CTA are live HTML and remain static above the video. No camera move, no baked-in text, no floating graphics, no altered bottle design. Hold the exact final still for the last second. Supply a clean final still too. The demo currently uses the completed poster only. Intermediate storyboard frames and video files are not supplied; scripts/render-hero.mjs can create concept transitions after the missing frames are generated.

## Customer video replacement

Use genuine consented customer recordings, not synthetic endorsements. Add local or authorized HTTPS `videoSrc` to each video review entry. Describe hair type, length, concern and actual time used. Verify the order before showing a verified-buyer badge. Do not fabricate before/after outcomes.

