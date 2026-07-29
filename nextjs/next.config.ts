import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Fully static site — `next build` writes plain HTML to out/, so the
  // portfolio can be hosted on any static host (Vercel, GitHub Pages, S3).
  output: 'export',
  // Write each route as <route>/index.html so deep links like
  // /projects/showreel work on any static file server.
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
