# edubuntu.org
Website for Edubuntu Project

## News posts

The News page (`news.html`) is loaded from markdown files.

1. Create a post in `news/` using this format:

```
---
title: Your post title
date: YYYY-MM-DD
summary: Short one-line summary
---

Markdown content goes here.
```

2. Add the markdown filename to `news/index.json` in the `posts` array.
3. Reload `news.html`.

### GitHub Pages note

This repository includes `.nojekyll` so markdown files in `news/` are served as raw files for JavaScript to fetch.
