import { SVGProps } from 'react'

/**
 * Heroicon name: menu
 *
 * @param {SVGProps<SVGSVGElement>} props
 */
export const MenuIcon = ({ ...svgProps }: SVGProps<SVGSVGElement>) => (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
    {...svgProps}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
)

export default MenuIcon
