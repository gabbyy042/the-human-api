import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Human API - The Operating System for Humanity',
  description: 'AI-powered global network that connects humans like apps.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  )
}
