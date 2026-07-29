import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { site } from '@/lib/site'
import './globals.css'

const anek = localFont({
  src: './fonts/anek-latin.woff2',
  weight: '400 700',
  display: 'swap',
  variable: '--font-anek',
})

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}, Ahmedabad`,
  description:
    'Motion designer working in brand films, cinematic, AI film, commercials and large-format animation. Based in Ahmedabad, India.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={anek.variable}>
      <body>{children}</body>
    </html>
  )
}
