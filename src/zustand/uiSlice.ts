import { StateCreator } from 'zustand'
import { ModalType, AuthSlice, UiSlice } from '@/utils/types'

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

export default createUiSlice
