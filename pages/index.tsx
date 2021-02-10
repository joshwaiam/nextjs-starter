import DarkModeToggle from 'components/common/DarkModeToggle'
import Head from 'next/head'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Component Showcase</title>
    </Head>
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 divide-y">
      <h1 className="text-3xl font-bold">Component Showcase</h1>
      <div>
        <DarkModeToggle />
      </div>
    </div>
  </>
)

export default Home
