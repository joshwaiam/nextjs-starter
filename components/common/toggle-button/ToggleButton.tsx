import { ReactNode } from 'react'

const defaultButtonClasses =
  'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none aria-pressed="false"'

export interface ToggleButtonProps {
  activeIcon?: ReactNode
  activeIconColor?: string
  activeWellColor?: string
  inactiveIcon?: ReactNode
  inactiveIconColor?: string
  inactiveWellColor?: string
  isActive: boolean
  label?: ReactNode
  name: string
  onClick(): void
}

/**
 * Returns a customized on/off toggle button.
 *
 * @param {ReactNode}   activeIcon          Visible icon when isActive set to true.
 * @param {string}      activeIconColor     Color classes applied to the element wrapping the active icon.
 *                                          Default: 'text-gray-900 bg-white'
 * @param {string}      activeWellColor     Color classes applied to the active toggle button well.
 *                                          Default: 'bg-primary-600'
 * @param {ReactNode}   inactiveIcon        Visible icon when isActive set to false.
 * @param {string}      inactiveIconColor   Color classes applied to the element wrapping the inactive icon.
 *                                          Default: 'text-gray-900 bg-white'
 * @param {istring}     inactiveWellColor   Color classes applied to the inactive toggle button well.
 *                                          Default: 'bg-gray-200'
 * @param {boolean}     isActive            Toggle button state.
 * @param {ReactNode}   label               ReactNode to render as the label.
 * @param {string}      name                Used for various name and id atrributes.
 * @param {function}    onClick             Function to call when toggle button is clicked.
 */
export const ToggleButton = ({
  activeIcon,
  activeIconColor = 'text-gray-900 bg-white',
  activeWellColor = 'bg-primary-600',
  inactiveIcon,
  inactiveIconColor = 'text-gray-900 bg-white',
  inactiveWellColor = 'bg-gray-200',
  isActive,
  label,
  name,
  onClick,
}: ToggleButtonProps) => (
  <div className="flex items-center mb-2">
    <button
      type="button"
      className={`${
        isActive ? activeWellColor : inactiveWellColor
      } ${defaultButtonClasses}`}
      onClick={onClick}
    >
      <span className="sr-only">{name}</span>
      <span
        aria-hidden="true"
        className={`${isActive ? 'translate-x-5' : 'translate-x-0'} ${
          isActive ? activeIconColor : inactiveIconColor
        } pointer-events-none inline-block h-5 w-5 rounded-full shadow transform ring-0 transition ease-in-out duration-200`}
      >
        {isActive ? activeIcon : inactiveIcon}
      </span>
    </button>
    {label ? (
      <span className="ml-3" id={name}>
        {label}
      </span>
    ) : null}
  </div>
)

export default ToggleButton
