# JSON Schema Form Builder 文档

## 概述

这是一个基于 JSON Schema 的动态表单构建器，支持通过 JSON 配置来生成表单。系统支持多种表单控件类型，并提供了灵活的验证和样式配置。

## 技术栈

- **React**: UI 框架
- **React Hook Form**: 表单管理和验证
- **Shadcn/ui**: UI 组件库
- **TypeScript**: 类型安全

## Schema 结构

### 基础结构

```typescript
interface JsonSchema {
  defaultValues: Record<string, any>
  nodes: FormNode[]
}
```

### 表单节点 (FormNode)

每个表单项都是一个 `FormNode`，包含以下属性：

```typescript
interface FormNode {
  type: ControlType                // 控件类型
  name: string                     // 字段名称（唯一标识）
  label: string                    // 显示标签
  description?: string             // 描述文本（可选）
  formItemProps: FormItemProps     // 表单项属性
  fieldProps: FieldProps          // 控件特定属性
}
```

## 支持的控件类型

### 1. 输入框 (input)

**控件类型**: `"input"`

**支持的输入类型**:
- `text` - 文本输入
- `email` - 邮箱输入
- `password` - 密码输入
- `number` - 数字输入
- `tel` - 电话号码输入
- `url` - URL 输入

**fieldProps 配置**:
```typescript
interface InputFieldProps {
  placeholder?: string        // 占位符文本
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  maxLength?: number         // 最大长度
  minLength?: number         // 最小长度
  disabled?: boolean         // 是否禁用
  readOnly?: boolean         // 是否只读
}
```

**示例**:
```json
{
  "type": "input",
  "name": "username",
  "label": "用户名",
  "description": "请输入您的用户名",
  "formItemProps": {
    "rules": {
      "required": "请输入用户名"
    }
  },
  "fieldProps": {
    "placeholder": "请输入用户名",
    "type": "text",
    "maxLength": 20,
    "minLength": 3
  }
}
```

### 2. 单选框 (radio)

**控件类型**: `"radio"`

**fieldProps 配置**:
```typescript
interface RadioFieldProps {
  options: Option[]                              // 选项列表
  disabled?: boolean                             // 是否禁用
  orientation?: 'horizontal' | 'vertical'        // 排列方向（暂未实现）
}

interface Option {
  label: string      // 显示文本
  value: string      // 选项值
  disabled?: boolean // 是否禁用此选项
}
```

**示例**:
```json
{
  "type": "radio",
  "name": "gender",
  "label": "性别",
  "description": "请选择您的性别",
  "formItemProps": {
    "rules": {
      "required": true
    }
  },
  "fieldProps": {
    "options": [
      {
        "label": "男",
        "value": "male"
      },
      {
        "label": "女",
        "value": "female"
      },
      {
        "label": "其他",
        "value": "other"
      }
    ]
  }
}
```

## 表单验证规则

通过 `formItemProps.rules` 配置验证规则，基于 react-hook-form 的验证规则：

```typescript
interface FormItemProps {
  rules?: {
    required?: boolean | string              // 必填验证
    minLength?: number | { value: number, message: string }
    maxLength?: number | { value: number, message: string }
    min?: number | { value: number, message: string }
    max?: number | { value: number, message: string }
    pattern?: RegExp | { value: RegExp, message: string }
  }
}
```

**常用验证示例**:

```json
{
  "formItemProps": {
    "rules": {
      "required": "此字段为必填项",
      "minLength": {
        "value": 6,
        "message": "密码至少6位"
      },
      "pattern": {
        "value": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
        "message": "请输入有效的邮箱地址"
      }
    }
  }
}
```

## 完整示例
<details>
<summary>食堂满意度调查问卷</summary>

