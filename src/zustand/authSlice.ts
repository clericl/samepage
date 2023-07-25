import { getAuth } from 'firebase/auth'
import { StateCreator } from 'zustand'
import { AuthSlice, UiSlice } from '@/utils/types'
import app from '@/firebase'

const auth = getAuth(app)

const createAuthSlice: StateCreator<
  AuthSlice & UiSlice,
  [],
  [],
  AuthSlice
> = (set) => ({
  signedIn: !!auth.currentUser,
  signIn: () => set(() => ({ signedIn: true })),
  signOut: () => set(() => ({ signedIn: false })),
})

export default createAuthSlice
