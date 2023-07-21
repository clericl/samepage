import { StateCreator, create } from "zustand";
import { ModalType } from "@/types";

interface AuthSlice {
  user: any,
  logUserIn: (newUser: any) => void,
  logUserOut: () => void,
}

const createAuthSlice: StateCreator<
  AuthSlice & UiSlice,
  [],
  [],
  AuthSlice
> = (set) => ({
  user: null,
  logUserIn: (newUser) => set(() => ({ user: newUser })),
  logUserOut: () => set(() => ({ user: null })),
})

interface UiSlice {
  modal: ModalType,
  closeModal: () => void,
  setModal: (newModal: ModalType) => void,
}

const createUiSlice: StateCreator<
  AuthSlice & UiSlice,
  [],
  [],
  UiSlice
> = (set) => ({
  modal: null,
  closeModal: () => set(() => ({ modal: null })),
  setModal: (newModal: ModalType) => set(() => ({ modal: newModal })),
})

const useBoundStore = create<AuthSlice & UiSlice>()((...a) => ({
  ...createAuthSlice(...a),
  ...createUiSlice(...a),
}))

export default useBoundStore
