# JSON Schema Form Builder 文档

## 概述

这是一个基于 JSON Schema 的动态表单构建器，支持通过 JSON 配置来生成表单。系统支持多种表单控件类型，并提供了灵活的验证和样式配置。

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

### 用户注册表单

```json
{
  "defaultValues": {
    "gender": "male",
    "accountType": "personal"
  },
  "nodes": [
    {
      "type": "input",
      "name": "username",
      "label": "用户名",
      "description": "请输入您的用户名",
      "formItemProps": {
        "rules": {
          "required": "用户名不能为空",
          "minLength": {
            "value": 3,
            "message": "用户名至少3个字符"
          },
          "maxLength": {
            "value": 20,
            "message": "用户名不能超过20个字符"
          }
        }
      },
      "fieldProps": {
        "placeholder": "请输入用户名",
        "type": "text"
      }
    },
    {
      "type": "input",
      "name": "email",
      "label": "邮箱地址",
      "description": "请输入您的邮箱地址",
      "formItemProps": {
        "rules": {
          "required": "邮箱地址不能为空",
          "pattern": {
            "value": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
            "message": "请输入有效的邮箱地址"
          }
        }
      },
      "fieldProps": {
        "placeholder": "请输入邮箱地址",
        "type": "email"
      }
    },
    {
      "type": "input",
      "name": "password",
      "label": "密码",
      "description": "请设置您的密码",
      "formItemProps": {
        "rules": {
          "required": "密码不能为空",
          "minLength": {
            "value": 6,
            "message": "密码至少6位"
          }
        }
      },
      "fieldProps": {
        "placeholder": "请输入密码",
        "type": "password"
      }
    },
    {
      "type": "radio",
      "name": "gender",
      "label": "性别",
      "description": "请选择您的性别",
      "formItemProps": {
        "rules": {
          "required": "请选择性别"
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
    },
    {
      "type": "radio",
      "name": "accountType",
      "label": "账户类型",
      "description": "请选择您的账户类型",
      "formItemProps": {
        "rules": {
          "required": "请选择账户类型"
        }
      },
      "fieldProps": {
        "options": [
          {
            "label": "个人用户",
            "value": "personal"
          },
          {
            "label": "企业用户",
            "value": "business"
          }
        ]
      }
    }
  ]
}
```

## 最佳实践

### 1. 字段命名

- 使用有意义的字段名称，如 `username`、`email` 等
- 避免使用数字或特殊字符开头
- 保持命名一致性

### 2. 标签和描述

- `label`: 简洁明了的字段标签
- `description`: 提供额外的帮助信息，指导用户填写

### 3. 验证规则

- 为重要字段添加必填验证
- 根据字段类型添加格式验证
- 提供友好的错误提示信息

### 4. 默认值

- 在 `defaultValues` 中为需要预填充的字段设置默认值
- 默认值应该是合理的、用户友好的选择

### 5. 选项设计

- 单选框选项应该互斥且完整
- 选项标签要清晰易懂
- 考虑添加"其他"选项以提供灵活性

## 注意事项

1. **字段名唯一性**: 每个 `name` 字段必须在整个表单中唯一
2. **类型匹配**: `fieldProps` 必须与对应的控件类型匹配
3. **验证规则**: 验证规则遵循 react-hook-form 的规范
4. **JSON 格式**: 确保 JSON 格式正确，特别是正则表达式需要转义

## 技术栈

- **React**: UI 框架
- **React Hook Form**: 表单管理和验证
- **Shadcn/ui**: UI 组件库
- **TypeScript**: 类型安全
