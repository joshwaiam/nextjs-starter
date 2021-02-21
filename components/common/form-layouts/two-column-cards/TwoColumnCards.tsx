import { ReactNode } from 'react'

interface TwoColumnCardsProps {
  children: ReactNode | ReactNode[]
  mainClasses?: string
  wrapperClasses?: string
}

export const TwoColumnCards = ({
  children,
  mainClasses = 'sm:p-10 max-w-7xl mx-auto',
  wrapperClasses = 'bg-gray-100 dark:bg-gray-800',
}: TwoColumnCardsProps) => (
  <div className={wrapperClasses}>
    <main className={mainClasses}>{children}</main>
  </div>
)

export default TwoColumnCards
