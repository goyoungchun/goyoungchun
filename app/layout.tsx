import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/content/site'
import { SiteHeader } from '@/components/layout/site-header'

export const metadata: Metadata = {
  title: siteConfig.siteName,
  description: siteConfig.heroSubtitle,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
