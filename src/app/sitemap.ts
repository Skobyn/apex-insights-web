// Temporarily comment out imports and implementations related to the problematic dynamic route
// import { getAllParameterCombinations } from '@/lib/data';

import { MetadataRoute } from 'next';

// Configure the route for static generation
export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://getapexinsights.com';

  // Core static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/ai-agent-workshop`, lastModified: new Date() },
    { url: `${baseUrl}/gemini-bi-quickstart`, lastModified: new Date() },
    { url: `${baseUrl}/workspace-ai-boost`, lastModified: new Date() },
    { url: `${baseUrl}/owners`, lastModified: new Date() }
    // Add other static pages here as needed
  ];

  // Temporarily comment out dynamic route generation
  /*
  // Dynamic service pages based on location & service combinations
  let dynamicPages: MetadataRoute.Sitemap = [];
  try {
    const combinations = await getAllParameterCombinations();
    dynamicPages = combinations.map(({ location, service }) => ({
      url: `${baseUrl}/services/${encodeURIComponent(location)}/${encodeURIComponent(service)}`,
      lastModified: new Date(),
    }));
    console.log(`Added ${dynamicPages.length} dynamic pages to sitemap.`);
  } catch (error) {
    console.error("Failed to generate sitemap entries for dynamic pages:", error);
    // Continue with just the static pages if there's an error
  }

  return [...staticPages, ...dynamicPages];
  */
  
  // Return only static pages for now
  return staticPages;
} 