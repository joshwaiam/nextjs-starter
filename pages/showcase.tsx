import DarkModeToggler from 'components/common/dark-mode-toggler'
import ModalWrapper from 'components/common/modals/ModalWrapper'
import Head from 'next/head'
import { useState } from 'react'

export const Home = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Head>
        <title>Component Showcase</title>
      </Head>
      <ModalWrapper isOpen={showModal} onClose={() => setShowModal(false)}>
        Some content
      </ModalWrapper>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 divide-y">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-300">
          Component Showcase
        </h1>
        <div className="py-5">
          <h2 className="text-xl text-gray-800 dark:text-gray-300">
            Dark Mode Toggler
          </h2>
          <DarkModeToggler />
        </div>
        <div className="py-5">
          <h2 className="text-xl text-gray-800 dark:text-gray-300">Modal</h2>
          <button
            className="bg-primary-700 p-2 rounded text-white"
            onClick={() => setShowModal(true)}
          >
            Show Modal
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
