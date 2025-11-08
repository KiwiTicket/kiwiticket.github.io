# KiwiTicket Farewell Page

A static thank you page for visitors to the KiwiTicket site, built with Astro and deployed to GitHub Pages.

## Overview

This is a simple, lightweight static site that displays a farewell message thanking KiwiTicket's producers and customers over the past 5 years. The page features:

- Modern, responsive design with dark mode support
- KiwiTicket branding and logo
- Heartfelt thank you message
- Contact information for support
- Optimized for GitHub Pages deployment

## Technology Stack

- **Astro** - Static site generator for optimal performance
- **TypeScript** - Type safety and better development experience
- **CSS3** - Modern styling with CSS variables and animations
- **GitHub Actions** - Automated deployment to GitHub Pages

## Development

### Prerequisites

- Node.js 20+
- pnpm

### Getting Started

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start development server:
   ```bash
   pnpm run dev
   ```

3. Build for production:
   ```bash
   pnpm run build
   ```

4. Preview production build:
   ```bash
   pnpm run preview
   ```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch that affect the `apps/farewell-page/` directory.

The deployment workflow:
1. Installs dependencies
2. Builds the static site
3. Deploys to GitHub Pages

## Project Structure

```
apps/farewell-page/
├── public/
│   ├── images/          # Logo and assets
│   └── favicon.png      # Site favicon
├── src/
│   ├── pages/
│   │   └── index.astro  # Main page
│   └── styles/
│       └── global.css   # Site styles
├── astro.config.mjs     # Astro configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Features

- **Responsive Design**: Works on all device sizes
- **Dark Mode Support**: Automatically adapts to user's color scheme preference
- **Accessibility**: Semantic HTML and proper contrast ratios
- **Performance**: Optimized static assets and minimal JavaScript
- **SEO**: Proper meta tags and Open Graph tags

## Contact

For questions or support, contact: help@kiwiticket.co.nz