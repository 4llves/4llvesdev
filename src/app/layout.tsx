import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '4llves.dev',
  description: 'Portifólio do Alves',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col`}>
        <NavBar />
        <div className="flex-1">
          <main className="">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
