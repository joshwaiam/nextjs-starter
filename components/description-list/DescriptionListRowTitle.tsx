import { DescriptionListProps } from './DescriptionList'

export type DescriptionListRowTitleProps = DescriptionListProps

export const DescriptionListRowTitle = ({
  className,
  children,
}: DescriptionListRowTitleProps) => (
  <dt
    className={
      className || 'text-sm font-medium text-gray-500 dark:text-gray-400'
    }
  >
    {children}
  </dt>
)

export default DescriptionListRowTitle
