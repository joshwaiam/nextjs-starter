import { DescriptionListProps } from './DescriptionList'

export type DescriptionListRowDetailProps = DescriptionListProps

export const DescriptionListRowDetail = ({
  children,
  className,
}: DescriptionListRowDetailProps) => (
  <span className={className || 'flex-grow'}>{children}</span>
)

export default DescriptionListRowDetail
