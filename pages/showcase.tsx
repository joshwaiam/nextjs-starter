import Alert from 'components/common/alert'
import DarkModeToggler from 'components/common/dark-mode-toggler'
import { DividerWrapper, DividerText } from 'components/common/divider'
import CheckCircleIcon from 'components/common/icons/CheckCircleIcon'
import InformationIcon from 'components/common/icons/InformationIcon'
import MenuIcon from 'components/common/icons/MenuIcon'
import MoonIcon from 'components/common/icons/MoonIcon'
import SunIcon from 'components/common/icons/SunIcon'
import WarningIcon from 'components/common/icons/WarningIcon'
import XCircleIcon from 'components/common/icons/XCircleIcon'
import XIcon from 'components/common/icons/XIcon'
import Loader from 'components/common/loader'
import ModalWrapper from 'components/common/modal/ModalWrapper'
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
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-300 py-5">
          Component Showcase
        </h1>
        {/**
         * ALERTS
         *
         */}
        <div className="py-5">
          <h2 className="text-xl text-gray-800 dark:text-gray-300 pb-3">
            Alerts
          </h2>
          <div className="mb-3">
            <Alert
              severity="success"
              title="Success!"
              message="This is a sample success alert."
              closeAlert={null}
            />
          </div>
          <div className="mb-3">
            <Alert
              severity="error"
              title="Error!"
              message="This is a sample error alert."
              closeAlert={null}
            />
          </div>
          <div className="mb-3">
            <Alert
              severity="warning"
              title="Warning!"
              message="This is a sample warning alert."
              closeAlert={null}
            />
          </div>
          <div className="mb-3">
            <Alert
              severity="info"
              title="Info!"
              message="This is a sample info alert."
              closeAlert={null}
            />
          </div>
        </div>

        {/**
         * Dark Mode Toggler
         *
         */}
        <div className="py-5">
          <h2 className="text-xl text-gray-800 dark:text-gray-300 pb-3">
            Dark Mode Toggler
          </h2>
          <DarkModeToggler />
        </div>

        {/**
         * Dividers
         *
         */}
        <div className="py-5">
          <h2 className="text-xl text-gray-800 dark:text-gray-300 pb-3">
            Dividers
          </h2>
          <div className="py-3">
            <DividerWrapper />
          </div>
          <div className="py-3">
            <DividerWrapper>
              <DividerText>With Centered Label</DividerText>
            </DividerWrapper>
          </div>
          <div className="py-3">
            <DividerWrapper>
              <DividerText align="left">With Left Label</DividerText>
            </DividerWrapper>
          </div>
          <div className="py-3">
            <DividerWrapper>
              <DividerText variant="title">With Centered Title</DividerText>
            </DividerWrapper>
          </div>
          <div className="py-3">
            <DividerWrapper>
              <DividerText align="left" variant="title">
                With Left Title
              </DividerText>
            </DividerWrapper>
          </div>
        </div>

        {/**
         * Loader
         *
         */}
        <div className="py-5">
          <h2 className="text-xl text-gray-800 dark:text-gray-300 pb-3">
            Loader
          </h2>
          <div className="py-3">
            <Loader variant="default" />
          </div>
          <div className="py-3">
            <Loader variant="dual-ring" />
          </div>
          <div className="py-3">
            <Loader variant="ellipsis" />
          </div>
          <div className="py-3">
            <Loader variant="facebook" />
          </div>
          <div className="py-3">
            <Loader variant="grid" />
          </div>
          <div className="py-3">
            <Loader variant="heart" />
          </div>
          <div className="py-3">
            <Loader variant="ring" />
          </div>
          <div className="py-3">
            <Loader variant="ripple" />
          </div>
          <div className="py-3">
            <Loader variant="roller" />
          </div>
          <div className="py-3">
            <Loader variant="custom">
              <h1 className="text-5xl text-white">Custom Loader!</h1>
            </Loader>
          </div>
        </div>

        {/**
         * Icons
         *
         */}
        <div className="py-5">
          <h2 className="text-xl text-gray-800 dark:text-gray-300 pb-3">
            Icons
          </h2>

          <CheckCircleIcon className="inline-block mr-1 w-12 h-12 text-white" />
          <InformationIcon className="inline-block mr-1 w-12 h-12 text-white" />
          <MenuIcon className="inline-block mr-1 w-12 h-12 text-white" />
          <MoonIcon className="inline-block mr-1 w-12 h-12 text-white" />
          <SunIcon className="inline-block mr-1 w-12 h-12 text-white" />
          <WarningIcon className="inline-block mr-1 w-12 h-12 text-white" />
          <XCircleIcon className="inline-block mr-1 w-12 h-12 text-white" />
          <XIcon className="inline-block mr-1 w-12 h-12 text-white" />
        </div>

        {/**
         * Modal
         *
         */}
        <div className="py-5">
          <h2 className="text-xl text-gray-800 dark:text-gray-300 pb-3">
            Modal
          </h2>
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
