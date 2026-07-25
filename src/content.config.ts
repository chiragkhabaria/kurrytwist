/**
 * Content Collections Configuration
 * Defines schema for recipe markdown files using Zod validation
 * Updated for Astro v6 with glob loader
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    prepTime: z.string(), // e.g., "20 mins"
    cookTime: z.string(), // e.g., "30 mins"
    servings: z.number(),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']).optional(),
    image: z.string(), // Path relative to public/ (e.g., "/images/recipe.jpg")
    youtube: z.string().optional(), // YouTube video ID
    featured: z.boolean().optional().default(false),
    date: z.coerce.date(),
  }),
});

export const collections = {
  recipes: recipesCollection,
};
