import { DescriptionListProps } from './DescriptionList'

export type DescriptionListRowActionProps = DescriptionListProps

export const DescriptionListRowAction = ({
  children,
  className,
}: DescriptionListRowActionProps) => (
  <span className={className || 'ml-4 flex-shrink-0'}>{children}</span>
)

export default DescriptionListRowAction
