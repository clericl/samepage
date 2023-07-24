import { StateCreator } from 'zustand'
import { AuthSlice, UiSlice } from '@/utils/types'

const createAuthSlice: StateCreator<
  AuthSlice & UiSlice,
  [],
  [],
  AuthSlice
> = (set) => ({
  user: null,
  setUser: (user) => set(() => ({ user })),
  clearUser: () => set(() => ({ user: null })),
})

export default createAuthSlice
