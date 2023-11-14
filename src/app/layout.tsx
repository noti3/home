import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'

import Header from './header'
import Footer from './footer'

import UiProvider from '@/providers/ui.provider'

import '@/static/styles/global.scss'

export const metadata: Metadata = {
  title: 'noti3',
  description:
    'noti3: The tool to develop your web3 user engagement and retention.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,700,400,600,300,1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="w-full min-h-[100dvh] flex flex-col">
        <UiProvider>
          <header className="w-full sticky top-0 bg-base-100 z-10">
            <Header />
          </header>
          <main className="w-full px-4 flex-[1_1_0]">{children}</main>
          <footer className="w-full mt-4">
            <Footer />
          </footer>
        </UiProvider>
      </body>
    </html>
  )
}
