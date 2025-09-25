import type { JsonSchema } from '@/types/schema'

export const basicSchema: JsonSchema = {
  defaultValues: {},
  nodes: [
    {
      type: 'radio',
      name: '1',
      label: 'Test',
      description: 'This is a test',
      formItemProps: {
        name: 'radioKey',
        label: 'Test',
        rules: {
          required: true,
        },
      },
      fieldProps: {
        options: [
          {
            label: 'Option 1',
            value: 'option1',
          },
          {
            label: 'Option 2',
            value: 'option2',
          },
        ],
      },
    },
  ],
}
