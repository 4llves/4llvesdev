import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '4llves.dev',
  description: 'Portifólio do Alves',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <NavBar />
          <div className="flex max-h-screen flex-col overflow-y-scroll bg-cover bg-gray-900">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
