
/**
 * Utility functions for working with council data
 */

/**
 * Convert a council name to a URL-friendly slug
 * @param name The council name to convert
 * @returns A URL-friendly slug
 */
export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-');
};