```json
{
  "defaultValues": {
    "visitFrequency": "daily",
    "overallSatisfaction": "satisfied"
  },
  "nodes": [
    {
      "type": "input",
      "name": "customerName",
      "label": "姓名",
      "description": "请输入您的姓名（可选）",
      "formItemProps": {
        "rules": {
          "required": false,
          "maxLength": {
            "value": 20,
            "message": "姓名不能超过20个字符"
          }
        }
      },
      "fieldProps": {
        "placeholder": "请输入您的姓名",
        "type": "text"
      }
    },
    {
      "type": "input",
      "name": "contactPhone",
      "label": "联系电话",
      "description": "方便我们跟进您的建议（可选）",
      "formItemProps": {
        "rules": {
          "required": false,
          "pattern": {
            "value": "^1[3-9]\\d{9}$",
            "message": "请输入有效的手机号码"
          }
        }
      },
      "fieldProps": {
        "placeholder": "请输入手机号码",
        "type": "tel"
      }
    },
    {
      "type": "radio",
      "name": "customerType",
      "label": "您的身份",
      "description": "请选择您的身份类型",
      "formItemProps": {
        "rules": {
          "required": "请选择您的身份"
        }
      },
      "fieldProps": {
        "options": [
          {
            "label": "学生",
            "value": "student"
          },
          {
            "label": "教师",
            "value": "teacher"
          },
          {
            "label": "职工",
            "value": "staff"
          },
          {
            "label": "访客",
            "value": "visitor"
          }
        ]
      }
    },
    {
      "type": "radio",
      "name": "visitFrequency",
      "label": "用餐频率",
      "description": "您多久来食堂用餐一次？",
      "formItemProps": {
        "rules": {
          "required": "请选择用餐频率"
        }
      },
      "fieldProps": {
        "options": [
          {
            "label": "每天都来",
            "value": "daily"
          },
          {
            "label": "每周2-3次",
            "value": "weekly_2_3"
          },
          {
            "label": "每周1次",
            "value": "weekly_1"
          },
          {
            "label": "偶尔来",
            "value": "occasionally"
          },
          {
            "label": "第一次来",
            "value": "first_time"
          }
        ]
      }
    },
    {
      "type": "radio",
      "name": "favoriteWindow",
      "label": "最喜欢的窗口",
      "description": "您最常在哪个窗口用餐？",
      "formItemProps": {
        "rules": {
          "required": "请选择窗口"
        }
      },
      "fieldProps": {
        "options": [
          {
            "label": "川菜窗口",
            "value": "sichuan"
          },
          {
            "label": "粤菜窗口",
            "value": "cantonese"
          },
          {
            "label": "面食窗口",
            "value": "noodles"
          },
          {
            "label": "快餐窗口",
            "value": "fast_food"
          },
          {
            "label": "素食窗口",
            "value": "vegetarian"
          },
          {
            "label": "西式简餐",
            "value": "western"
          }
        ]
      }
    },
    {
      "type": "radio",
      "name": "overallSatisfaction",
      "label": "整体满意度",
      "description": "您对食堂的整体满意度如何？",
      "formItemProps": {
        "rules": {
          "required": "请选择满意度"
        }
      },
      "fieldProps": {
        "options": [
          {
            "label": "非常满意",
            "value": "very_satisfied"
          },
          {
            "label": "满意",
            "value": "satisfied"
          },
          {
            "label": "一般",
            "value": "neutral"
          },
          {
            "label": "不满意",
            "value": "dissatisfied"
          },
          {
            "label": "非常不满意",
            "value": "very_dissatisfied"
          }
        ]
      }
    },
    {
      "type": "radio",
      "name": "foodQuality",
      "label": "菜品质量评价",
      "description": "您对菜品质量的评价",
      "formItemProps": {
        "rules": {
          "required": "请评价菜品质量"
        }
      },
      "fieldProps": {
        "options": [
          {
            "label": "很好，口味佳",
            "value": "excellent"
          },
          {
            "label": "还不错",
            "value": "good"
          },
          {
            "label": "一般般",
            "value": "average"
          },
          {
            "label": "需要改善",
            "value": "needs_improvement"
          },
          {
            "label": "很不好",
            "value": "poor"
          }
        ]
      }
    },
    {
      "type": "radio",
      "name": "priceLevel",
      "label": "价格水平评价",
      "description": "您觉得食堂的价格如何？",
      "formItemProps": {
        "rules": {
          "required": "请评价价格水平"
        }
      },
      "fieldProps": {
        "options": [
          {
            "label": "很实惠",
            "value": "very_affordable"
          },
          {
            "label": "合理",
            "value": "reasonable"
          },
          {
            "label": "稍贵",
            "value": "slightly_expensive"
          },
          {
            "label": "太贵了",
            "value": "too_expensive"
          }
        ]
      }
    },
    {
      "type": "radio",
      "name": "serviceQuality",
      "label": "服务质量评价",
      "description": "您对工作人员服务态度的评价",
      "formItemProps": {
        "rules": {
          "required": "请评价服务质量"
        }
      },
      "fieldProps": {
        "options": [
          {
            "label": "服务很好，态度友善",
            "value": "excellent"
          },
          {
            "label": "服务不错",
            "value": "good"
          },
          {
            "label": "服务一般",
            "value": "average"
          },
          {
            "label": "服务有待提升",
            "value": "needs_improvement"
          },
          {
            "label": "服务很差",
            "value": "poor"
          }
        ]
      }
    },
    {
      "type": "radio",
      "name": "environment",
      "label": "用餐环境评价",
      "description": "您对食堂用餐环境的评价",
      "formItemProps": {
        "rules": {
          "required": "请评价用餐环境"
        }
      },
      "fieldProps": {
        "options": [
          {
            "label": "环境很好，干净整洁",
            "value": "excellent"
          },
          {
            "label": "环境不错",
            "value": "good"
          },
          {
            "label": "环境一般",
            "value": "average"
          },
          {
            "label": "环境需要改善",
            "value": "needs_improvement"
          },
          {
            "label": "环境很差",
            "value": "poor"
          }
        ]
      }
    },
    {
      "type": "input",
      "name": "suggestions",
      "label": "意见建议",
      "description": "您对食堂有什么建议或意见吗？",
      "formItemProps": {
        "rules": {
          "required": false,
          "maxLength": {
            "value": 500,
            "message": "建议内容不能超过500个字符"
          }
        }
      },
      "fieldProps": {
        "placeholder": "请输入您的宝贵建议...",
        "type": "text"
      }
    }
  ]
}
```
</details>

## 其它资源

* [最佳实践](./docs/best-practice.md)