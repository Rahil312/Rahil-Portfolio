---

# Portfolio Website Plan (Next.js + TypeScript + Tailwind CSS + Vercel)

## Polished Motion + Custom Domain Launch

## 0) Goal

Build a fast, recruiter-friendly portfolio for **Rahil Shukla** that:

* Highlights **internships + impact metrics** (latency, throughput, time saved).
* Shows **Featured Projects** as mini case studies.
* Automatically lists **ALL GitHub repos** (including small/extra repos + optional forks) with search + filters.
* Includes **Resume PDF** + Contact form.
* Feels **premium and modern** with **smooth animations + micro-interactions** (without hurting performance).
* Can be extended into a **blog/CMS** and an **authenticated admin dashboard**.
* Deploys to **Vercel** and is published on your **custom domain** (HTTPS, canonical redirects, clean previews).

---

## 1) Branding / Positioning (use this on the homepage hero)

**Headline (pick one):**

* “Applied AI / Full-Stack Engineer building real-time LLM systems, retrieval, and scalable backend services.”
* “Software engineer (MCS @ NCSU) with experience in Python microservices, real-time WebSocket/WebRTC systems, and GenAI workflows.”

**Homepage ‘Impact’ bullets**

* Supported **30+ concurrent** WebRTC + LLM sessions (demo load).
* Achieved **sub-second** streaming STT/TTS.
* Reduced manual LLM review effort via automated evaluation + scoring.
* Delivered top-k semantic search over **50k+ chunks** with Postgres vector storage.

---

## 1A) Visual Design System (to make it look “amazing + professional”)

**Design principles**

* Clean, high-contrast typography + generous spacing.
* One “accent” color (used sparingly) + neutral base palette.
* Consistent component styling (buttons/cards/badges/links).
* Minimal but high-quality visuals: subtle gradients, soft borders, tasteful shadows.

**Typography**

* Use `next/font` for consistent rendering.
* Pair a clean sans (body) + optional display font (hero) for premium feel.

**Reusable UI primitives (build once, use everywhere)**

* `Container`, `Section`, `Button`, `Badge`, `Card`, `Tag/Chip`, `Divider`
* `TimelineItem` (experience)
* `Kpi` (metric chip for impact numbers)
* `Callout` (featured highlights)
* Optional: `ThemeToggle` using `next-themes` (dark mode is expected for portfolios)

---

## 1B) Motion System (smooth, intentional animations)

### Goals

* Make pages feel alive **without** being “busy.”
* Keep motion **fast + subtle**: 150–350ms for most UI transitions.
* Always support accessibility: **honor `prefers-reduced-motion`**.

### Recommended tooling

* **Framer Motion** for page transitions, staggered reveals, and component animations.
* **Tailwind transitions** for hover/active states (buttons, cards, links).
* (Optional) A “scroll reveal” helper using IntersectionObserver (or Motion’s `whileInView`).

### Where to use motion (high impact, low risk)

**Global**

* Page transition: fade + slight slide (very subtle).
* Navbar: sticky + blur on scroll, smooth height/opacity change.
* Theme toggle: icon crossfade/rotate.

**Home**

* Hero: headline + subtext stagger-in.
* Impact bullets: stagger reveal.
* Featured projects: card hover lift + shadow + subtle border glow.
* “Scroll to next” hint (optional).

**Projects**

* Search/filter interactions: instant UI response; optional subtle fade for list updates.
* Repo cards: hover lift + quick “shine” / border highlight.
* Loading state: skeleton shimmer (subtle).

**Case studies**

* Section reveals as you scroll.
* Image lightbox open/close animation (optional).
* Reading progress indicator (optional, tasteful).

### Motion constraints (so it stays fast)

* Avoid heavy parallax everywhere.
* Avoid forced “smooth scrolling” by default (it can harm accessibility/UX). If you add it, make it optional + disable for reduced motion.
* Keep animations transform/opacity-based (GPU-friendly).
* Test on low-power devices.

---

## 2) Sitemap / Pages

1. `/` Home

   * Hero + impact bullets
   * Featured Projects (4–6)
   * Experience preview
   * “All Projects” preview (top 6 repos)
   * Contact CTA

2. `/projects`

   * Featured Projects section (manual)
   * **All GitHub Repos** section (auto from GitHub API)
   * Search + filters + sort + toggle “Include forks”
   * Extra / Non-GitHub projects section

3. `/projects/[slug]`

   * Case-study pages for Featured Projects (MDX content)
   * For non-featured repos:

     * Option A: link to GitHub only (default)
     * Option B: auto lightweight page using repo metadata + README snippet (optional)

4. `/experience`

   * Internships + teaching assistant

5. `/resume`

   * Inline embed + “Download PDF”

6. `/contact`

   * Contact form + social links

