# Technical Context: Apex Insights Web

## Technologies Used

*   Frontend: Next.js 15+, React 18+
*   Backend: Potentially Node.js (via Next.js API routes), Supabase
*   Database: Potentially Supabase (PostgreSQL), Prisma ORM
*   Styling: Tailwind CSS, tailwind-merge, tailwindcss-animate
*   UI Components: Shadcn/ui (using Radix UI, Lucide Icons, clsx, cva)
*   Key Libraries/Tools: next-themes, TypeScript, node-fetch, papaparse
*   Font: Geist (via next/font)
*   Data Source: Google Sheets (via published CSV URLs)

## Setup Instructions

See the root `README.md` for basic setup instructions (`npm run dev`, etc.) and required Environment Variables for the pSEO functionality.

## Technical Constraints

*   (To be determined)

## Dependencies

*   Potentially Supabase
*   papaparse (for CSV parsing)

## Repository URL

*   [https://github.com/Skobyn/apex-insights-web](https://github.com/Skobyn/apex-insights-web)

## Standard Practices

*   Testing Strategy: (To be determined)
*   Code Style: ESLint configured (`eslint-config-next`), potentially Prettier (not explicitly listed but common)
*   Deployment: Vercel is suggested in the default README. Netlify config (`netlify.toml`) also exists. 