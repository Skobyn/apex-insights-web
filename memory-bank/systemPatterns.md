# System Patterns: Apex Insights Web

## Architecture Overview

Likely a Monolithic Frontend application built with Next.js (App Router). Potential for backend functionality via Next.js API routes or serverless functions (e.g., on Vercel/Netlify).

---

## Customer Portal Architecture (portal.getapexinsights.com)

- Multi-tenant schema: Users, Units, Groups, Roles, Invitations (Google Cloud SQL)
- Role-Based Access Control (RBAC): PlatformAdmin, GroupManager, UnitManager, UnitUser
- Google Cloud-first deployment: Cloud Run, Cloud SQL, Firebase Auth, Secret Manager
- Modular React components for navigation, dashboard, chat, admin UIs
- Secure onboarding: invitation-only, cryptographically strong tokens, time-limited
- Embedded dashboards: Google Looker (signed URLs, context-aware)
- Embedded chat agent: context-aware, pluggable (e.g., Dialogflow)
- Strict data isolation enforced at DB and application layers

## Key Technical Decisions

*   Choice of Next.js as the primary framework.
*   Use of Tailwind CSS for styling.
*   Use of Shadcn/ui for UI components.
*   Use of TypeScript.
*   For the portal: Google Cloud-first for all backend and infrastructure.

## Design Patterns Used

*   React Component Model
*   Server Components / Client Components (inherent in Next.js App Router)
*   Modular, role-based layouts for portal
*   Secure onboarding and RBAC enforcement

## Component Relationships

*   (To be detailed as components are built)
*   For the portal: navigation, dashboard, chat, admin, and profile components will be modular and role-aware.

## Design Patterns Used

*   React Component Model
*   Server Components / Client Components (inherent in Next.js App Router)
*   (Others to be identified)

## Component Relationships

*   (To be detailed as components are built) 