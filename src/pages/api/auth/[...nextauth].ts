import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { api } from 'services/api'

export default NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60 //7days
  },
  jwt: {
    secret: process.env.NEXT_AUTH_SECRET,

    maxAge: 7 * 24 * 60 * 60 //7days
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},

      async authorize(credentials) {
        const response = await api.get('/users', {
          params: { email: credentials, password: credentials }
        })

        if (response) {
          console.log(response.data)
          return response.data
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id
      }

      return token
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id
      }

      return session
    }
  }
})
