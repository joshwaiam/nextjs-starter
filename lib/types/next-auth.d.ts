declare module 'next-auth' {
  export interface User {
    name: string
    email: string
    image: string
  }

  export interface Account {
    provider: string
    type: string
    id: string
    refreshToken: string
    accessToken: string
    accessTokenExpires: unknown
  }

  export interface Profile {
    id: string
    username: string
    avatar: string
    discriminator: string
    public_flags: number
    flags: number
    email: string
    verified: boolean
    locale: string
    mfa_enabled: boolean
    premium_type: number
  }
}