**Future**
7. `/blog` + `/blog/[slug]` (MDX → CMS later)
8. `/admin` (authenticated dashboard)

---

## 3) Content to include

### Experience (exact entries)

* AI Engineer Intern (May 2025 – Jul 2025): LiveKit WebRTC orchestration, WebSockets, STT/TTS, automated LLM evaluation, Docker + Kubernetes
* Python Intern Developer / ML Intern (Jan 2024 – Jun 2024): multilingual doc pipeline → embeddings → Postgres vector storage over 50k+ chunks
* Software Engineer Intern (May 2023 – Jul 2023): dashboards + metadata consolidation; reduced duplicates by 25%
* Teaching Assistant (Aug 2023 – Jan 2024)

### Education

* MCS (Aug 2024 – Present), GPA 4.0
* DA-IICT — BTech ICT (Aug 2020 – May 2024)

### Featured Projects (initial set)

* WolfJobs (forked): MERN recruiting + ATS parsing + match scoring (40% screening time reduction demo)
* Enhancing CAPTCHA Accessibility… (CNN)
* Food Manufacturing Inventory Management System (DBMS)
* Parallel BFS (benchmarking)
* Plant Disease Classification / Detection (CNN/ResNet + baselines)
* Indian Wildlife Database (extra/private if not on GitHub)

---

## 4) “All Projects including extras” requirement

### A) GitHub repos (auto)

Use **GitHub** REST:

* `GET /users/{username}/repos`

Rules:

* **Server-side fetching only** (no token in client).
* Cache results: `fetch(..., { next: { revalidate: 3600 } })`
* Optional `GITHUB_TOKEN` to avoid rate limits:

  * unauth: 60 req/hour
  * auth: 5000 req/hour

Repo card fields:

* name, description, language, stars, forks, updated_at
* fork? archived?
* link to GitHub repo
* badges: Fork / Archived / Featured

Filters:

* Search name/description
* Filter by language
* Toggle include forks (default ON if you want “everything”)
* Sort: updated / stars / name

### B) “Extra” projects not on GitHub (manual)

* `content/extras/projects.json`
  Fields:
* title, shortDescription, stack[], highlights[], links[], images[], visibility (public/private), date

Display under **“Extra / Non-GitHub Projects”** on `/projects`.

---

## 5) Architecture / Data model

### Core types

**Project**

* `id`, `slug`, `title`, `summary`
* `type`: `github` | `extra`
* `featured`: boolean
* `stack`: string[]
* `highlights`: string[]
* `metrics`: { label, value }[]
* `links`: { label, url }[]
* `images`: { src, alt }[]
* `source` (github only): `repoUrl`, `stars`, `forks`, `language`, `updatedAt`, `isFork`, `isArchived`

**Experience**

* `company`, `role`, `location`
* `startDate`, `endDate`
* `bullets[]`, `tech[]`, `metrics[]`

---

## 6) Next.js implementation blueprint (App Router)

### Folder structure

* `app/`

  * `layout.tsx` (global layout + metadata)
  * `page.tsx` (home)
  * `projects/page.tsx`
  * `projects/[slug]/page.tsx` (featured case studies)
  * `experience/page.tsx`
  * `resume/page.tsx`
  * `contact/page.tsx`
  * `api/`

    * `contact/route.ts` (POST)
    * `github/repos/route.ts` (GET; server proxy + caching)

* `components/`

  * `Navbar`, `Footer`
  * `ProjectCard`, `ProjectGrid`
  * `SearchBar`, `FilterChips`, `SortMenu`
  * `Badge`, `Button`, `Section`, `Container`
  * **Motion components (new)**:

    * `MotionProvider` (global reduced-motion handling)
    * `PageTransition` (subtle route transition wrapper)
    * `Reveal` / `Stagger` (scroll + stagger animations)
    * `AnimatedLink` (underline slide / hover)
    * `HoverCard` (lift + border glow)

* `lib/`

  * `github.ts`
  * `projects.ts` (merge github repos + extras + featured)
  * `validators.ts` (zod)

* `content/`

  * `projects/` (MDX case studies)
  * `extras/projects.json`
  * `resume/Rahil_Resume.pdf`

* `public/`

  * images, og, favicon

### Styling

* Tailwind:

  * typography plugin (MDX)
  * dark mode
  * consistent spacing + type scale
* Add tasteful UI details:

  * subtle gradient background
  * border + shadow layers for depth
  * consistent hover/focus states

---

## 7) API routes

### `/api/github/repos` (GET)

Purpose:

* Fetch repos from GitHub, normalize, return clean JSON.
* Add caching + optional token.

Query params:

* `includeForks=true|false`
* `sort=updated|stars|name`

### `/api/contact` (POST)

Purpose:

* Validate input
* Send email (provider optional) or store in DB later
* Show success/failure UI feedback (toast + button loading state)

---

## 8) Blog/CMS plan (future-friendly)

