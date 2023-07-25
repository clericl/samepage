'use client'

import { ReactNode, useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '@/firebase'
import useBoundStore from '@/zustand'
import Header from '@/components/Header'
import MenuDrawer from '@/components/MenuDrawer'
import type { Metadata } from 'next'

import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SamePage',
  description: 'Find your reading fellows and start on a book together, today!',
}

const auth = getAuth(app)

export default function RootLayout({
  home,
  splash,
}: {
  home: ReactNode
  splash: ReactNode
}) {
  const [isClient, setIsClient] = useState(false)

  const {
    signedIn,
    signIn,
    signOut,
  } = useBoundStore((state) => state)

  useEffect(() => {
    setIsClient(true)
  }, [])
  
  useEffect(() => {
    const watchAuth = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          signIn()
        } else {
          signOut()
        }
      })
    }

    watchAuth()
  }, [signIn, signOut])

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <MenuDrawer />
        {isClient ? (
          signedIn ? home : splash
        ) : null}
      </body>
    </html>
  )
}
