'use client'

import classNames from "classnames";
import useBoundStore from "@/zustand";
import { useCallback } from "react";

export default function SplashModal() {
  const { modal, closeModal } = useBoundStore((state) => state)

  const closeModalCallback = useCallback(() => {
    closeModal()
  }, [closeModal])

  return (
    <div
      className={classNames(
        'transition-opacity absolute w-full h-full bg-black/70 z-10 top-0 left-0',
        {
          'opacity-0': !modal,
          'opacity-100': !!modal,
          'pointer-events-none': !modal,
          'pointer-events-all': !!modal,
        },
      )}
      onClick={closeModalCallback}
    >
    </div>
  )
}
