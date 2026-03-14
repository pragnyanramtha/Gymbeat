# GYMBEAT — Multi Fitness Studio

> **Build Muscle. Lose Weight. Avoid Diseases.**

GYMBEAT is a high-performance landing page for a multi-fitness studio based in Hyderabad, India. Built with a bold, dark aesthetic and smooth animations, it showcases the studio's programs, membership pricing, branch locations, and a callback request form — all in a single, fast-loading page.

---

## ✨ Features

- **Animated Floating Navbar** — fixed top navigation with smooth entrance animation and active hover underlines
- **Hero Section** — full-screen parallax background with outcome-driven headlines and gym timings
- **Action Banner** — scrolling marquee strip with motivational copy
- **Training Pillars** — four-column grid highlighting Burn Fat, Build Muscle, Longevity, and Bulletproof conditioning
- **Pricing Section** — four membership tiers (1 month → 1 year) with clear per-month pricing in INR
- **Studio Locations** — three branch cards (Manikonda, Kukatpally, Pragathi Nagar) with full addresses
- **Contact / Callback Form** — name + phone request form alongside direct contact details
- **Mobile-Responsive** — `max-w-7xl` container, mobile-first layout, touch-friendly target sizes

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animations | [Framer Motion 12](https://www.framer.com/motion/) (`LazyMotion` + `domAnimation`) |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | Syncopate (headings) & Space Mono (body) via `next/font/google` |
| Package Manager | [pnpm](https://pnpm.io) |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#0a0a0a` (near-black) |
| Primary Accent | `#FF5500` (orange) |
| Secondary Accent | `#00E5FF` (cyan) |
| Text | `#FFFFFF` / `neutral-400` |
| Heading font | Syncopate (variable `--font-syncopate`) |
| Body font | Space Mono (variable `--font-space-mono`) |

---

## 💰 Membership Pricing

| Plan | Price | Billed As |
|---|---|---|
| 1 Month | ₹3,500 / month | Monthly |
| 3 Months | ₹2,000 / month | ₹6,000 total |
| 6 Months | ₹1,500 / month | ₹9,000 total |
| 1 Year ⭐ | ₹1,000 / month | ₹12,000 total |

All plans include full gym access, strength equipment, cardio zone, and locker room.

---

## 📍 Studio Locations

- **Manikonda** — 2nd Floor, Opp Pure O Natural, Road No 8, Alkapur Colony, Puppalaguda, Hyderabad – 500089
- **Kukatpally** — Plot No. 59, L9, 1st Floor, Opp HDFC Bank, 9th Phase Housing Board Colony, Hyderabad – 500072
- **Pragathi Nagar** — 2nd Floor, Mithila Square, 202, Mithila Nagar, Hyderabad – 500050

📞 **+91 91330 26279**

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 18
- [pnpm](https://pnpm.io) ≥ 9 (`npm install -g pnpm`)

### Install & Run

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

---

## 📁 Project Structure

```
gymbeat/
├── public/
│   └── image.png          # GYMBEAT logo
├── src/
│   └── app/
│       ├── layout.tsx     # Root layout, fonts, metadata
│       ├── page.tsx       # Single-page landing (all sections)
│       └── globals.css    # Tailwind base styles
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config (via postcss)
└── package.json
```

---

## 🌐 Deployment

The easiest way to deploy is via [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments on every push.

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for other hosting options.
