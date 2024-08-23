import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean(),
    tags: z.array(z.string()),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    tech: z.array(z.string()),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
  projects: projectsCollection,
};
