import type { ControllerRenderProps, FieldValues, RegisterOptions } from 'react-hook-form'

// 基础选项类型
export interface Option {
  label: string
  value: string
  disabled?: boolean
}

// 表单控件类型
export type ControlType = 'input' | 'radio'

// 输入框特定的 fieldProps
export interface InputFieldProps {
  placeholder?: string
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
  maxLength?: number
  minLength?: number
  disabled?: boolean
  readOnly?: boolean
}

// 单选框特定的 fieldProps
export interface RadioFieldProps {
  options: Option[]
  disabled?: boolean
  orientation?: 'horizontal' | 'vertical'
}

// 联合类型：所有可能的 fieldProps
export type FieldProps = 
  | InputFieldProps 
  | RadioFieldProps 

// 表单项属性
export interface FormItemProps {
  rules?: RegisterOptions<FieldValues, string>
}

// 表单节点定义
export interface FormNode {
  type: ControlType
  name: string
  label: string
  description?: string
  formItemProps: FormItemProps
  fieldProps: FieldProps
}

// 特定类型的表单节点
export interface InputFormNode extends Omit<FormNode, 'type' | 'fieldProps'> {
  type: 'input'
  fieldProps: InputFieldProps
}

export interface RadioFormNode extends Omit<FormNode, 'type' | 'fieldProps'> {
  type: 'radio'
  fieldProps: RadioFieldProps
}

// JSON Schema 结构
export interface JsonSchema {
  defaultValues: Record<string, any>
  nodes: FormNode[]
}

// 表单控件组件的 Props 接口
export interface FormControlProps<T extends FieldProps = FieldProps> {
  field: ControllerRenderProps<FieldValues, string>
  fieldProps: T
}

// 控件映射类型
export type ControlComponent = React.ComponentType<FormControlProps<any>>

// 控件注册映射
export interface ControlsMap {
  [key: string]: ControlComponent
}

// 控件管理器接口
export interface IControlsManager {
  register(key: ControlType, control: ControlComponent): void
  getControl(key: ControlType): ControlComponent | undefined
  getControls(): ControlComponent[]
}
