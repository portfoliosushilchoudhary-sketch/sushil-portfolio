# Sushil Choudhary — portfolio (Next.js)

The full site as a Next.js App Router project: the animated landing
(background video hero, typewriter, work list) at `/` and one page per
discipline at `/projects/<slug>` with description, NDA notice and clip
slots.

## Run it

    npm install
    npm run dev        # http://localhost:3000

## Build

    npm run build      # static export in out/ — host it anywhere

The build is fully static (`output: 'export'`), so `out/` works on
Vercel, Netlify, GitHub Pages or any file server. On Vercel, set the
project's root directory to `nextjs/`.

## Adding project videos

Drop files in `public/projects/<slug>/01.mp4` (02, 03…) and in
`app/projects/[slug]/page.tsx` replace the `.clip-empty` placeholder with
the `<video>` element noted in the comment beside it.
