# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website showcasing the history of Real Time Strategy (RTS) video games through an interactive timeline. The project serves as a "brief and biased introduction to the Real Time Strategy video games from perspective of someone who grew up with the genre."

## Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot reload (accessible from network)
npm run dev

# Watch TailwindCSS changes (run in parallel during development)
npm run watch

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Multi-Page Structure
The project uses Vite's multi-page setup with each timeline section as a separate HTML page:
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
- **Build Tool**: Vite 6.x with multi-page configuration
- **Styling**: TailwindCSS v4 with PostCSS
- **UI Components**: Flowbite for galleries and interactive elements
- **Fonts**: Google Fonts + custom fonts (Arrakis.ttf, starcraft.ttf) in `/public/fonts/`
- **Assets**: Images stored in `/public/` directory

### CSS Architecture
- Main styles in `src/index.css` with extensive Google Fonts imports
- Custom CSS variables for consistent theming (gold, shadows, etc.)
- Responsive design with mobile-first approach
- Custom font faces for themed sections (StarCraft font, Arrakis font)
- Page-specific body IDs for targeted styling:
  - `#timeline-body` - Main timeline
  - `#rts-origins-body` - Origins page
  - `#rts-about-body` - What is RTS page
  - `#warcraft3-body`, `#cnc-body`, `#sc-body`, etc. - Game-specific pages

### Build Configuration
- Vite config defines all HTML entry points in `rollupOptions.input`
- PostCSS processes TailwindCSS and Flowbite
- Assets are served from `/public/` directory

## Content Structure

### Timeline Layout Pattern
Each timeline section follows a consistent 3-column flexbox layout:
1. Left column: Content card with hover/focus effects
2. Center column: Vertical timeline with circular navigation buttons
3. Right column: Alternating empty space for visual balance

### Navigation
- Fixed back button on individual pages (positioned left side)
- Circular timeline navigation buttons with hover effects
- Footer with social links (GitHub, LinkedIn)

## Development Notes

### Custom Fonts
- StarCraft font used for main timeline title with complex text effects
- Arrakis font for Dune-themed sections
- Extensive Google Fonts collection imported but selectively used

### Responsive Design
- Mobile-first approach with `md:` breakpoints
- Touch-friendly button sizes (minimum 44px targets)
- Adaptive layouts that stack on mobile, flow horizontally on desktop

### Asset Management
- Images optimized as .webp format
- Assets referenced from `/public/` directory
- Background images set via CSS for each themed section

## Future Refactoring Plans
The README indicates this project will be refactored from HTML/CSS/TailwindCSS to an Astro & React application with additional features and content.