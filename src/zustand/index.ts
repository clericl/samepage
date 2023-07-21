import { create } from "zustand";
import createAuthSlice from "./authSlice";
import createUiSlice from "./uiSlice";
import { AuthSlice, UiSlice } from "@/types";

const useBoundStore = create<AuthSlice & UiSlice>()((...a) => ({
  ...createAuthSlice(...a),
  ...createUiSlice(...a),
}))

export default useBoundStore
