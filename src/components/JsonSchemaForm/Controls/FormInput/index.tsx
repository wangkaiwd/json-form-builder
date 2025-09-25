import { Input } from '@/components/ui/input.tsx'

interface Props {
  field: any
  fieldProps: any
}

const FormInput = (props: Props) => {
  const { field, fieldProps, ...restProps } = props
  return <Input placeholder="shadcn" {...restProps} {...field} {...fieldProps} />
}

export default FormInput
