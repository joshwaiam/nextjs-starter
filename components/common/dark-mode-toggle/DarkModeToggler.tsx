import { ReactNode } from 'react'
import useDarkMode from 'use-dark-mode'
import MoonIcon from '../icons/MoonIcon'
import SunIcon from '../icons/SunIcon'
import ToggleButton from './DarkModeToggleButton'

export interface DarkModeTogglerProps {
  darkIcon?: ReactNode
  lightIcon?: ReactNode
  toggleClasses?: {
    default?: string
    active?: string
    inactive?: string
  }
}

/**
 * Component that enables the toggling of light/dark modes.
 *
 * @param {ReactNode} darkIcon                    Replacement for the default dark icon
 * @param {ReactNode} lightIcon                   Replacement for the default light icon
 * @param {object}    toggleClasses               Replacement for the classes for the states of the toggle button.
 * @param {string}    toggleClasses.default       Class applied to both toggle buttons.
 *                                                Default: '-ml-px relative inline-flex items-center px-2 py-2 border border-primary-700 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500'
 * @param {string}    toggleClasses.active        Class applied to an active toggle button.
 *                                                Default: 'bg-primary-700 text-gray-300'
 * @param {string}    toggleClasses.inactive      Class applied to an inactive toggle button.
 *                                                Default: 'bg-white dark:bg-gray-800 text-gray-500 hover:bg-primary-200'
 *
 */

export const DarkModeToggler = ({
  darkIcon = <MoonIcon className="h-5 w-5" />,
  lightIcon = <SunIcon className="h-5 w-5" />,
  toggleClasses,
}: DarkModeTogglerProps) => {
  const darkMode = useDarkMode(true, {
    classNameDark: 'dark',
    classNameLight: 'light',
  })

  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      <ToggleButton
        variant="light"
        active={!darkMode.value}
        icon={lightIcon || <SunIcon className="h-5 w-5" />}
        toggleClasses={toggleClasses}
        onClick={darkMode.disable}
      />
      <ToggleButton
        variant="dark"
        active={darkMode.value}
        icon={darkIcon || <MoonIcon className="h-5 w-5" />}
        toggleClasses={toggleClasses}
        onClick={darkMode.enable}
      />
    </span>
  )
}

export default DarkModeToggler
