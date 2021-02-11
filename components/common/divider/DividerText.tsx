import { ReactNode } from 'react'

interface DividerTextProps {
  align?: 'left' | 'center'
  bgColor?: string
  children: ReactNode
  labelColor?: string
  titleColor?: string
  variant?: 'label' | 'title'
}

export const DividerText = ({
  align = 'center',
  bgColor = 'bg-gray-100 dark:bg-gray-900',
  children,
  labelColor = 'text-gray-500 dark:text-gray-500',
  titleColor = 'text-gray-900 dark:text-gray-300',
  variant = 'label',
}: DividerTextProps) => (
  <div
    className={`relative flex ${
      align === 'left' ? 'justify-start' : 'justify-center'
    }`}
  >
    <span
      className={`${
        variant === 'label'
          ? `px-2 text-sm ${labelColor} ${bgColor}`
          : `px-3 text-lg font-medium ${titleColor} ${bgColor}`
      }`}
    >
      {children}
    </span>
  </div>
)

export default DividerText
