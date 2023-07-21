'use client'

import { MouseEvent, useCallback } from "react";
import classNames from "classnames";
import useBoundStore from "@/zustand";
import AuthForm from "../AuthForm";

export default function SplashModalBase() {
  const { modal, closeModal } = useBoundStore((state) => state)

  const handleCloseModal = useCallback((e: MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }, [closeModal])

  return (
    <div
      className={classNames(
        'transition-opacity absolute w-full h-full bg-black/70 z-10 top-0 left-0 flex justify-center items-center',
        {
          'opacity-0': !modal,
          'opacity-100': !!modal,
          'pointer-events-none': !modal,
          'pointer-events-all': !!modal,
        },
      )}
      onClick={handleCloseModal}
    >
      <div className="bg-white">
        <div>
        {modal === 'login' ? (
          <AuthForm type="login" />
        ) : (
          <AuthForm type="signup" />
        )}
        </div>
      </div>
    </div>
  )
}
