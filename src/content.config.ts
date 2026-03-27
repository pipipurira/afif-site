import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    cover: z.string().optional(),
  }),
})

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    year: z.string(),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false),
  }),
})

export const collections = { writing, work }