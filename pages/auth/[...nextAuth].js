import NextAuth from 'next-auth'

const options = {
  providers: [
    // Providers.Discord({
    //   clientId: process.env.AUTH_CLIENT_ID,
    //   clientSecret: process.env.AUTH_CLIENT_SECRET,
    // }),
  ],
  session: {
    jwt: true,
  },
}

export default (req, res) => NextAuth(req, res, options)
