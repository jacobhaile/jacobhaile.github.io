# Jacob Haile - Portfolio Site

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing my experience as a Staff Engineer with 10+ years in web development.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Deployment:** GitHub Pages
- **Package Manager:** pnpm

## ✨ Features

- **Mobile-first responsive design**
- **Dark mode support** with system preference detection and localStorage persistence
- **Shrinking sticky header** with smooth scroll behavior
- **Static site generation** optimized for GitHub Pages
- **Accessible UI** with semantic HTML
- **Performance optimized** with Next.js SSG

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the site locally.

## 📦 Deployment

The site is automatically deployed to GitHub Pages on every push to the `main` branch via GitHub Actions.

- **Live URL:** https://jacobhaile.com
- **GitHub Pages URL:** https://jacobhaile.github.io

The deployment workflow:
1. Builds the Next.js static export
2. Adds `.nojekyll` to prevent Jekyll processing
3. Deploys to GitHub Pages

## 📄 Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout with theme provider
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Header.tsx       # Sticky header with theme toggle
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Work experience
│   ├── Education.tsx    # Education section
│   ├── NotableWork.tsx  # Projects showcase
│   ├── Contact.tsx      # Contact information
│   └── ThemeProvider.tsx # Dark mode context
├── .github/workflows/   # GitHub Actions
└── public/              # Static assets
```

## 🎨 Design

The design follows a clean, professional aesthetic inspired by my resume:

- **Colors:**
  - Light mode: Off-white background (#FAFAF9), Navy text (#1E3A5F)
  - Dark mode: Navy background, Off-white text
  - Accent: Dark orange (#D97706)
- **Typography:** Inter font family
- **Layout:** Single-page with smooth scrolling sections
- **Headers:** Lowercase with underline (matching resume style)

## 📝 License

© 2025 Jacob Haile. All rights reserved.

