import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '.'

export default async function signUserUp(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const { user } = userCredential

    return user
  } catch (e: any) {
    const errorCode = e.code
    const errorMessage = e.message

    console.error(errorCode, errorMessage)
    return null
  }
}
