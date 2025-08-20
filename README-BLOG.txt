Resilience Orbit — Blog Add-on (Eleventy)
========================================

Files in this bundle:
- package.json
- .eleventy.js
- _includes/base.njk
- _includes/post.njk
- blog.njk
- blog-rss.njk
- content/posts/hello-resilience.md
- UPDATED_index.html (optional: replace your index.html with this to add nav + RSS link)

How to use:
1) Upload everything at the repo root.
2) (Optional) Replace your index.html with UPDATED_index.html to show the Blog/RSS links.
3) In Cloudflare Pages, set:
   - Build command: npm run build
   - Output directory: _site
   - Framework preset: None
4) Commit & push. Visit /blog and /blog/rss.xml.

Authoring posts:
- Add Markdown files to content/posts/ with front matter:
---
title: "Post title"
date: YYYY-MM-DD
summary: "One-line summary"
tags: ["resilience","architecture"]
layout: "_includes/post.njk"
---
Your content here...
