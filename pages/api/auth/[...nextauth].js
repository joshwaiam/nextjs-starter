import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  database: process.env.MONGO_URL,
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
}

export default (req, res) => NextAuth(req, res, options)
