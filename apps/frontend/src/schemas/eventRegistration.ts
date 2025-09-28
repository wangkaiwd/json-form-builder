import type { JsonSchema } from '@/types/schema.ts'

export const eventRegistrationSchema: JsonSchema = {
  defaultValues: {},
  nodes: [
    {
      type: 'input',
      name: 'participantName',
      label: '参与者姓名',
      description: '请输入参与者的真实姓名',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        placeholder: '请输入姓名',
        type: 'text',
      },
    },
    {
      type: 'input',
      name: 'email',
      label: '邮箱地址',
      description: '用于接收活动通知',
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
      name: 'company',
      label: '公司/组织',
      description: '您所在的公司或组织',
      formItemProps: {
        rules: {
          required: false,
        },
      },
      fieldProps: {
        placeholder: '请输入公司或组织名称',
        type: 'text',
      },
    },
    {
      type: 'radio',
      name: 'ticketType',
      label: '票种选择',
      description: '请选择您要购买的票种',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        options: [
          {
            label: '早鸟票 - ¥299',
            value: 'early_bird',
          },
          {
            label: '标准票 - ¥399',
            value: 'standard',
          },
          {
            label: 'VIP票 - ¥699',
            value: 'vip',
          },
          {
            label: '学生票 - ¥199',
            value: 'student',
          },
        ],
      },
    },
    {
      type: 'radio',
      name: 'attendanceType',
      label: '参会方式',
      description: '您计划如何参加此次活动？',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        options: [
          {
            label: '现场参与',
            value: 'in_person',
          },
          {
            label: '线上参与',
            value: 'online',
          },
          {
            label: '混合参与',
            value: 'hybrid',
          },
        ],
      },
    },
    {
      type: 'radio',
      name: 'dietaryRestrictions',
      label: '饮食要求',
      description: '您是否有特殊的饮食要求？',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        options: [
          {
            label: '无特殊要求',
            value: 'none',
          },
          {
            label: '素食',
            value: 'vegetarian',
          },
          {
            label: '清真',
            value: 'halal',
          },
          {
            label: '过敏（请备注）',
            value: 'allergies',
          },
        ],
      },
    },
    {
      type: 'input',
      name: 'specialRequests',
      label: '特殊需求',
      description: '如有其他特殊需求，请在此说明',
      formItemProps: {
        rules: {
          required: false,
        },
      },
      fieldProps: {
        placeholder: '请输入特殊需求...',
        type: 'text',
      },
    },
  ],
}
