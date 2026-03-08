# Gymbeat Landing Page Design System & Plan

## 1. Product & Theme
* **Type**: Multi Fitness Studio Landing Page
* **Colors**: Background `#151515` (Dark), Accent `#FBC800` (Yellow), Text `#FFFFFF` (White).
* **Typography**: Barlow Condensed or a system sans-serif font applied cleanly.
* **UX/UI Principles**: High contrast, bold action-oriented copywriting, mobile-first simplified animations (fading down parallax on mobile), robust hover states.

## 2. Copywriting (Founder Principles)
* **Hero Hook**: "Build Muscle. Lose Weight. Avoid Diseases."
* **Supporting**: "Join the ultimate multi-fitness studio designed to transform your body and secure your health."
* **CTAs**: Action-driven, not polite (e.g., "See Pricing", "Start Training", "Build Health").

## 3. Implementation Steps
1. Install `lucide-react` for simple SVG icons.
2. Edit `src/app/page.tsx` with:
   - Floating Navbar
   - Hero Section (Outcome-based hooks)
   - Goals/Features Section (Grid layout for Muscle, Weight, Health, Diseases)
   - Pricing Section (Pricing cards routing to Contact)
   - Contact Section (Where the CTAs point)
3. Ensure no layout shifting on hover, correct touch target sizes, mobile-responsive layout (`max-w-7xl` container).