import { ReactNode, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(false)

export const AuthProvider = (props: { children: ReactNode }) => {

  const auth = localStorage.getItem('login') === 'true' ? true : false
  const nav = useNavigate()

  useEffect(() => {
    if (!auth) {
      nav('/login')
    }
  }, [])

  return (
    <AuthContext.Provider value={auth}>
      {props.children}
    </AuthContext.Provider>
  )
}
