import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form.tsx'
import controlsManager from '@/components/JsonSchemaForm/registerControls.ts'
import type { FormNode } from '@/types/schema'

const FormItemRenderer = (props: FormNode) => {
  const { type, name, label, description, fieldProps, formItemProps } = props
  const ControlComponent = controlsManager.getControl(type)
  if(!ControlComponent) {
    return null
  }
  return (
    <FormField
      name={name}
      {...formItemProps}
      render={({ field }) => (
        <FormItem className="space-y-3">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <ControlComponent field={field} fieldProps={fieldProps}/>
          </FormControl>
          <FormDescription>
            {description}
          </FormDescription>
          <FormMessage/>
        </FormItem>
      )}
    />
  )
}

export default FormItemRenderer
