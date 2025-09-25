import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import FormItemRenderer from '@/components/JsonSchemaForm/FormItemRenderer.tsx'

interface JsonSchemaFormProps {
  schema?: {
    defaultValues: any,
    nodes: any[]
  }
}

const JsonSchemaForm = (props: JsonSchemaFormProps) => {
  const { schema } = props
  const form = useForm({})

  function onSubmit (data: any) {
    console.log('data', data)
  }

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
