import { Field } from 'formik'
import { ReactNode } from 'react'

interface SelectFieldProps
  extends Partial<Omit<HTMLSelectElement, 'children' | 'options'>> {
  children: ReactNode | ReactNode[]
  containerClassName: string
  fieldClassName?: string
  errors: string | string[]
  label: string
  labelClassName?: string
  name: string
}

export const SelectField = ({
  children,
  containerClassName,
  errors,
  fieldClassName = 'mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md',
  label,
  labelClassName = 'block text-sm font-medium text-gray-700',
  name,
  ...fieldProps
}: SelectFieldProps) => (
  <div className={containerClassName}>
    <label htmlFor={name} className={labelClassName}>
      {label}
      {fieldProps.required ? <span className="text-red-500">*</span> : null}
    </label>
    <Field
      as="select"
      name={name}
      id={name}
      className={fieldClassName}
      {...fieldProps}
    >
      {children}
    </Field>
    {errors ? (
      <div className="text-red-500 text-sm font-medium mt-1">{errors}</div>
    ) : null}
  </div>
)

export default SelectField
