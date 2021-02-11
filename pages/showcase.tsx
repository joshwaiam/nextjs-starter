import Alert from 'components/common/alert'
import DarkModeToggler from 'components/common/dark-mode-toggler'
import Loader from 'components/common/loader'
import { LoaderProps } from 'components/common/loader/Loader'
import ModalWrapper from 'components/common/modal/ModalWrapper'
import Head from 'next/head'
import { useState } from 'react'

export const Home = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false)
  const [loaderVariant, setLoaderVariant] = useState<LoaderProps['variant']>(
    'default'
  )

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
        <div className="py-5">
          <h2 className="text-xl text-gray-800 dark:text-gray-300 pb-3">
            Dark Mode Toggler
          </h2>
          <DarkModeToggler />
        </div>
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
        <div className="py-5">
          <h2 className="text-xl text-gray-800 dark:text-gray-300 pb-3">
            Loader
          </h2>
          <select
            className="mb-3"
            onChange={(e) =>
              setLoaderVariant(e.target.value as LoaderProps['variant'])
            }
          >
            <option>default</option>
            <option>dual-ring</option>
            <option>ellipsis</option>
            <option>facebook</option>
            <option>grid</option>
            <option>heart</option>
            <option>ring</option>
            <option>ripple</option>
            <option>roller</option>
            <option>custom</option>
          </select>
          <Loader variant={loaderVariant}>
            <h3>Custom Loader!</h3>
          </Loader>
        </div>
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
      </div>
    </>
  )
}

export default Home
