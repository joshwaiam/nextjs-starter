import { DescriptionListProps } from './DescriptionList'

export type DescriptionListRowTitleProps = DescriptionListProps

/**
 * @param {string} colorClasses   Default value: 'text-gray-500 dark:text-gray-400'
 */
export const DescriptionListRowTitle = ({
  className,
  children,
  colorClasses = 'text-gray-500 dark:text-gray-400',
}: DescriptionListRowTitleProps) => (
  <dt className={className || `text-sm font-medium ${colorClasses}`}>
    {children}
  </dt>
)

export default DescriptionListRowTitle
