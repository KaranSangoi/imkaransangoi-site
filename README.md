# imkaransangoi.com

Static-first personal business site built with Next.js 15 (App Router), TypeScript and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

## Production check

```bash
npm run build
```

The Next.js configuration exports the site to `out/`. Do not deploy or connect the live domain until Claude's QA pass and Karan's explicit approval.

## Blog migration

Markdown files in `posts/` become `/blog/<filename>/` routes. Copy files from the former portfolio's `/posts` directory without renaming them to preserve slugs.
