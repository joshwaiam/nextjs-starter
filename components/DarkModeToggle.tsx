import useDarkMode from 'use-dark-mode'
import SunIcon from './icons/SunIcon'
import MoonIcon from './icons/MoonIcon'

const classes = {
  button: {
    default:
      '-ml-px relative inline-flex items-center px-2 py-2 border border-primary-700 text-sm font-medium focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500',
    active: 'bg-primary-700 text-gray-300',
    inactive: 'bg-white dark:bg-gray-800 text-gray-500 hover:bg-primary-200',
  },
  icon: 'h-5 w-5',
}

export const DarkModeToggle = () => {
  const darkMode = useDarkMode(true, {
    classNameDark: 'dark',
    classNameLight: 'light',
  })

  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      <button
        type="button"
        className={`${
          !darkMode.value ? classes.button.active : classes.button.inactive
        } ${classes.button.default} rounded-l-md`}
        onClick={darkMode.disable}
      >
        <span className="sr-only">Light Mode</span>
        <SunIcon className={classes.icon} />
      </button>
      <button
        type="button"
        className={`${
          darkMode.value ? classes.button.active : classes.button.inactive
        } ${classes.button.default} rounded-r-md`}
        onClick={darkMode.enable}
      >
        <span className="sr-only">Dark Mode</span>
        <MoonIcon className={classes.icon} />
      </button>
    </span>
  )
}

export default DarkModeToggle
