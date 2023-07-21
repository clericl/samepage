import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '.'

const auth = getAuth(app)

export async function signUserUp(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const { user } = userCredential

    return user
  } catch (e: any) {
    const errorCode = e.code
    const errorMessage = e.message

    console.error(errorCode, errorMessage)
    return null
  }
}

export async function logUserIn(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    )
    const { user } = userCredential

    return user
  } catch (e: any) {
    const errorCode = e.code
    const errorMessage = e.message

    console.error(errorCode, errorMessage)
    return null
  }
}
