import { ReactNode } from 'react'

export interface DividerWrapperProps {
  borderColor?: string
  children?: ReactNode
}

export const DividerWrapper = ({
  borderColor = 'border-gray-300 dark:border-gray-600',
  children,
}: DividerWrapperProps) => (
  <div className="relative">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className={`w-full border-t ${borderColor}`}></div>
    </div>
    {children}
  </div>
)

export default DividerWrapper
