# Active Context: Apex Insights Web

## Current Focus

Implemented the core structure for Programmatic SEO (pSEO) landing pages. This involved creating a dynamic route (`src/app/services/[location]/[service]`), data fetching logic (`src/lib/data.ts`) using Google Sheets (CSV), and a sitemap (`src/app/sitemap.ts`). The page component (`page.tsx`) includes basic structure based on `landingtemplet.md` but requires integration with actual React components and final data mapping verification.

Added a new "Owners" page with a Google Dialogflow chatbot integration for SMB Tax assistance.

## Recent Changes/Decisions

*   Created the initial AI Agent Workshop landing page.
*   Manually added the `Avatar` component (`src/components/ui/avatar.tsx`) due to build issues.
*   Created the `CountdownTimer` client component (`src/components/ui/countdown-timer.tsx`).
*   Enhanced the visual design of the AI Agent Workshop page (Hero, cards, countdown timer, icons).
*   Created the Gemini-Powered BI Quick Start landing page (`src/app/gemini-bi-quickstart/page.tsx`) using the established visual template.
*   Created the Workspace AI Productivity Boost landing page (`src/app/workspace-ai-boost/page.tsx`).
*   Updated `task.md` and `progress.md`.
*   Created pSEO dynamic route: `src/app/services/[location]/[service]/page.tsx`.
*   Created data fetching logic in `src/lib/data.ts` to use Google Sheet CSVs.
*   Created `src/app/sitemap.ts` for dynamic sitemap generation.
*   Installed `papaparse` for CSV parsing.
*   Updated `README.md` with pSEO setup and env var instructions.
*   Updated `memory-bank/techContext.md`.
*   Created the Owners page (`src/app/owners/page.tsx`) with a Google Dialogflow chatbot integration for SMB Tax assistance.

## Immediate Next Steps

*   **Crucial:** Configure Google Sheets (Combinations & All Data) and publish as CSVs.
*   **Crucial:** Set environment variables (`GOOGLE_SHEET_CSV_URL_COMBINATIONS`, `GOOGLE_SHEET_CSV_URL_ALL_DATA`, `NEXT_PUBLIC_BASE_URL`) in `.env.local`.
*   **Crucial:** Verify data mapping in `src/lib/data.ts` matches Google Sheet columns exactly.
*   **Crucial:** Replace placeholder HTML in `src/app/services/[location]/[service]/page.tsx` with actual React components based on `landingtemplet.md` and pass fetched data as props.
*   Task 1: Define specifics for testimonial card modifications (Details needed).
*   Task 3: Plan structure/implementation for the blog section.
*   Task 4: Gather social media links and identify placement locations.
*   Task 5: Identify files needing marketing copy updates.
*   Task 11: Populate AI Agent Workshop page with real content (agenda, bios, links, countdown date).
*   Task 13: Populate Gemini BI Quickstart page with real content (links, etc.).
*   Task 15: Populate Workspace AI Boost page with real content (pricing, links).
*   Task 16: Consider adding the Owners page to the navigation menu in the Header component. 