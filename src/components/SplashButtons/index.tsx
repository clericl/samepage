'use client'

import useBoundStore from "@/zustand"

export default function SplashButtons() {
  const setModal = useBoundStore((state) => state.setModal)

  return (
    <>
      <button onClick={() => setModal('signup')}>
        Sign up
      </button>
      <button onClick={() => setModal('login')}>
        Log in
      </button>
    </>
  )
}
