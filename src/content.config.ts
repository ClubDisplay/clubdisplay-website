import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const cases = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cases" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    client: z.string().optional(),
    category: z.string().optional(),
  }),
});

export const collections = { cases };
