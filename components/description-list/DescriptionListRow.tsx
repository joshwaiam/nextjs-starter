import { DescriptionListProps } from './DescriptionList'

export type DescriptionListRowProps = DescriptionListProps

export const DescriptionListRow = ({
  className,
  children,
}: DescriptionListRowProps) => (
  <div
    className={
      className || 'py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5'
    }
  >
    {children}
  </div>
)

export default DescriptionListRow
