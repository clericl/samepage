import { StateCreator } from 'zustand'
import { ModalType, AuthSlice, UiSlice } from '@/utils/types'

const createUiSlice: StateCreator<
  AuthSlice & UiSlice,
  [],
  [],
  UiSlice
> = (set) => ({
  menuOpen: false,
  modal: null,
  closeMenu: () => set(() => ({ menuOpen: false })),
  closeModal: () => set(() => ({ modal: null })),
  openMenu: () => set(() => ({ menuOpen: true })),
  setModal: (newModal: ModalType) => set(() => ({ modal: newModal })),
})

export default createUiSlice
