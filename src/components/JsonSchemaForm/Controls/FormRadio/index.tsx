import { FormControl, FormItem, FormLabel } from '@/components/ui/form.tsx'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.tsx'

interface Props {
  field: any
  fieldProps: any
}

const FormRadio = (props: Props) => {
  const { field, fieldProps } = props
  return (
    <RadioGroup
      onValueChange={field.onChange}
      value={field.value}
      className="flex flex-col"
    >
      {
        fieldProps.options.map((option: any) => {
          const { label, ...radioProps } = option
          return (
            <FormItem key={option.value} className="flex items-center gap-3">
              <FormControl>
                <RadioGroupItem {...radioProps}/>
              </FormControl>
              <FormLabel className="font-normal">
                {option.label}
              </FormLabel>
            </FormItem>
          )
        })
      }
    </RadioGroup>
  )
}

export default FormRadio
