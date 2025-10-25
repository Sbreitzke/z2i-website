import { type Metadata } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Sebastian Breitzke',
    default:
      'Sebastian Breitzke - Director R&D, Solution Architect, Pragmatischer Problemlöser',
  },
  description:
    'Director R&D mit über 20 Jahren Erfahrung in der Logistiksoftware-Entwicklung für Mercedes-Benz, Otto Group und DHL. Pragmatische Lösungen für die unordentliche Realität.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  )
}
