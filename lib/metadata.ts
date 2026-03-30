import type { Metadata } from 'next'
import { siteConfig } from '@/content/site'

export function buildMetadata({ title, description }: { title: string; description: string }): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteConfig.siteUrl,
      siteName: siteConfig.siteName,
      type: 'website',
    },
  }
}
