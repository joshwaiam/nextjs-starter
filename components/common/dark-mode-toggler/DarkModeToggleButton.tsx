import { capitalize } from 'lib/utils'
import { ReactNode } from 'react'
import { DarkModeTogglerProps } from './DarkModeToggler'

interface DarkModeToggleButtonProps {
  active: boolean
  icon: ReactNode
  toggleClasses?: DarkModeTogglerProps['toggleClasses']
  variant: 'light' | 'dark'
  onClick(): void
}

export const DarkModeToggleButton = ({
  active,
  icon,
  toggleClasses,
  variant,
  onClick,
}: DarkModeToggleButtonProps) => {
  const defaultClass =
    toggleClasses?.default ||
    '-ml-px relative inline-flex items-center px-2 py-2 border border-primary-700 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500'
  const activeClass = toggleClasses?.active || 'bg-primary-700 text-gray-300'
  const inactiveClass =
    toggleClasses?.inactive ||
    'bg-white dark:bg-gray-800 text-gray-500 hover:bg-primary-200'

  return (
    <button
      type="button"
      className={`${active ? activeClass : inactiveClass} ${defaultClass} ${
        variant === 'light' ? 'rounded-l-md' : 'rounded-r-md'
      }`}
      onClick={onClick}
    >
      <span className="sr-only">{`${capitalize(variant)} Mode`}</span>
      {icon}
    </button>
  )
}

export default DarkModeToggleButton
