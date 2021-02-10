import useDarkMode from 'use-dark-mode'
import SunIcon from './icons/SunIcon'
import MoonIcon from './icons/MoonIcon'

export interface DarkModeToggleProps {
  toggleClasses?: {
    default?: string
    active?: string
    inactive?: string
  }
  iconClass?: string
}

/**
 *
 * @param {string} iconClass                  Class applied to the sun and moon icons.
 *                                            Default: 'h-5 w-5'
 * @param {object} toggleClasses              Classes for the states of the toggle buttons.
 * @param {string} toggleClasses.default      Class applied to both toggle buttons.
 *                                            Default: '-ml-px relative inline-flex items-center px-2 py-2 border border-primary-700 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500'
 * @param {string} toggleClasses.active       Class applied to an active toggle button.
 *                                            Default: 'bg-primary-700 text-gray-300'
 * @param {string} toggleClasses.inactive     Class applied to an inactive toggle button.
 *                                            Default: 'bg-white dark:bg-gray-800 text-gray-500 hover:bg-primary-200'
 *
 */
export const DarkModeToggle = ({
  iconClass = 'h-5 w-5',
  toggleClasses,
}: DarkModeToggleProps) => {
  const defaultClass =
    toggleClasses?.default ||
    '-ml-px relative inline-flex items-center px-2 py-2 border border-primary-700 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500'
  const activeClass = toggleClasses?.active || 'bg-primary-700 text-gray-300'
  const inactiveClass =
    toggleClasses?.inactive ||
    'bg-white dark:bg-gray-800 text-gray-500 hover:bg-primary-200'

  const darkMode = useDarkMode(true, {
    classNameDark: 'dark',
    classNameLight: 'light',
  })

  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      <button
        type="button"
        className={`${
          !darkMode.value ? activeClass : inactiveClass
        } ${defaultClass} rounded-l-md`}
        onClick={darkMode.disable}
      >
        <span className="sr-only">Light Mode</span>
        <SunIcon className={iconClass} />
      </button>
      <button
        type="button"
        className={`${
          darkMode.value ? activeClass : inactiveClass
        } ${defaultClass} rounded-r-md`}
        onClick={darkMode.enable}
      >
        <span className="sr-only">Dark Mode</span>
        <MoonIcon className={iconClass} />
      </button>
    </span>
  )
}

export default DarkModeToggle
