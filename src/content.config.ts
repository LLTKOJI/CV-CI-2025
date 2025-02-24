import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
    date: z.string(), // Usa `z.string()` si la fecha está en texto en el .mdx
  }),
});

const dataCollection = defineCollection({
  type: 'content',
  schema: z.object({
    key: z.string(),
    value: z.string(),
  }),
});

export const collections = {
  projects: projectsCollection,
  data: dataCollection,
};
