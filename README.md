# Personal Product Studio

Next.js source project for a personal product studio site.

## Structure
- `main` branch keeps the source code
- GitHub Actions builds and deploys the static export to GitHub Pages

## Included
- Home / About / Projects / Project Detail / Privacy / Privacy Detail / Contact
- File-based content in `content/`
- Reusable components
- GitHub Pages-compatible export config

## Local development
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
```

## Notes
- Update `content/site.ts` for production metadata
- GitHub Pages deployment is handled by `.github/workflows/deploy-pages.yml`
