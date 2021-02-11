import CheckCircleIcon from './common/icon/CheckCircleIcon'
import XCircleIcon from './common/icon/XCircleIcon'
import { BaseResponse } from 'lib/types'
import InformationIcon from './common/icon/InformationIcon'
import WarningIcon from './common/icon/WarningIcon'
import { FunctionComponent } from 'react'

export interface AlertProps extends BaseResponse {
  closeAlert(): void
  title: string
}

export const Alert = ({ closeAlert, severity, message, title }: AlertProps) => {
  let Icon: FunctionComponent = null

  let styles: {
    alertBG: string
    button: string
    message: string
    title: string
  } = null

  switch (severity) {
    case 'success':
      Icon = () => <CheckCircleIcon />
      styles = {
        alertBG: 'bg-green-50',
        button:
          'bg-green-50 text-green-800 hover:bg-green-100 focus:ring-offset-green-50 focus:ring-green-600',
        title: 'text-green-800',
        message: 'text-green-700',
      }
      break
    case 'error':
      Icon = () => <XCircleIcon />
      styles = {
        alertBG: 'bg-red-50',
        button:
          'bg-red-50 text-red-800 hover:bg-red-100 focus:ring-offset-red-50 focus:ring-red-600',
        title: 'text-red-800',
        message: 'text-red-700',
      }
      break
    case 'info':
      Icon = () => <InformationIcon />
      styles = {
        alertBG: 'bg-blue-50',
        button:
          'bg-blue-50 text-blue-800 hover:bg-blue-100 focus:ring-offset-blue-50 focus:ring-blue-600',
        title: 'text-blue-800',
        message: 'text-blue-700',
      }
      break
    case 'warning':
      Icon = () => <WarningIcon />
      styles = {
        alertBG: 'bg-yellow-50',
        button:
          'bg-yellow-50 text-yellow-800 hover:bg-yellow-100 focus:ring-offset-yellow-50 focus:ring-yellow-600',
        title: 'text-yellow-800',
        message: 'text-yellow-700',
      }
      break
    default:
      return null
  }

  return (
    <div className={`rounded-md p-4 ${styles.alertBG}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon />
        </div>
        <div className="ml-3">
          <h3 className={`text-sm font-medium ${styles.title}`}>{title}</h3>
          <div className={`mt-2 text-sm ${styles.message}`}>
            <p>{message}</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
              <button
                onClick={closeAlert}
                className={`px-2 py-1.5 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.button}`}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
