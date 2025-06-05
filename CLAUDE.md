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

## Current Migration Status

### Completed
- ✅ Basic Astro + React setup with TypeScript
- ✅ TailwindCSS v4 + Flowbite integration
- ✅ Project structure scaffolding
- ✅ CSS styles migrated to `src/styles/global.css`

### In Progress / TODO
- 🔄 Migrate HTML pages from `_tempt_my_site_files/` to Astro pages
- 🔄 Convert timeline sections to Astro components/pages
- 🔄 Set up proper routing for multi-page structure
- 🔄 Integrate React components where needed
- 🔄 Migrate custom fonts and assets

## Architecture

### Current Astro Structure
- `src/pages/index.astro` - Main entry point (currently minimal)
- `src/styles/BaseLayout.astro` - Layout component
- `src/styles/global.css` - Migrated CSS from original site
- `src/styles/tailwind.css` - TailwindCSS imports

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
- Potentially extract reusable components (timeline cards, navigation, etc.)
- Maintain SEO-friendly structure with proper routing
- Consider where React components add value vs. static Astro components

### Original Features to Preserve
- Interactive timeline navigation
- Responsive design (mobile-first)
- Custom font styling and effects
- Image galleries with Flowbite
- Social media links in footer
- Themed backgrounds per section