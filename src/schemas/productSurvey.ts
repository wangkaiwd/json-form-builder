export const productSurveySchema = {
  defaultValues: {},
  nodes: [
    {
      type: 'input',
      name: 'productName',
      label: '产品名称',
      description: '您使用的产品名称',
      formItemProps: {
        name: 'productName',
        label: '产品名称',
        rules: {
          required: true,
        },
      },
      fieldProps: {
        placeholder: '请输入产品名称',
        type: 'text',
      },
    },
    {
      type: 'radio',
      name: 'satisfaction',
      label: '满意度评价',
      description: '您对该产品的整体满意度如何？',
      formItemProps: {
        name: 'satisfaction',
        label: '满意度评价',
        rules: {
          required: true,
        },
      },
      fieldProps: {
        options: [
          {
            label: '非常满意',
            value: 'very_satisfied',
          },
          {
            label: '满意',
            value: 'satisfied',
          },
          {
            label: '一般',
            value: 'neutral',
          },
          {
            label: '不满意',
            value: 'dissatisfied',
          },
          {
            label: '非常不满意',
            value: 'very_dissatisfied',
          },
        ],
      },
    },
    {
      type: 'radio',
      name: 'usageFrequency',
      label: '使用频率',
      description: '您使用该产品的频率是？',
      formItemProps: {
        name: 'usageFrequency',
        label: '使用频率',
        rules: {
          required: true,
        },
      },
      fieldProps: {
        options: [
          {
            label: '每天',
            value: 'daily',
          },
          {
            label: '每周几次',
            value: 'weekly',
          },
          {
            label: '每月几次',
            value: 'monthly',
          },
          {
            label: '很少使用',
            value: 'rarely',
          },
        ],
      },
    },
    {
      type: 'input',
      name: 'suggestions',
      label: '改进建议',
      description: '您对产品有什么改进建议吗？',
      formItemProps: {
        name: 'suggestions',
        label: '改进建议',
        rules: {
          required: false,
        },
      },
      fieldProps: {
        placeholder: '请输入您的建议...',
        type: 'text',
      },
    },
    {
      type: 'radio',
      name: 'recommend',
      label: '推荐意愿',
      description: '您是否愿意向朋友推荐这个产品？',
      formItemProps: {
        name: 'recommend',
        label: '推荐意愿',
        rules: {
          required: true,
        },
      },
      fieldProps: {
        options: [
          {
            label: '非常愿意',
            value: 'definitely',
          },
          {
            label: '可能会',
            value: 'probably',
          },
          {
            label: '不确定',
            value: 'unsure',
          },
          {
            label: '不太可能',
            value: 'unlikely',
          },
          {
            label: '绝对不会',
            value: 'never',
          },
        ],
      },
    },
  ],
}
