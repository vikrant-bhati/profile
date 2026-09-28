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

## Google Analytics

The standard GA4 web stream uses Measurement ID `G-4WETK13KMP` in `src/App.jsx`. This ID is public, not an account credential.

- Collection is restricted to `https://vikrant-bhati.github.io/profile/` (also `/profile`). Local development and preview never load Google Analytics or send events.
- The tag loads only after a visitor allows analytics. The choice is saved in browser storage for 180 days and can be changed through **Privacy & analytics** in the footer.
- Advertising personalization and Google signals are disabled. Custom events use fixed content identifiers. Initial page/referrer URLs have query strings and hashes removed; Enhanced Measurement manages its own automatic event parameters. Revoking consent disables further collection and clears this property's prefixed analytics cookies.
- Leave **Enhanced measurement enabled** in the GA4 web stream. Google handles automatic page views, outbound link clicks, scrolls, and PDF downloads. The app never sends its own `page_view`, avoiding duplicate initial page views.
- Custom events: `project_open` for a project dialog, and `resume_click` because the résumé is on the same domain and does not count as an outbound link. In GA4, optionally register event-scoped custom dimensions for `project_id` and `placement` to break down these reports. External article/demo clicks are covered by Enhanced Measurement; linked videos are not embedded, so video playback itself is not measured here.
- After publishing, allow analytics on the live site and check **Reports → Realtime**. Regular reports can take 24–48 hours. Ad blockers or visitors declining analytics will reduce recorded counts.

Run `npm test` for the consent, event allowlist, production-only collection, and duplicate-initialization checks. These tests use a fake browser and do not send traffic to Google.
