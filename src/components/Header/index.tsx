'use client'

import { useMemo } from "react"
import useBoundStore from "@/zustand"

export default function Header() {
  const { openMenu, user } = useBoundStore((state) => state)
  const displayName = user?.providerData[0].displayName

  const welcomeMessage = useMemo(() => {
    return displayName ? `Welcome, ${displayName}` : 'Welcome'
  }, [displayName])

  return (
    <>
      <header className="sticky top-0 w-full h-20 flex justify-between items-center px-6 border-b">
        <span className="text-2xl">{welcomeMessage}</span>
        <div>
          <button onClick={openMenu}>Menu</button>
        </div>
      </header>
    </>
  )
}
