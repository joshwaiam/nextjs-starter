import { DescriptionListProps } from './DescriptionList'

export type DescriptionListRowDetailsProps = DescriptionListProps

export const DescriptionListRowDetails = ({
  children,
  className,
}: DescriptionListRowDetailsProps) => (
  <dd
    className={
      className ||
      'mt-1 flex text-sm text-gray-900 dark:text-gray-500 sm:mt-0 sm:col-span-2'
    }
  >
    {children}
  </dd>
)

export default DescriptionListRowDetails
