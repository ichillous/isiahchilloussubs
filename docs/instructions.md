# Repository Instructions

## Context & Goal
This repo powers the personal site for Isiah Chillous: a dual-identity site for software engineering and filmmaking with a future subscription business. The product must communicate credibility fast, capture inbound requests, and provide an admin control surface for operations.

### Product Strategy
- Become a clear, high-trust personal brand site with dual tracks (Engineer / Filmmaker).
- Use the site to capture inbound leads, quotes, and subscriptions.
- Support operational control via an admin dashboard (messages, projects, quotes).
- Deliver tasteful motion (Apple-ish scroll storytelling) while remaining fast and accessible.

### Primary Outcomes
1. Clear positioning in 5 seconds (who you are + what you do + why it matters).
2. Inbound capture (contact, film quote requests, subscriptions).
3. Operational control (admin dashboard + project tracking).
4. Motion system that feels premium but respects accessibility.

## Audiences
- Recruiters / hiring managers: want credibility, evidence, speed.
- Film clients: want a reel, packages/approach, and a professional quote workflow.
- Future customers (subscriptions): want a simple value proposition and a checkout that works.

## Information Architecture (Single Best Structure)
| Route | Purpose | Key elements |
| --- | --- | --- |
| `/` | Main page: who you are + what you do | Hero, dual-track identity (Engineer / Filmmaker), highlighted work, subscription CTA, contact CTA |
| `/work` | Index of selected work | Filters: Software / Film |
| `/software` | Engineering portfolio | Case studies, measurable outcomes, stack, links |
| `/film` | Filmmaking page | Reel, portfolio grid, process, quote request form |
| `/subscribe` | Subscriptions | Benefits, tiers, Stripe Checkout |
| `/about` | Your story | Short narrative, values, credibility signals |
| `/contact` | Contact form | Writes to DB |
| `/admin` | Admin home | Projects board + inbox + quote requests |
| `/admin/inbox` | Contact messages | Status (new/read/responded), search |
| `/admin/projects` | Project tracker | Web / Video / Job Recruiters |
| `/admin/quotes` | Film quote requests | Summary, estimated pricing assist |

### Admin Security
- `/admin*` must be non-indexed and access controlled.
- Only admin user should have read/write access to admin data.

## UX: Homepage Layout That Works
### Above the Fold (Ruthless)
- H1: “Isiah Chillous — Software Engineer & Filmmaker”
- 1-liner: “I build performant web systems and cinematic stories.”
- Primary CTAs: “View Engineering Work”, “View Film Work”
- Secondary CTA: “Subscribe” (updates / membership / offers)

### Scroll Narrative (Apple-ish Without Gimmick)
Use 3 pinned chapters (~1 viewport height) with text swaps and subtle media transitions:
1. Engineer chapter → “Systems, performance, reliability, craft.”
2. Filmmaker chapter → “Documentary eye, clean visuals, strong storytelling.”
3. Builder chapter → “Products, experiments, and what I’m shipping now.”

Preferred tech: GSAP ScrollTrigger for pin + scrub + swap. If needed, approximate with Framer Motion + Intersection Observer, but ScrollTrigger is the most direct path.

### Work Preview (Fast Credibility)
- 2–3 software case studies (only the best)
- 6–9 film thumbnails (grid)
- “See more” links to `/software` and `/film`

### Subscription Teaser (Simple)
“Get my monthly dispatch: what I’m building, shipping, and learning.”
- Free tier first if unsure; paid optional later.

## Visual System (Black/White + Retro Font)
### Design Tokens
- Background: white
- Text: near-black
- Accent: one optional minimal accent

### Typography
- Headlines: retro mono (Space Mono / IBM Plex Mono)
- Body: clean sans (Inter) or mono everywhere if committed

### Micro-interactions
- Hover: underline + slight translate
- Buttons: sharp corners (or subtle 6px), consistent
- Optional: subtle grain overlay for texture

## Accessibility (Non-Negotiable)
- Respect `prefers-reduced-motion` (disable pin/scrub or reduce intensity).
- Maintain high contrast (black on white is fine).
- Keep motion tasteful and performance-friendly.

## Core Features & Implementation (Next.js / Supabase / Stripe)
### 1) Contact Form → Visible in Admin
Flow:
1. Public user submits form.
2. Server Action inserts into `contact_messages`.
3. Admin views and updates status.

Note: Next.js Server Actions are preferred for server-side submissions and secrets.

### 2) Admin: Messages + Projects + Quotes
Auth:
- Supabase Auth (magic link ok).
- Only admin user gets `role = 'admin'`.

Dashboard modules:
- Inbox: contact + quote requests
- Projects: basic kanban or table with filters
- Quick stats: new messages, active projects, pending quotes

### 3) Project Tracker Categories
Keep it usable, not fancy:
- Categories: Web, Video, Recruiters
- Status: Idea / Active / Blocked / Shipped
- Fields: Priority + Next Action (prevents “work hard, finish nothing”)

### 4) Film Quote Request Form (Pricing Inputs)
Collect cost-driving fields:
- Contact: name, email, phone, company (optional)
- Logistics: shoot date(s), location, travel
- Project type: Event / Wedding / Commercial / Documentary / Other
- Scope: hours of coverage, number of cameras, audio needs
- Deliverables: highlight, full edit, social cutdowns, raw footage
- Complexity: turnaround time, motion graphics level, usage rights
- Budget range selector

Admin view should show:
- Computed complexity score
- Suggested starting price band (rule-of-thumb, editable)

### 5) Stripe Subscriptions
Recommended approach:
- Use Stripe Checkout in subscription mode for speed and reliability.
- Store in Supabase:
  - `stripe_customer_id`
  - `stripe_subscription_id`
  - `status`
  - `current_period_end`
  - `price_id` / tier

Deeper subscription behavior (portal, upgrades, trials) can follow later.

## Supabase Data Model (Minimal + Scalable)
### Tables
- `profiles`
  - `id` (uuid, matches auth user)
  - `email`
  - `role` (admin | user)
- `contact_messages`
  - `id`, `name`, `email`, `subject`, `message`
  - `status` (new/read/responded)
  - `created_at`
- `film_quote_requests`
  - fields above
  - `status` (new/reviewing/quoted/won/lost)
- `projects`
  - `category` (web/video/recruiters)
  - `status`, `priority`, `title`, `notes`, `next_action`, `links[]`
- `subscriptions` (or `billing_customers` + `billing_subscriptions`)
  - Stripe IDs + status fields

### RLS Policy Posture
- Public inserts: allowed only for contact + quote requests.
- Reads: admin-only.
- Updates: ensure SELECT policies exist (Supabase requires SELECT for UPDATE).
- Prefer separate policies per operation (avoid `FOR ALL`).

## Non-Functional Requirements
- Performance: fast initial load, defer heavy motion.
- SEO: `/admin*` must be non-indexed.
- Maintainability: simple, scalable schema and clear admin flows.

