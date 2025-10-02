import { defineCollection, z } from 'astro:content';

const linkSchema = z.object({
  label: z.string(),
  url: z.string().url(),
  external: z.boolean().optional(),
});

const mediaSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
  caption: z.string().optional(),
});

const papers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    venue: z.string(),
    year: z.number(),
    authors: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    doi: z.string().optional(),
    links: z.array(linkSchema).optional(),
    featured: z.boolean().optional(),
    highlight: z.string().optional(),
    heroMedia: mediaSchema.optional(),
  }),
});

export const collections = { papers };
