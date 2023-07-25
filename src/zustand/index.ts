import { create } from "zustand";
import { persist } from 'zustand/middleware'
import { AuthSlice, UiSlice } from "@/utils/types";
import createAuthSlice from "./authSlice";
import createUiSlice from "./uiSlice";

const useBoundStore = create<AuthSlice & UiSlice>()(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
      ...createUiSlice(...a),
    }),
    {
      name: 'bound-store',
    },
  )
)

export default useBoundStore
