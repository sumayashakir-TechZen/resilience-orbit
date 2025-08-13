# Resilience Orbit — Static Site

This folder contains a ready-to-publish static site and all downloads (short filenames, Windows-safe).

## Files
- `index.html` — main site
- `logo.png`, `icon-32.png`, `icon-180.png`, `icon-512.png`, `og.png` — brand icons/social
- `toolkit.pdf`, `quickstart.pdf`, `day1-guide.docx` — guides
- `scorecard-template.csv`, `scorecard-sample.csv`, `scorecard-guide.txt` — executive scorecard
- `pr_template_snippet.md`, `definition_of_done_additions.md`, `quickstart_checklist.md` — extras

## Publish via Git
```bash
git init
git lfs install
git lfs track "*.pdf" "*.docx"
git add .gitattributes .
git add .
git commit -m "Publish Resilience Orbit site"
git branch -M main
git remote add origin <YOUR-REPO-URL>
git push -u origin main
```

## Cloudflare Pages (static)
- Workers & Pages → Create application → **Pages** → *Connect to Git*
- Framework preset: **None**
- Build command: *(leave empty)*
- Output directory: **/**

Then set custom domain to `resilienceorbit.com`.
