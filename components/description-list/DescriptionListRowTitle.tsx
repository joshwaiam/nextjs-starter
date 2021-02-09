import { CommonDescriptionListProps } from './DescriptionList'

export interface DescriptionListRowTitleProps
  extends CommonDescriptionListProps {
  fontWeight?: string
  textColor?: string
  textColorDark?: string
  textSize?: string
}

/**
 * @param {string} fontWeight       Default: 'font-medium'
 * @param {string} textColor        Default: 'text-gray-500'
 * @param {string} textColorDark    Default: 'dark:text-gray-400'
 * @param {string} textSize         Default: 'text-sm'
 */
export const DescriptionListRowTitle = ({
  className,
  children,
  fontWeight = 'font-medium',
  textColor = 'text-gray-500',
  textColorDark = 'dark:text-gray-400',
  textSize = 'text-sm',
}: DescriptionListRowTitleProps) => (
  <dt
    className={
      className || `${textSize} ${fontWeight} ${textColor} ${textColorDark}`
    }
  >
    {children}
  </dt>
)

export default DescriptionListRowTitle
