'use client'

import { ModalType } from "@/utils/types"
import { ChangeEvent, FormEvent, useCallback, useState } from "react"
import { logUserIn, signUserUp } from "@/firebase/auth"
import useBoundStore from "@/zustand"

export default function AuthForm({
  type,
}: {
  type: ModalType
}) {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const setUser = useBoundStore((state) => state.setUser)

  const handleEmailInput = useCallback((
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setEmailInput(e.target.value)
  }, [])

  const handlePasswordInput = useCallback((
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setPasswordInput(e.target.value)
  }, [])

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let newUser = null

    if (type === 'login') {
      newUser = await logUserIn(emailInput, passwordInput)
    } else {
      newUser = await signUserUp(emailInput, passwordInput)
    }

    if (newUser) {
      setUser(newUser)
    }
  }, [emailInput, passwordInput, setUser, type])

  return (
    <form className="flex flex-col p-8" onSubmit={handleSubmit}>
      <label className="flex flex-col">
        Email address
        <input
          className="border"
          onChange={handleEmailInput}
          value={emailInput}
        />
      </label>
      <label className="flex flex-col">
        Password
        <input
          className="border"
          onChange={handlePasswordInput}
          type="password"
          value={passwordInput}
        />
      </label>
      <button className="w-full bg-primary text-button-text mt-4 py-2">
        {type === 'login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
  )
}
