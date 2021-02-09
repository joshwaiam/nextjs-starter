import { DescriptionListProps } from './DescriptionList'

export type DescriptionListRowDetailsProps = DescriptionListProps

/**
 * @param {string} colorClasses   Default value: 'text-gray-900 dark:text-gray-500'
 */
export const DescriptionListRowDetails = ({
  children,
  className,
  colorClasses = 'text-gray-900 dark:text-gray-500',
}: DescriptionListRowDetailsProps) => (
  <dd
    className={
      className || `mt-1 flex text-sm sm:mt-0 sm:col-span-2 ${colorClasses}`
    }
  >
    {children}
  </dd>
)

export default DescriptionListRowDetails
