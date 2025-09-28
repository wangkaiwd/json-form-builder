import type { JsonSchema } from '@/types/schema.ts'

export const userRegistrationSchema: JsonSchema = {
  defaultValues: {},
  nodes: [
    {
      type: 'input',
      name: 'username',
      label: '用户名',
      description: '请输入您的用户名',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        placeholder: '请输入用户名',
        type: 'text',
      },
    },
    {
      type: 'input',
      name: 'email',
      label: '邮箱地址',
      description: '请输入您的邮箱地址',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        placeholder: '请输入邮箱地址',
        type: 'email',
      },
    },
    {
      type: 'input',
      name: 'password',
      label: '密码',
      description: '请设置您的密码',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        placeholder: '请输入密码',
        type: 'password',
      },
    },
    {
      type: 'radio',
      name: 'gender',
      label: '性别',
      description: '请选择您的性别',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        options: [
          {
            label: '男',
            value: 'male',
          },
          {
            label: '女',
            value: 'female',
          },
          {
            label: '其他',
            value: 'other',
          },
        ],
      },
    },
    {
      type: 'radio',
      name: 'accountType',
      label: '账户类型',
      description: '请选择您的账户类型',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        options: [
          {
            label: '个人用户',
            value: 'personal',
          },
          {
            label: '企业用户',
            value: 'business',
          },
        ],
      },
    },
  ],
}
