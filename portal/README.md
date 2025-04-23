# Apex Insights Customer Portal (portal.getapexinsights.com)

## Overview

This is the secure, multi-tenant customer portal for Apex Insights clients. It provides role-based access to dashboards, data, and management features for client organizations (Units/Groups). The portal is built with a Google Cloud-first architecture and will be deployed at [https://portal.getapexinsights.com](https://portal.getapexinsights.com).

**Key Features (MVP):**
- Multi-tenant architecture (strict data isolation)
- Role-based access control (PlatformAdmin, GroupManager, UnitManager, UnitUser)
- Admin management (CRUD for Groups, Units, User assignments)
- Invitation-based onboarding (no self-registration)
- Secure login and password reset (Firebase Auth)
- Embedded dashboards (Google Looker) and data chat agent
- Google Cloud-first deployment (Cloud Run, Cloud SQL, Firebase Auth, Secret Manager)

## Tech Stack
- Next.js (App Router), React, Tailwind CSS, Shadcn/ui
- Node.js (API routes/Cloud Functions)
- Google Cloud SQL (PostgreSQL)
- Firebase Authentication
- Google Cloud Run, Secret Manager, Storage
- Google Looker (dashboard embedding)
- (Optional: Dialogflow for chat agent)

## Getting Started

1. **Install dependencies:**
   ```bash
   cd portal
   npm install
   # or yarn install / pnpm install / bun install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in required values (Firebase, Cloud SQL, Looker, etc.)

3. **Run the development server:**
   ```bash
   npm run dev
   # or yarn dev / pnpm dev / bun dev
   ```
   The portal will be available at [http://localhost:3000](http://localhost:3000) (or another port if specified).

## Status
This portal is a work in progress. See the Memory Bank and project documentation for current architecture, tasks, and implementation details. 