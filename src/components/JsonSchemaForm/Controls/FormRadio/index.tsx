import { FormControl, FormItem, FormLabel } from '@/components/ui/form.tsx'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.tsx'
import type { FormControlProps, RadioFieldProps, Option } from '@/types/schema'

const FormRadio = (props: FormControlProps<RadioFieldProps>) => {
  const { field, fieldProps } = props
  return (
    <RadioGroup
      onValueChange={field.onChange}
      value={field.value}
      className="flex flex-col"
    >
      {
        fieldProps.options.map((option: Option) => {
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
