# Kurry Twist 🍛

A modern, mobile-first recipe website built with Astro, TypeScript, and Tailwind CSS. Features authentic Indian recipes with beautiful design, SEO optimization, and automated GitHub Pages deployment.

## ✨ Features

- 🎨 **Modern UI**: Clean, mobile-first design inspired by premium food blogs
- ⚡ **Lightning Fast**: Static site generation with Astro for optimal performance
- 📱 **Fully Responsive**: Beautiful layouts from mobile (375px) to desktop (1920px+)
- 🎯 **SEO Optimized**: Meta tags, Open Graph, JSON-LD schema, sitemap
- 📝 **Markdown Content**: Easy-to-manage recipes in Markdown format
- 🎬 **Video Integration**: YouTube embeds with responsive design
- 🚀 **Auto-Deploy**: GitHub Actions workflow for seamless deployment
- ♿ **Accessible**: Lighthouse 95+ score target across all metrics
- 🤖 **AI-Friendly**: Small, reusable components designed for AI-assisted development

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build) (latest stable)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4 (utility-first, JIT mode)
- **Language**: TypeScript (strict mode)
- **Content**: Astro Content Collections with Zod validation
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager
- Git

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site in action!

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 📁 Project Structure

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── favicon.ico             # Site favicon
│   ├── robots.txt              # SEO robots file
│   └── images/
│       ├── logo.png            # Site logo
│       └── sample-recipe.jpg   # Sample recipe image
├── src/
│   ├── components/             # Reusable Astro components
│   │   ├── Header.astro        # Responsive navigation
│   │   ├── Footer.astro        # Site footer
│   │   ├── Hero.astro          # Hero banner
│   │   ├── RecipeCard.astro    # Recipe preview card
│   │   ├── YoutubeEmbed.astro  # Responsive YouTube player
│   │   └── SEO.astro           # SEO meta tags
│   ├── content/
│   │   ├── config.ts           # Content collections schema
│   │   └── recipes/            # Recipe markdown files
│   │       └── paneer-butter-masala.md
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Base HTML structure
│   │   └── RecipeLayout.astro  # Recipe page template
│   ├── pages/
│   │   ├── index.astro         # Home page
│   │   ├── about.astro         # About page
│   │   └── recipes/
│   │       ├── index.astro     # Recipe listing
│   │       └── [slug].astro    # Dynamic recipe pages
│   ├── styles/
│   │   └── global.css          # Global styles + Tailwind directives
│   └── utils/
│       └── seo.ts              # SEO helper functions
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Project dependencies
```

## 📝 Adding New Recipes

1. Create a new Markdown file in `src/content/recipes/`:

```markdown
---
title: "Your Recipe Name"
description: "A short description of your recipe"
category: "Main Course"
tags: ["Indian", "Vegetarian"]
prepTime: "20 mins"
cookTime: "30 mins"
servings: 4
difficulty: "Medium"
image: "/images/your-recipe.jpg"
youtube: "VIDEO_ID"
featured: false
date: 2024-01-15
---

## Ingredients

- Ingredient 1
- Ingredient 2

## Instructions

1. Step 1
2. Step 2

## Tips

Your helpful tips here
```

2. Add the recipe image to `public/images/`
3. The page will be automatically generated at `/recipes/your-recipe-name`

## 🚀 Deploying to GitHub Pages

### Setup (One-time)

1. **Update Configuration**: Edit `astro.config.mjs`:
   ```javascript
   export default defineConfig({
     site: 'https://YOUR-USERNAME.github.io',
     // If using a custom domain or deploying to a subpath:
     // base: '/your-repo-name',
   });
   ```

2. **Update robots.txt**: Replace `USERNAME` in `public/robots.txt` with your GitHub username

3. **Enable GitHub Pages**:
   - Go to your repository **Settings** → **Pages**
   - Under "Build and deployment", select **GitHub Actions** as the source
   - Save

### Deploy

Simply push to the `main` branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

GitHub Actions will automatically build and deploy your site! 🎉

## 🎨 Customization

### Colors

Edit `tailwind.config.mjs` to customize the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      secondary: { /* your colors */ },
    }
  }
}
```

### Fonts

Update fonts in `src/layouts/BaseLayout.astro`:

```astro
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Site Name

Search and replace "Kurry Twist" throughout the project with your site name.

## 🧪 Testing

Before deploying, test your build locally:

```bash
npm run build
npm run preview
```

Check responsive design at different breakpoints:
- Mobile: 375px
- Tablet: 768px
- Desktop: 1920px

## 📊 Performance

Target Lighthouse scores (95+):
- ✅ Performance
- ✅ Accessibility
- ✅ Best Practices
- ✅ SEO

## 🤝 Contributing

Contributions are welcome! This project is designed to be AI-friendly and easy to maintain:

- Small, focused components (<200 lines)
- Clear naming conventions
- Self-documenting code
- Minimal coupling

## 📄 License

MIT License - feel free to use this project for your own recipe website!

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Deployed on [GitHub Pages](https://pages.github.com)

---

**Made with ❤️ for curry lovers everywhere**
