import type { JsonSchema } from '@/types/schema.ts'

export const jobApplicationSchema: JsonSchema = {
  defaultValues: {},
  nodes: [
    {
      type: 'input',
      name: 'fullName',
      label: '姓名',
      description: '请输入您的真实姓名',
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
      label: '邮箱',
      description: '请输入您的联系邮箱',
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
      name: 'phone',
      label: '手机号码',
      description: '请输入您的手机号码',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        placeholder: '请输入手机号码',
        type: 'tel',
      },
    },
    {
      type: 'input',
      name: 'position',
      label: '应聘职位',
      description: '您要应聘的职位',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        placeholder: '请输入应聘职位',
        type: 'text',
      },
    },
    {
      type: 'radio',
      name: 'experience',
      label: '工作经验',
      description: '您的工作经验年限',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        options: [
          {
            label: '应届毕业生',
            value: 'fresh_graduate',
          },
          {
            label: '1-3年',
            value: '1-3_years',
          },
          {
            label: '3-5年',
            value: '3-5_years',
          },
          {
            label: '5-10年',
            value: '5-10_years',
          },
          {
            label: '10年以上',
            value: '10+_years',
          },
        ],
      },
    },
    {
      type: 'radio',
      name: 'education',
      label: '学历',
      description: '您的最高学历',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        options: [
          {
            label: '高中及以下',
            value: 'high_school',
          },
          {
            label: '专科',
            value: 'associate',
          },
          {
            label: '本科',
            value: 'bachelor',
          },
          {
            label: '硕士',
            value: 'master',
          },
          {
            label: '博士',
            value: 'phd',
          },
        ],
      },
    },
    {
      type: 'radio',
      name: 'workType',
      label: '工作类型偏好',
      description: '您偏好的工作类型',
      formItemProps: {
        rules: {
          required: true,
        },
      },
      fieldProps: {
        options: [
          {
            label: '全职',
            value: 'full_time',
          },
          {
            label: '兼职',
            value: 'part_time',
          },
          {
            label: '远程工作',
            value: 'remote',
          },
          {
            label: '实习',
            value: 'internship',
          },
        ],
      },
    },
    {
      type: 'input',
      name: 'expectedSalary',
      label: '期望薪资',
      description: '您的期望薪资（月薪，单位：元）',
      formItemProps: {
        rules: {
          required: false,
        },
      },
      fieldProps: {
        placeholder: '请输入期望薪资',
        type: 'number',
      },
    },
  ],
}
