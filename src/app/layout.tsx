'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import useBoundStore from '@/zustand'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SamePage',
  description: 'Find your reading fellows and start on a book together, today!',
}

export default function RootLayout({
  children,
  home,
  splash,
}: {
  children: ReactNode
  home: ReactNode
  splash: ReactNode
}) {
  const user = useBoundStore((state) => state.user)

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {user ? home : splash}
      </body>
    </html>
  )
}
