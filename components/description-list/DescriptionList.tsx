import { ReactNode } from 'react'

export interface DescriptionListProps {
  children: ReactNode | ReactNode[]
  className?: string
}

/**
 * Components for creating a DescriptionList with TailwindCSS and Tailwind-UI
 *
 * @example
   <DescriptionList>
     <DescriptionListRow>
      <DescriptionListRowTitle>
        Email
      </DescriptionListRowTitle>
      <DescriptionListRowDetails>
        <DescriptionListRowDetail>
          test@test123.com
        </DescriptionListRowDetail>
        <DescriptionListRowAction>
          <button>Update</button>
        </DescriptionListRowAction>
      </DescriptionListRowDetails>
    </DescriptionListRow>
  </DescriptionList>
 * 
 * @param {object} props
 * @param {ReactNode | ReactNode[]}     props.children
 * @param {string}                      props.className
 */

export const DescriptionList = ({
  children,
  className,
}: DescriptionListProps) => (
  <dl className={className || 'divide-y divide-gray-200'}>{children}</dl>
)

export default DescriptionList
