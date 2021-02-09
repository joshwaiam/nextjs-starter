import { ReactNode } from 'react'

export interface DescriptionListProps {
  children: ReactNode | ReactNode[]
  className?: string
  colorClasses?: string
}

/**
 * Primary component for creating a description list <dl> with Tailwind
 * 
 * @param {ReactNode | ReactNode[]}     props.children
 * @param {string}                      props.className       Overrides component className with your own.
 * @param {string}                      props.colorClasses    Color specific TailwindCSS classes to apply.
 *                                                            Default value: 'divide-gray-200'
 * 
 * @example
   <DescriptionList>
     <DescriptionListRow>
      <DescriptionListRowTitle>
        User
      </DescriptionListRowTitle>
      <DescriptionListRowDetails>
        <DescriptionListRowDetail>
          John Doe
        </DescriptionListRowDetail>
        <DescriptionListRowDetail>
          JohnDoe186
        </DescriptionListRowDetail>
        <DescriptionListRowAction>
          <button>Update</button>
        </DescriptionListRowAction>
      </DescriptionListRowDetails>
    </DescriptionListRow>
  </DescriptionList>
 */
export const DescriptionList = ({
  children,
  className,
  colorClasses = 'divide-gray-200',
}: DescriptionListProps) => (
  <dl className={className || `divide-y ${colorClasses}`}>{children}</dl>
)

export default DescriptionList
