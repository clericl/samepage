'use-client'

import signUserUp from "@/firebase/auth"
import useBoundStore from "@/zustand"
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react"

function SignUpForm() {
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const {
    closeModal,
    logUserIn,
    user,
  } = useBoundStore((state) => state)

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

    const user = await signUserUp(emailInput, passwordInput)
    console.log(user)

    if (user) {
      logUserIn(user)
    }
  }, [emailInput, passwordInput, logUserIn])

  useEffect(() => {
    closeModal()
  }, [closeModal, user])

  return (
    <div className="flex justify-center items-center">
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
          Sign up
        </button>
      </form>
    </div>
  )
}

export default SignUpForm
