import { User } from 'firebase/auth'

export type ModalType = 'signup' | 'login' | null

export interface AuthSlice {
  user: User | null,
  logUserIn: (newUser: User) => void,
  logUserOut: () => void,
}

export interface UiSlice {
  modal: ModalType,
  closeModal: () => void,
  setModal: (newModal: ModalType) => void,
}
