import { ReactNode } from 'react'

interface FormSectionProps {
  bottomDivider?: boolean
  cardClasses?: string
  children: ReactNode | ReactNode[]
  dividerClasses?: string
  subtitle?: string
  subtitleClasses?: string
  title: string
  titleClasses?: string
}

export const FormSection = ({
  bottomDivider = true,
  cardClasses = 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-300',
  children,
  dividerClasses = 'border-t border-gray-200',
  subtitle,
  subtitleClasses = 'mt-1 text-sm text-gray-600 dark:text-gray-500',
  title,
  titleClasses = 'text-xl font-medium leading-6 text-gray-900 dark:text-gray-300',
}: FormSectionProps) => (
  <>
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className={titleClasses}>{title}</h3>
            {subtitle ? <p className={subtitleClasses}>{subtitle}</p> : null}
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className={`${cardClasses} px-4 py-5 sm:p-6`}>
              <div className="grid grid-cols-6 gap-6">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {bottomDivider ? (
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className={dividerClasses}></div>
        </div>
      </div>
    ) : null}
  </>
)

export default FormSection