Phase 1:

* MDX blog posts under `content/blog/`
* `/blog` + `/blog/[slug]`, tags + search

Phase 2:

* CMS (Sanity/Contentful) OR DB-backed posts + admin editor

---

## 9) Auth + Admin Dashboard (future)

* Auth library (NextAuth/Auth.js) with GitHub provider
* Restrict admin access by email/username
* Admin features:

  * Toggle featured projects
  * Edit extra projects
  * Edit hero + impact bullets
  * Upload screenshots
  * Manage blog posts
* Storage:

  * Postgres + Prisma (Vercel Postgres / Supabase)

---

## 10) Deployment on Vercel

* Connect GitHub repo to Vercel
* Env vars:

  * `GITHUB_TOKEN` (optional)
  * `CONTACT_EMAIL_TO`
  * `CONTACT_EMAIL_FROM`
  * `AUTH_SECRET` (future)

### 10A) Publish on your custom domain (you already bought it)

1. Deploy the site on Vercel (production deployment should be working on `*.vercel.app`).
2. In Vercel Project → **Settings → Domains**, **Add Domain** (your apex like `example.com`) and also add `www.example.com` (recommended). ([Vercel][1])
3. Pick your **Primary** domain (commonly `www`). Vercel can guide redirects between apex ↔ [www](http://www). ([Vercel][1])
4. In your domain registrar DNS settings, add the exact DNS records Vercel shows you:

   * Apex domains use an **A record** method (or the Nameservers method).
   * Subdomains use a **CNAME record** method.
     Vercel’s dashboard will show the correct values to copy. ([Vercel][1])
5. Wait for DNS + certificate provisioning. DNS propagation can take time (sometimes up to 24 hours). ([Vercel][2])
6. Verify:

   * `https://yourdomain.com` loads
   * HTTPS is valid (lock icon)
   * Canonical redirect behavior is correct (www ↔ apex; http → https)

**Important:** keep preview deployments on `*.vercel.app` (don’t attach the custom domain to preview unless you intentionally want that behavior).

---

## 11) SEO + polish checklist (ship-ready)

* Metadata per page (title/description)
* OG + Twitter card image
* Sitemap + robots.txt
* Lighthouse: performance + accessibility
* Images via `next/image`
* Motion QA:

  * Animations are subtle, consistent, and not distracting
  * `prefers-reduced-motion` disables or minimizes animations
  * No jank on scroll; no huge reflow/CLS

---

## 12) Milestones / Task list (Copilot-friendly)

### Milestone A — MVP

* [ ] Initialize Next.js + TS + Tailwind
* [ ] Layout + navbar + footer + responsive design
* [ ] Home page with hero + impact bullets
* [ ] Experience page
* [ ] Projects skeleton (featured + all projects section)
* [ ] Resume page (embed + download)

### Milestone B — GitHub auto-project listing

* [ ] Implement `lib/github.ts` (REST fetch)
* [ ] `/api/github/repos` with caching + token
* [ ] ProjectGrid search/filter/sort + include forks toggle
* [ ] Clear fork badges (e.g., WolfJobs)

### Milestone C — Featured project case studies

* [ ] MDX template for case studies
* [ ] Add 4–6 featured pages
* [ ] Add screenshots/GIFs in `/public`

### Milestone D — Contact

* [ ] Contact form + `/api/contact`
* [ ] Toast feedback + loading states

### Milestone E — Motion + “Premium” polish (NEW)

* [ ] Install Framer Motion; add `MotionProvider`
* [ ] Page transitions (subtle fade/slide)
* [ ] Scroll reveal + stagger utilities (`Reveal`, `Stagger`)
* [ ] Card hover interactions (lift, border glow, shadow)
* [ ] Navbar blur-on-scroll + smooth transitions
* [ ] Ensure reduced-motion support + accessibility
* [ ] Final pass on spacing, typography, visual consistency

### Milestone F — Custom domain launch (NEW)

* [ ] Add custom domain in Vercel project settings
* [ ] Configure DNS at registrar using Vercel’s recommended records
* [ ] Verify HTTPS + redirects (www/apex + http/https)
* [ ] Update OG image + favicon
* [ ] Submit sitemap in Google Search Console (optional but nice)

---

## 13) Acceptance criteria (must pass)

* Home clearly shows the “Applied AI / Full-Stack” positioning + metrics.
* `/projects` lists **all GitHub repos** for `Rahil312` via API, with search/filter/sort.
* Extra non-GitHub projects appear in a separate section.
* Animations feel smooth + professional:

  * Subtle page transitions
  * Good hover microinteractions
  * Scroll reveals
  * Honors reduced motion
* Site deploys on Vercel **and** works on your custom domain with HTTPS + correct redirects. ([Vercel][1])
* No secrets exposed to the browser; GitHub token stays server-side.

---

