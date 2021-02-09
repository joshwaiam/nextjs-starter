import { CommonDescriptionListProps } from './DescriptionList'

export interface DescriptionListRowDetailsProps
  extends CommonDescriptionListProps {
  textColor?: string
  textColorDark?: string
  textSize?: string
}

/**
 * @param {string} textColor          Default: 'text-gray-900'
 * @param {string} textColorDark      Default: 'dark:text-gray-500'
 * @param {string} textSize           Default: 'text-sm'
 */
export const DescriptionListRowDetails = ({
  children,
  className,
  textColor = 'text-gray-900',
  textColorDark = 'dark:text-gray-500',
  textSize = 'text-sm',
}: DescriptionListRowDetailsProps) => (
  <dd
    className={
      className ||
      `mt-1 sm:mt-0 flex sm:col-span-2 ${textSize} ${textColor} ${textColorDark}`
    }
  >
    {children}
  </dd>
)

export default DescriptionListRowDetails
