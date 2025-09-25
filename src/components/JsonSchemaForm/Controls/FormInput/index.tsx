import { Input } from '@/components/ui/input.tsx'
import type { FormControlProps, InputFieldProps } from '@/types/schema'

const FormInput = (props: FormControlProps<InputFieldProps>) => {
  const { field, fieldProps, ...restProps } = props
  return <Input placeholder="shadcn" {...restProps} {...field} {...fieldProps} />
}

export default FormInput
