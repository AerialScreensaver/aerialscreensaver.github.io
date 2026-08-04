import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const features = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/features' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      icon: z.string().optional(),
      order: z.number(),
      homepage: z.boolean().default(false),
      // Set false for entries that only exist as a homepage card (the card's
      // `anchor` should then point at the features-page section it teases).
      featuresPage: z.boolean().default(true),
      badge: z.string().optional(), // small pill next to the title, e.g. "Beta"
      anchor: z.string().optional(), // features-page anchor the homepage card links to (defaults to the entry id)

      // Visuals — all optional. If both image and video are set, video wins
      // (image becomes the poster fallback and the lightbox-expand target for stills).
      image: image().optional(), // path relative to the .md file, e.g. ./bring-your-own-videos.png
      // Raw image URL (basename in /public/screenshots/). Use this when the asset
      // carries a wide-gamut ICC profile we don't want Sharp to strip during resize.
      imageSrc: z.string().optional(),
      video: z.string().optional(), // basename in /public/videos/, e.g. high-frame-rate.mp4
      videoPoster: z.string().optional(), // basename in /public/posters/, e.g. high-frame-rate.jpg
      alt: z.string().optional(), // alt text / aria label for the media

      // Placeholder mode: when no real `image`/`video` has been captured yet,
      // render a styled empty card so the design is visualized end-to-end.
      // Set to `image` or `video` to control the icon hint shown.
      // Real `image`/`video` always wins; this is ignored once one is provided.
      placeholder: z.enum(['image', 'video']).optional(),
    }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    question: z.string(),
    category: z.string(),
    order: z.number().default(0),
    badge: z.string().optional(), // small pill next to the question, e.g. "Beta"
  }),
});

export const collections = { features, faq };
