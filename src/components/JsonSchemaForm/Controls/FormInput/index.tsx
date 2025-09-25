import { Input } from '@/components/ui/input.tsx'

interface Props {
  field: any
  fieldProps: any
  className?: string
}

const FormInput = (props: Props) => {
  console.log('field', props)
  const { field, fieldProps, className } = props
  return <Input placeholder="shadcn" className={className} {...field} {...fieldProps} />
}

export default FormInput
