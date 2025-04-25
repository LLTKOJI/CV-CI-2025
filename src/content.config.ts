import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    skills: z.array(z.string()).optional(),
    date: z.string(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    date: z.string().or(z.date()).transform(val => new Date(val)),
  }),
});

const dataCollection = defineCollection({
  type: 'content',
  schema: z.object({
    key: z.string(),
    value: z.string().optional(), 
  }),
});

export const collections = { projects };
