'use client'

import { ReactNode, useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import useBoundStore from '@/zustand'
import type { Metadata } from 'next'

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SamePage',
  description: 'Find your reading fellows and start on a book together, today!',
}

export default function IndexLayout({
  home,
  splash,
}: {
  home: ReactNode
  splash: ReactNode
}) {
  const [isClient, setIsClient] = useState(false)

  const user = useBoundStore((state) => state.user)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        {isClient && (
          user ? home : splash
        )}
      </body>
    </html>
  )
}
