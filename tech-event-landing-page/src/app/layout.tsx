import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import DarkModeToggle from './components/DarkModeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechCon 2024 - The Premier Tech Conference',
  description: 'Join the world\'s leading developers and tech innovators at TechCon 2024. Featuring keynotes, workshops, and networking opportunities.',
  openGraph: {
    title: 'TechCon 2024 - The Premier Tech Conference',
    description: 'Join the world\'s leading developers and tech innovators at TechCon 2024. Featuring keynotes, workshops, and networking opportunities.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        <div className="fixed bottom-4 right-4 z-50">
          <DarkModeToggle />
        </div>
        {children}
      </body>
    </html>
  )
}