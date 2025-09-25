import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import FormItemRenderer from '@/components/JsonSchemaForm/FormItemRenderer.tsx'
import type { JsonSchema } from '@/types/schema'

interface JsonSchemaFormProps {
  schema?: JsonSchema
  onSubmit: (data: Record<string, any>) => void
}

const JsonSchemaForm = (props: JsonSchemaFormProps) => {
  const { schema, onSubmit } = props
  const form = useForm()

  const renderFormItems = () => {
    return schema?.nodes.map(node => {
      return <FormItemRenderer key={node.name} {...node}/>
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {renderFormItems()}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default JsonSchemaForm
