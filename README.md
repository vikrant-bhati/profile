# Vikrant Bhati — Portfolio

Personal portfolio covering AI reliability research, software engineering, projects, articles, and demos.

## Local development

Use Node.js 24 (`nvm use`), matching the GitHub Pages workflow.

```sh
npm ci
npm run dev
```

Vite serves the site at `/profile/`, matching its GitHub Pages project path.

## Verify the production build

```sh
npm run lint
npm run build
npm run preview
```

Open the preview URL with `/profile/` appended. Keep `base: "/profile/"` in `vite.config.js` so assets resolve correctly on GitHub Pages.

## Update content

- `src/PortfolioLayout.jsx`: page copy, project cards, articles, and contact links.
- `src/portfolio-data.js`: project details, report links, and experience descriptions.
- `src/portfolio-interactions.js`: keyboard navigation, dialogs, filters, theme, and agent stages; initialized and cleaned up by the React effect in `src/App.jsx`.
- `src/styles.css`: responsive layout, themes, and animation.
- `public/assets/`: images referenced with Vite’s configured base path.
- `public/cs5624-final-project.pdf`: existing published report; retain this path for incoming links.

Résumé links point to `https://vikrant-bhati.github.io/Resume/`. Contact links use `bhati.vikrant@outlook.com`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`: install dependencies, lint, build, and deploy `dist/` to GitHub Pages. The published site is `https://vikrant-bhati.github.io/profile/`.
