import DarkModeToggler from 'components/common/dark-mode-toggle'
import Head from 'next/head'

export const Home = (): JSX.Element => (
  <>
    <Head>
      <title>Component Showcase</title>
    </Head>
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 divide-y">
      <h1 className="text-3xl font-bold">Component Showcase</h1>
      <div className="py-5">
        <h2 className="text-xl">Dark Mode Toggler</h2>
        <DarkModeToggler />
      </div>
    </div>
  </>
)

export default Home
