import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'
import { AuthSlice, UiSlice } from "@/types";
import createAuthSlice from "./authSlice";
import createUiSlice from "./uiSlice";

const useBoundStore = create<AuthSlice & UiSlice>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createUiSlice(...a),
    }),
    { name: 'bound-store' },
  )
)

export default useBoundStore
