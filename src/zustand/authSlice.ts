import { StateCreator } from 'zustand'
import { AuthSlice, UiSlice } from '@/types'

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

export default createAuthSlice
