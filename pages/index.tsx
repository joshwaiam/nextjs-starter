import Head from 'next/head'
import { useSession, signIn, signOut } from 'next-auth/client'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>My New App</title>
    </Head>
    <div>Welcome!</div>
  </>
)

export default Home
