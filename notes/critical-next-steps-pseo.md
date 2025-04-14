# Critical Next Steps for pSEO Setup

This file outlines the essential configuration and implementation steps required to activate the programmatic SEO (pSEO) landing pages powered by Google Sheets.

**‼️ Complete these steps before expecting the dynamic pages at `/services/[location]/[service]/` to work correctly. ‼️**

---

## 1. Configure Google Sheets & Publish CSVs

*   **Create/Prepare Two Google Sheets:**
    *   **Sheet 1 (Combinations):** Must contain columns named exactly `location` and `service`, listing all the unique combinations you want to generate pages for (e.g., Miami/SEO, Chicago/AI Automation).
    *   **Sheet 2 (All Data):** Must contain columns for `location`, `service`, and all the data fields required by the `PageData` interface in `src/lib/data.ts`. Refer to `notes/google-sheets-pseo-fields.md` for the full list and required formatting (especially for `problemPoints`, `benefits`, `testimonials`, `faqs`). Ensure every combination from Sheet 1 has a corresponding data row here.
*   **Publish Both Sheets:**
    *   Go to `File > Share > Publish to web` in each Google Sheet.
    *   Select the specific sheet tab containing your data.
    *   Choose **"Comma-separated values (.csv)"** as the format.
    *   Click **"Publish"**.
    *   Copy the generated URL for each sheet.

## 2. Set Environment Variables

*   **Create/Open `.env.local`:** In the root directory of the project, create a file named `.env.local` if it doesn't exist.
*   **Add Variables:** Add the following lines, replacing the placeholder URLs with the actual published CSV URLs you copied in the previous step:
    ```env
    # Base URL of the deployed site (used for sitemap)
    # Change http://localhost:3000 for your actual production domain
    NEXT_PUBLIC_BASE_URL=http://localhost:3000

    # Published CSV URL for Sheet 1 (Combinations)
    GOOGLE_SHEET_CSV_URL_COMBINATIONS="YOUR_PUBLISHED_GOOGLE_SHEET_CSV_URL_FOR_COMBINATIONS"

    # Published CSV URL for Sheet 2 (All Data)
    GOOGLE_SHEET_CSV_URL_ALL_DATA="YOUR_PUBLISHED_GOOGLE_SHEET_CSV_URL_FOR_ALL_DATA"
    ```
*   **Restart Development Server:** If your `npm run dev` server is running, stop it (Ctrl+C) and restart it to load the new environment variables.

## 3. Verify Data Mapping in Code

*   **Open `src/lib/data.ts`**.
*   **Review `fetchAllDataFromSource` function:** Carefully examine the mapping logic (around lines 132-146 in the current version).
    *   Ensure the property names on the left side (e.g., `metaTitle: row.metaTitle`) exactly match the column headers in your **Sheet 2 (All Data)** CSV.
    *   Verify the parsing logic for complex fields (`problemPoints.split('|')`, `JSON.parse(row.benefits)`, etc.) matches how you formatted the data in your sheet. Adjust the code if your formatting is different.

## 4. Implement React Components for Template

*   **Open `src/app/services/[location]/[service]/page.tsx`**.
*   **Replace Placeholders:** Locate the placeholder `<section>` elements (e.g., for Hero, Problem, Benefits sections).
*   **Import Your Components:** Import the actual React components you've built based on `memory-bank/landingtemplet.md` (e.g., `import HeroSection from '@/components/HeroSection';`).
*   **Render Components with Data:** Replace the placeholders with your imported components, passing the fetched `data` object (available within the `DynamicServicePage` function) as props. For example:
    ```jsx
    // Instead of:
    // <section id="hero">...</section>

    // Use:
    <HeroSection 
        headline={data.heroHeadline} 
        subheadline={data.heroSubheadline} 
        ctaText={data.heroCtaText}
        microcopy={data.heroMicrocopy}
        // Pass other needed props from data
    />

    // Similarly for ProblemSection, BenefitSection, etc.
    <ProblemSection 
        headline={data.problemHeadline}
        points={data.problemPoints}
    />
    <BenefitSection benefits={data.benefits} />
    <TestimonialSection testimonials={data.testimonials} />
    <FaqSection faqs={data.faqs} />
    ```

---

Once these steps are successfully completed, the dynamic pages should fetch data from your Google Sheets and render using your template components when you access the corresponding URLs. 