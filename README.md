# Jaivardhan Singh - Personal Developer Portfolio

Welcome to the source code of my personal developer portfolio! This project is a modern, single-page React application built to showcase my skills, projects, and professional background.

## Features
- **Modern UI**: Dark theme, glassmorphism, glowing gradients, and fluid typography.
- **Responsive**: Fully optimized for mobile, tablet, and desktop viewing.
- **Framework**: Built with **React** and **Vite** for rapid tooling and high performance.
- **Animations**: Driven by **Framer Motion** for smooth scroll reveals and micro-interactions.
- **Routing**: Utilizes `react-scroll` for seamless, single-page navigation.

## Local Development

If you'd like to run a local instance of this portfolio:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jaivardhan2409/jaivardhan2409.github.io.git
   cd jaivardhan2409.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```

## Deployment

This portfolio is configured to automatically deploy to GitHub Pages anytime a merge happens on the `main` or `portfolio-v1` branch via **GitHub Actions**.

- **Workflow File:** `.github/workflows/deploy.yml`
- The `public/CNAME` file determines the custom domain when the site is published.

## Customization

The design tokens (colors, fonts, gradients) map to simple CSS variables found in `src/styles/global.css`. You can easily tweak these to overhaul the portfolio's aesthetics.

---
*Powered by Google Fonts, React-Icons, and Vite.*
