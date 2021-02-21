import { Field } from 'formik'

interface InputFieldProps extends Partial<HTMLInputElement> {
  containerClassName: string
  fieldClassName?: string
  errors: string
  label: string
  labelClassName?: string
  name: string
}

export const InputField = ({
  containerClassName,
  errors,
  fieldClassName = 'mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 text-gray-700 rounded-md',
  label,
  labelClassName = 'block text-sm font-medium text-gray-700 dark:text-gray-300',
  name,
  ...fieldProps
}: InputFieldProps) => (
  <div className={containerClassName}>
    <label htmlFor={name} className={labelClassName}>
      {label}{' '}
      {fieldProps.required ? <span className="text-red-500">*</span> : null}
    </label>
    <Field name={name} id={name} className={fieldClassName} {...fieldProps} />
    {errors ? (
      <div className="text-red-500 text-sm font-medium mt-1">{errors}</div>
    ) : null}
  </div>
)

export default InputField
