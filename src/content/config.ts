import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
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
