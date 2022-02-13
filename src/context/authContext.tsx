import { createContext, useContext, useState } from 'react'
import { setCookie } from 'nookies'
import Router from 'next/router'

import { api } from 'services/api'

type SignInData = {
  email: string
  password: string
}
type User = {
  name: string
  email: string
  avatar_url: string
}
type Props = {
  children: React.ReactNode
}
type AuthContextData = {
  signIn(data: SignInData): Promise<void>
  isAuthenticated: boolean
  loading: boolean
  setLoading: (value: boolean) => void
}

const authContext = createContext({} as AuthContextData)

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState(false)

  const isAuthenticated = !!user

  async function signIn({ email, password }: SignInData) {
    const { data } = await api.get('/users', {
      params: { email: email, password: password }
    })

    const token = 'mysecretpassword256'

    setCookie(undefined, '@nextauth-token', token, {
      maxAge: 60 * 60 * 1 //1 hours
    })

    setUser(data)

    Router.push('/dashboard')
  }

  return (
    <authContext.Provider
      value={{ signIn, isAuthenticated, loading, setLoading }}
    >
      {children}
    </authContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(authContext)

  return context
}
