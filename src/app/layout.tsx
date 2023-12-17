import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '4llves.dev',
  description: 'Portifólio do Alves',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main>
          <div className="">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
