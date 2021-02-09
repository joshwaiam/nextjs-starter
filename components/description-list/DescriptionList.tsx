import { ReactNode } from 'react'

export interface CommonDescriptionListProps {
  children: ReactNode | ReactNode[]
  className?: string
}

export interface DescriptionListProps extends CommonDescriptionListProps {
  divideColor?: string
}

/**
 * Primary component for creating a description list <dl> with Tailwind
 * 
 * @param {string}                      props.className       Overrides component className with your own.
 * @param {string}                      props.divideColor     Default value: 'divide-gray-200'
 *                                                            
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
  divideColor = 'divide-gray-200',
}: DescriptionListProps) => (
  <dl className={className || `divide-y ${divideColor}`}>{children}</dl>
)

export default DescriptionList
