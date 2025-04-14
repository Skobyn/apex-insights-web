# Google Sheet Fields for Programmatic SEO (pSEO)

This document outlines the required columns (fields) for the two Google Sheets used to power the programmatic SEO landing pages in the Apex Insights Web project, based on the setup in `src/lib/data.ts`.

**Important:** Ensure your Google Sheets are **published to the web as CSV files** (`File > Share > Publish to web`) and the resulting URLs are placed in the `.env.local` file.

---

## Sheet 1: Parameter Combinations

*   **Purpose:** Defines *which* page URLs should be generated.
*   **Environment Variable:** `GOOGLE_SHEET_CSV_URL_COMBINATIONS`
*   **Required Columns:**
    *   `location`: The location parameter (e.g., "Miami", "Chicago"). Must match the dynamic segment `[location]` in the route.
    *   `service`: The service parameter (e.g., "AI Automation", "SEO"). Must match the dynamic segment `[service]` in the route.
    *   _Add columns for any other dynamic route parameters if the route structure changes._

Each row in this sheet represents a valid page URL (e.g., `/services/miami/ai-automation`) that will be pre-rendered at build time (via `generateStaticParams`) and included in the sitemap (`sitemap.ts`).

---

## Sheet 2: All Page Data

*   **Purpose:** Contains the actual content for *every* page combination defined in Sheet 1.
*   **Environment Variable:** `GOOGLE_SHEET_CSV_URL_ALL_DATA`
*   **Required Columns (Matching `PageData` interface in `src/lib/data.ts`):**
    *   `location`: Must exactly match a `location` value from Sheet 1.
    *   `service`: Must exactly match a `service` value from Sheet 1.
    *   `metaTitle`: Text for the page's `<title>` tag.
    *   `metaDescription`: Text for the page's `<meta name="description">` tag.
    *   `heroHeadline`: Main headline text for the Hero section.
    *   `heroSubheadline`: Sub-headline text for the Hero section.
    *   `heroCtaText`: Text for the main Call-to-Action button (Code provides a default: "Book My Free Consultation").
    *   `heroMicrocopy`: Small text below the CTA button (Code provides a default: "Schedule your complimentary 30-minute strategy session.").
    *   `problemHeadline`: Headline text for the Problem section.
    *   `problemPoints`: **Format:** A single string with individual points separated by a **pipe (`|`)**. Example: `Wasting time|Website not converting|Struggling with SEO`.
    *   `benefits`: **Format:** A valid **JSON string** representing an array of objects. Each object must have `title` (string) and `description` (string) keys. Example: `[{"title":"Boost Efficiency","description":"Streamline workflows..."},{"title":"Drive Leads","description":"Attract more visitors..."}]`.
    *   `testimonials`: **Format:** A valid **JSON string** representing an array of objects. Each object must have `quote` (string) and `name` (string) keys. Optional keys: `company` (string), `photoUrl` (string), `headline` (string). Example: `[{"quote":"Amazing results!","name":"Jane Doe","company":"Acme Corp","headline":"Leads Tripled!"},{"quote":"Very helpful.","name":"John Smith"}]`.
    *   `faqs`: **Format:** A valid **JSON string** representing an array of objects. Each object must have `question` (string) and `answer` (string) keys. Example: `[{"question":"How much does it cost?","answer":"It depends..."},{"question":"How long does it take?","answer":"Typically..."}]`.
    *   _Add columns corresponding to any other fields you uncomment or add to the `PageData` interface in `src/lib/data.ts`._

**Key Considerations:**

1.  **Column Names:** The column names in this sheet **must exactly match** the property names used in the data mapping logic within `src/lib/data.ts` (currently matching the `PageData` interface field names).
2.  **Data Formatting:** Adhere strictly to the specified formats (pipe-separated string, valid JSON strings) or modify the parsing logic in `src/lib/data.ts` (`.split('|')`, `JSON.parse()`).
3.  **Completeness:** Ensure every `location`/`service` combination from Sheet 1 has a corresponding row with all necessary data fields filled in Sheet 2. 