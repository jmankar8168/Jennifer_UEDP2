# Jenni Portfolio Recreation (Interactive Figma Canvas)

A pixel-accurate interactive personal portfolio website for **Jenni**, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS inspired by the Figma canvas workspace metaphor.

---

## 🎨 Design Philosophy & Metaphor

The desktop experience is an authentic **interactive Figma Canvas workspace**:
1. **Figma Canvas Architecture**:
   - Top floating toolbar with Figma brand logo, tool switcher (`Move (V)` & `Hand (H)`), scale percentage dropdown (Zoom In, Zoom Out, 100%, Zoom to Fit), Share link, and Present button.
   - Left floating sidebar with real-time searchable Pages (`About`, `Work`, `Builds`, `Playground`) and child layers that smoothly pan and center the canvas to each section.
   - Right floating inspector with user profile avatar, dark/light theme switcher, canvas background color swatches (`#f5f5f5`, `#ffffff`, `#1e1e1e`, `#e6f4ff`), live selection dimensions (`W`, `H`), and one-click email copy with toast feedback.
   - Central infinite dot grid canvas with support for trackpad panning, wheel zoom (`Ctrl` + scroll), and draggable polaroids & stickers.

2. **Swipe-Away Hero Intro**:
   - Initial poster intro featuring Jenni's avatar, title, and interactive "Enter Figma Workspace" button.
   - Smoothly slides away on upwards swipe, mouse wheel scroll down, or click.

3. **Selected Work & Builds**:
   - 5 featured case studies: **Bento.fun**, **Inner Circle**, **Velar**, **First Dollar (Emerge)**, and **Crowwd**.
   - Clicking a work card opens the full case study modal drawer with problem statement, approach, screenshot gallery, and external live site links.
   - 5 tool builds: **Farfield**, **Dither Matrix**, **Pixel Pop Tool**, **Freetype Writer**, and **MYOB**.

4. **Mobile Responsive View (< 768px)**:
   - Tailored mobile layout with segmented tabs (`About`, `Work`, `Builds`, `Playground`), card feeds, and bottom sticky social tray.

---

## 🛠️ Tech Stack & Verified Design Tokens

- **Framework**: Next.js 16 (App Router) + React 19
- **Styling**: Tailwind CSS + Custom CSS Variables in `globals.css`
- **Typography**:
  - Primary font: `Figtree` (weights 300, 400, 500, 600, 700)
  - Accent/handwritten font: `Caveat`
- **Color Tokens**:
  - Figma Accent Blue: `#0D99FF`
  - Text Primary: `#1E1E1E` (light) / `#FFFFFF` (dark)
  - Text Secondary: `#666666` (light) / `#A3A3A3` (dark)
  - Canvas Default: `#F5F5F5` (light) / `#1E1E1E` (dark)
  - Tag Badges:
    - Product: `#FF5100` on `rgba(255, 81, 0, 0.08)`
    - Brand: `#8253FF` on `rgba(130, 83, 255, 0.08)`
    - Code / Tool: `#00B25D` on `rgba(0, 178, 93, 0.08)`
    - Web3 / Infra: `#0D99FF` on `rgba(13, 153, 255, 0.08)`

---

## 📁 Project Structure

```
piyush-portfolio/
├── public/                     # 28 authentic downloaded webp assets & icons
│   ├── about/                  # Polaroids, stickers, vinyl, pantone
│   ├── builds/                 # Farfield, Dither Matrix, Pixel Pop, etc.
│   ├── work/                   # Bento, Inner Circle, Velar, Emerge, Crowwd
│   ├── favicon.webp
│   ├── pj-avatar.webp
│   └── og-image.webp
├── src/
│   ├── app/
│   │   ├── globals.css         # Figma styling tokens, dot grid, theme vars
│   │   ├── layout.tsx          # Figtree & Caveat font configuration, SEO tags
│   │   └── page.tsx            # Main assembly (Canvas + Toolbars + Modals)
│   ├── components/
│   │   ├── HeroIntroSwipe.tsx   # Swipe-away hero overlay intro
│   │   ├── FigmaCanvas.tsx     # Infinite canvas with pan, zoom, and frame mount
│   │   ├── FigmaTopBar.tsx     # Figma header with tools and zoom dropdown
│   │   ├── FigmaLeftSidebar.tsx# Pages, search, and layer hierarchy
│   │   ├── FigmaRightSidebar.tsx# Profile, theme toggle, bg swatches, social
│   │   ├── AboutFrame.tsx      # Draggable stickers, polaroids, and bio card
│   │   ├── WorkFrame.tsx       # 5 case study cards with Figma tags
│   │   ├── BuildsFrame.tsx     # 5 tool app cards with external links
│   │   ├── PlaygroundFrame.tsx # Design experiment specimens
│   │   ├── CaseStudyModal.tsx  # Detailed case study drawer
│   │   └── MobileView.tsx      # Native mobile tabbed experience
│   └── data/
│       └── portfolioData.ts    # Extracted data, coordinates, copy, and links
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or higher
- npm / pnpm / yarn

### Installation
```bash
cd piyush-portfolio
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## 📝 Notes & Fidelity Details

- All project assets (logos, cards, polaroids, stickers, badges) were extracted and fetched directly from `https://www.piyushjain.in/` into `/public`.
- The Playground frame is set up with design specimen slots ready for any additional WebGL shader canvas integrations.
