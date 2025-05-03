/**
 * Shared validation functions for council and parking company slugs
 * Used by both React components and Netlify functions
 */

import { councilNames } from '../../scripts/council-slugs.js';

// Known parking companies
const knownParkingCompanies = [
  'apcoa-parking',
  'euro-car-parks',
  'parkingeye',
  'ukpc',
  'nsl',
  'smart-parking',
  'rcp-parking',
  'premier-park',
  'minster-baywatch',
  'uk-parking-control',
  'uk-parking-enforcement',
  'uk-parking-administration',
  'safe-duty',
  'parkmaven',
  'p4-parking',
  'carparkers',
  'mk1-parking',
  'rmc-parking',
  'city-permits',
  'saba-parking',
  'lodge-parking',
  'city-car-parks',
  'secure-a-space',
  'select-parking',
  'spring-parking',
  'total-car-parks',
  'total-parking-solutions',
  'car-park-services',
  'britannia-parking',
  'civil-enforcement',
  'national-car-parks',
  'elite-car-parking',
  'met-parking-services',
  'east-kent-nhs',
  'all-parking-services',
  'am-parking-services',
  'anpr-365',
  'parking-collection-services',
  'ocs',
  'nsgl',
  'pess',
  'q-park'
];

// Create a Set of valid council slugs for efficient lookups
export const validCouncilSlugs = new Set(councilNames.map(name => 
  name.toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
));

// Create a Set of valid parking company slugs
export const validParkingCompanySlugs = new Set(knownParkingCompanies);

/**
 * Validates if a slug represents a valid council
 */
export const isValidCouncil = (slug: string): boolean => {
  // Direct match
  if (validCouncilSlugs.has(slug)) return true;
  
  // Pattern matches
  if (slug.endsWith('-council') || 
      slug.endsWith('-city-council') || 
      slug.startsWith('city-of-')) {
    // Extract the base name
    const baseName = slug
      .replace(/-council$/, '')
      .replace(/-city-council$/, '')
      .replace(/^city-of-/, '');
    
    // Only accept base names that are in our valid councils list
    return validCouncilSlugs.has(baseName);
  }
  
  return false;
};

/**
 * Validates if a slug represents a valid parking company
 */
export const isValidParkingCompany = (slug: string): boolean => {
  // Check if it's in our known companies list
  if (validParkingCompanySlugs.has(slug)) return true;
  
  // Check if it matches common parking company patterns
  const validPatterns = [
    /-parking$/,           // ends with -parking
    /-car-park$/,          // ends with -car-park
    /-car-parks$/,         // ends with -car-parks
    /^park-/,              // starts with park-
    /-park$/               // ends with -park
  ];
  
  // Only consider it valid if it matches a pattern AND we know it's a real company
  if (validPatterns.some(pattern => pattern.test(slug))) {
    return validParkingCompanySlugs.has(slug);
  }
  
  return false;
}; 