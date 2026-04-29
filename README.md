# edubuntu.org
Website for Edubuntu Project

## News posts

The News page (`news.html`) is loaded from markdown files.

1. Create a post in `news/YYYY/MM/` using this format:

```
---
title: Your post title
date: YYYY-MM-DD
summary: Short one-line summary
---

Markdown content goes here.
```

2. Add the markdown path to `news/index.json` in the `posts` array (example: `2026/04/my-post.md`).
3. Reload `news.html`.

Images are supported in markdown posts using standard syntax:

```
![Alt text](images/image-file.png)
```

Store images in `news/images/`.
Using `images/...` will resolve to that shared folder from any post directory.

### GitHub Pages note

This repository includes `.nojekyll` so markdown files in `news/` are served as raw files for JavaScript to fetch.
