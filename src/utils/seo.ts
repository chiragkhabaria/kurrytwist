/**
 * SEO Utility Functions
 * Helper functions for generating JSON-LD schemas and SEO metadata
 */

export interface RecipeSchemaData {
  name: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  category: string;
  datePublished: string;
  author?: string;
}

/**
 * Generate JSON-LD Recipe Schema
 * @see https://schema.org/Recipe
 */
export function generateRecipeSchema(data: RecipeSchemaData, siteUrl: string = 'http://localhost:4321') {
  // Convert "20 mins" to ISO 8601 duration "PT20M"
  const convertToDuration = (time: string): string => {
    const match = time.match(/(\d+)\s*(min|hour|hr)/i);
    if (!match) return 'PT0M';
    
    const value = parseInt(match[1]);
    const unit = match[2].toLowerCase();
    
    if (unit.includes('hour') || unit.includes('hr')) {
      return `PT${value}H`;
    }
    return `PT${value}M`;
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: data.name,
    description: data.description,
    image: `${siteUrl}${data.image}`,
    author: {
      '@type': 'Organization',
      name: data.author || 'Kurry Twist',
    },
    datePublished: data.datePublished,
    prepTime: convertToDuration(data.prepTime),
    cookTime: convertToDuration(data.cookTime),
    totalTime: convertToDuration(data.prepTime) + convertToDuration(data.cookTime),
    recipeYield: `${data.servings} servings`,
    recipeCategory: data.category,
    recipeCuisine: 'Indian',
    recipeIngredient: data.ingredients,
    recipeInstructions: data.instructions.map((instruction, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      text: instruction,
    })),
  };
}

/**
 * Format URL for canonical links
 */
export function formatCanonicalUrl(path: string, siteUrl: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${cleanPath}`;
}

/**
 * Generate Open Graph image URL
 */
export function formatOgImage(imagePath: string, siteUrl: string): string {
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${siteUrl}${cleanPath}`;
}

/**
 * Truncate description for meta tags
 */
export function truncateDescription(text: string, maxLength: number = 160): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}
