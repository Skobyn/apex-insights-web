# Apex Insights Web

Apex Insights Web is a modern, SEO-focused web application for Apex Insights, designed to generate dynamic landing pages and showcase our services. The site now features updated branding with the new ApexLogo.svg.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, set up your environment variables (see below) and run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Geist, the Vercel fonts.

## Programmatic SEO (pSEO) Setup

This project utilizes Programmatic SEO to generate dynamic landing pages based on combinations of parameters (e.g., `location` and `service`).

*   **Dynamic Route:** `src/app/services/[location]/[service]/page.tsx`
*   **Data Fetching:** `src/lib/data.ts` fetches content from Google Sheets published as CSV URLs.
*   **Sitemap:** `src/app/sitemap.ts` automatically generates sitemap entries for all dynamic pages.
*   **Landing Page Template:** Content structure is based on `memory-bank/landingtemplet.md`.

## Environment Variables

To run this project, you need to set up environment variables. Create a `.env.local` file in the project root and add the following variables:

```
# Base URL of the deployed site (used for sitemap)
NEXT_PUBLIC_BASE_URL=http://localhost:3000 # Change for production

# Published CSV URL for Google Sheet containing page parameter combinations (e.g., location, service)
# Ensure columns match the expected names in src/lib/data.ts (e.g., 'location', 'service')
GOOGLE_SHEET_CSV_URL_COMBINATIONS="YOUR_PUBLISHED_GOOGLE_SHEET_CSV_URL_FOR_COMBINATIONS"

# Published CSV URL for Google Sheet containing ALL data for every page variation
# Ensure columns match the fields defined in the PageData interface in src/lib/data.ts
GOOGLE_SHEET_CSV_URL_ALL_DATA="YOUR_PUBLISHED_GOOGLE_SHEET_CSV_URL_FOR_ALL_DATA"

# Add other environment variables as needed (e.g., API keys for analytics, etc.)
```

**Important:** For production deployment, configure these environment variables directly in your hosting provider's settings (e.g., Vercel, Netlify).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
