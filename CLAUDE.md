# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website showcasing the history of Real Time Strategy (RTS) video games through an interactive timeline. The project serves as a "brief and biased introduction to the Real Time Strategy video games from perspective of someone who grew up with the genre."

**IMPORTANT**: This branch (`refactor`) is a work-in-progress migration from HTML/CSS/TailwindCSS to Astro + React. The original site files are preserved in `_tempt_my_site_files/` while the new Astro structure is being built.

## Development Commands

```bash
# Install dependencies
npm install

# Start Astro development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run Astro CLI commands
npm run astro ...
```

## Current Migration Status - DEBUGGING PHASE

### Completed
- ✅ Basic Astro + React setup with TypeScript
- ✅ TailwindCSS v4 + Flowbite integration
- ✅ Project structure scaffolding
- ✅ CSS styles migrated to `src/styles/global.css`
- ✅ Main timeline page migrated to `src/pages/index.astro`
- ✅ All assets migrated from `_tempt_my_site_files/public/` to main `public/` directory
- ✅ Simplified component architecture (CardContent.astro, ButtonContent.astro)
- ✅ Downgraded Tailwind from v4.1.7 to v4.0.0 to match working main branch
- ✅ Updated PostCSS config to match main branch exactly
- ✅ Removed debugging CSS overrides from global.css

### RESOLVED - Tailwind CSS v4 + Astro Integration
**Problem**: Tailwind CSS classes were not being processed, causing broken layout with unstyled elements.

**Root Cause**: Using incorrect PostCSS approach instead of official Tailwind v4 + Astro Vite plugin setup.

**CORRECT Solution (Official Tailwind v4 + Astro Setup)**: 
1. Install: `npm install @tailwindcss/vite`
2. Configure Vite plugin in `astro.config.mjs`:
   ```js
   import tailwindcss from '@tailwindcss/vite';
   export default defineConfig({
     integrations: [react()],
     vite: { plugins: [tailwindcss()] }
   });
   ```
3. Use `@import "tailwindcss";` in CSS file (not `@tailwind` directives)

**LESSON LEARNED**: Always check official documentation first rather than attempting band-aid fixes. Astro 5.2+ officially supports Tailwind v4 via Vite plugin, not PostCSS.

### MIGRATION COMPLETED ✅

**Status**: The Astro migration is now complete and fully functional!

**What Was Accomplished**:
- ✅ Complete main timeline page with all sections (Command & Conquer, Age of Empires, StarCraft games, eSports, Legacy)
- ✅ All 9 individual pages created (rts-origins, what-is-rts, warcraft, command-and-conquer, age-of-empires, starcraft, starcraft2, e-sports, legacy)
- ✅ Working Tailwind CSS v4 with proper Vite plugin setup
- ✅ Full navigation between all pages
- ✅ All original content, styling, and functionality preserved
- ✅ Responsive design maintained
- ✅ Clean Astro architecture with BaseLayout component pattern

**Final Configuration**:
- Astro 5.x + React integration
- Tailwind CSS v4 via @tailwindcss/vite plugin  
- BaseLayout component for consistent structure
- CardContent/ButtonContent components for timeline elements
- File-based routing for clean URLs

**Deployment Notes**:
- GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys on EVERY push to ANY branch
- Main branch contains working Vite version (production backup)
- Refactor branch contains completed Astro migration
- To deploy refactor: merge to main or update workflow to deploy from refactor branch

## Architecture

### Current Astro Structure
- `src/pages/index.astro` - Main timeline page with simplified component approach
- `src/layouts/BaseLayout.astro` - Layout component handling HTML structure, CSS imports, credits, and footer
- `src/components/CardContent.astro` - Simple timeline card content component (href, title, description, floatDirection props)
- `src/components/ButtonContent.astro` - Simple timeline button component (href, imageSrc, imageAlt, title, showStartDot props)
- `src/styles/global.css` - Migrated CSS from original site (debugging CSS removed)
- `src/styles/tailwind.css` - TailwindCSS imports

**Component Architecture Note**: Original complex TimelineCard/TimelineButton components were replaced with simpler CardContent/ButtonContent components that preserve the original HTML structure instead of creating nested divs that interfered with flexbox layout.

### Original Site Structure (in `_tempt_my_site_files/`)
The original multi-page HTML structure includes:
- `index.html` - Main timeline page
- `rts-origins/index.html` - Origins of RTS
- `what-is-rts/index.html` - Definition and characteristics
- `warcraft/index.html` - Warcraft franchise section
- `command-and-conquer/index.html` - C&C franchise section
- `age-of-empires/index.html` - AoE franchise section
- `starcraft/index.html` - StarCraft: Broodwar section
- `starcraft2/index.html` - StarCraft II section
- `e-sports/index.html` - Esports history section
- `legacy/index.html` - Modern legacy of RTS

### Technology Stack
- **Framework**: Astro 5.x with React integration
- **Styling**: TailwindCSS v4 with PostCSS
- **UI Components**: Flowbite for galleries and interactive elements
- **Language**: TypeScript
- **Fonts**: Google Fonts + custom fonts (Arrakis.ttf, starcraft.ttf) in `/public/fonts/`
- **Assets**: Images stored in `/public/` directory

## Migration Reference

### CSS Architecture (Already Migrated)
- Extensive Google Fonts imports in `global.css`
- Custom CSS variables for consistent theming (--gold, --light-shadow, etc.)
- Page-specific body IDs for targeted styling:
  - `#timeline-body`, `#rts-origins-body`, `#rts-about-body`, etc.
- Custom font faces (StarCraft, Arrakis)
- Responsive design with mobile-first approach

### Timeline Layout Pattern (To Be Migrated)
Each timeline section follows a consistent 3-column flexbox layout:
1. Left column: Content card with hover/focus effects
2. Center column: Vertical timeline with circular navigation buttons  
3. Right column: Alternating empty space for visual balance

### Assets and Fonts
- Custom fonts: `/public/fonts/starcraft.ttf`, `/public/fonts/Arrakis.ttf`
- Images: Extensive collection in `/public/` (webp format)
- Background images referenced in CSS for themed sections

## Development Notes for Migration

### Key Considerations
- Preserve existing design and functionality during migration
- Convert HTML pages to Astro pages with proper frontmatter
- ✅ **COMPLETED**: Simplified component architecture to avoid layout conflicts
- Maintain SEO-friendly structure with proper routing
- Consider where React components add value vs. static Astro components

### Component Architecture (Current Simplified Approach)

**BaseLayout.astro**
- Wraps pages with common HTML structure, CSS imports, credits, and footer
- Takes `title`, `bodyId`, and `bodyClass` props
- Uses `<slot />` for page-specific content

**CardContent.astro** (Simple content-only component)
- Props: `href`, `title`, `description`, `floatDirection`
- No layout structure - just renders timeline card content
- Preserves original hover/focus effects

**ButtonContent.astro** (Simple button-only component)
- Props: `href`, `imageSrc`, `imageAlt`, `title`, `showStartDot`
- Contains gold timeline line and circular navigation buttons
- No wrapper structure to avoid layout conflicts

### Package Configuration (Critical for Fresh Session)
- `package.json`: Tailwind downgraded to v4.0.0, includes `@tailwindcss/postcss@4.0.0`
- `postcss.config.cjs`: Uses `@tailwindcss/postcss` and `flowbite/plugin`
- `astro.config.mjs`: Only includes React integration (no Vite Tailwind plugin)

### Original Features to Preserve
- Interactive timeline navigation
- Responsive design (mobile-first)
- Custom font styling and effects
- Image galleries with Flowbite
- Social media links in footer
- Themed backgrounds per section