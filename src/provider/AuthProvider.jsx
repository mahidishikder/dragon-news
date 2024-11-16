import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react"
import auth from "../firebase/firebase.init";



export const AuthContext = createContext();
function AuthProvider({children}) {

  const createEmailAndPassword = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const userEmailAndPasswrodThenLogin = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  const info = {
    name : 'Mahidi Shikder',
    createEmailAndPassword,
    userEmailAndPasswrodThenLogin
  }

  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider