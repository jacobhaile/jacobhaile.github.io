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
- **Dark mode support** with system preference detection
- **Split-screen layout** on desktop with sidebar navigation
- **Static site generation** optimized for GitHub Pages
- **Accessible UI** with semantic HTML
- **Performance optimized** with Next.js SSG
- **Company logos** in experience section

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
│   ├── Header.tsx       # Sidebar with navigation and social icons
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Work experience with company logos
│   ├── Education.tsx    # Education section
│   ├── NotableWork.tsx  # Projects showcase
│   ├── Icons.tsx        # Social media icon components
│   └── ThemeProvider.tsx # Dark mode context
├── .github/workflows/   # GitHub Actions
└── public/              # Static assets
```

## 🎨 Design

The design follows a clean, professional aesthetic:

- **Colors:**
  - Light mode: Off-white background (#FAFAF9), Dark navy text (#111c45)
  - Dark mode: Dark navy background, Off-white text
  - Accent: Orange (#D97706)
- **Typography:** Inter font family
- **Layout:** Split-screen on desktop (sidebar + content), single column on mobile
- **Headers:** Lowercase with underline
- **Contact:** GitHub, LinkedIn, and Email icons in sidebar

## 📝 License

© 2025 Jacob Haile. All rights reserved.

