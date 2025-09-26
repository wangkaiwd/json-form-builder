import { createFileRoute } from '@tanstack/react-router'
import JsonSchemaForm from '@/components/JsonSchemaForm'
import { basicSchema } from '@/schemas/basic.ts'
import { userRegistrationSchema } from '@/schemas/userRegistration.ts'
import { productSurveySchema } from '@/schemas/productSurvey.ts'
import { jobApplicationSchema } from '@/schemas/jobApplication.ts'
import { eventRegistrationSchema } from '@/schemas/eventRegistration.ts'
import MonacoEditor from '@monaco-editor/react'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Code2, FileText } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
})

// todo: 优化代码
const schemas = {
  basic: { name: '基础示例', schema: basicSchema },
  userRegistration: { name: '用户注册表单', schema: userRegistrationSchema },
  productSurvey: { name: '产品满意度调查', schema: productSurveySchema },
  jobApplication: { name: '求职申请表单', schema: jobApplicationSchema },
  eventRegistration: { name: '活动报名表单', schema: eventRegistrationSchema },
}

function App () {
  const [selectedKey, setSelectedKey] = useState<keyof typeof schemas>('userRegistration')
  const [currentSchema, setCurrentSchema] = useState(schemas[selectedKey].schema)

  const handleSchemaChange = (schemaKey: string) => {
    const key = schemaKey as keyof typeof schemas
    setSelectedKey(key)
    const newSchema = schemas[key].schema
    setCurrentSchema(newSchema)
  }

  const onSubmit = (data: any) => {
    console.log('data', data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            AI 可视化 JSON Schema 表单构建器
          </h1>
          <p className="text-slate-600 text-lg">
            可视化构建和预览动态表单
          </p>
        </div>

        {/* Schema 选择器 */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white rounded-lg shadow-sm border p-4 w-full max-w-md">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              选择表单示例
            </label>
            <Select value={selectedKey} onValueChange={handleSchemaChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="请选择表单示例"/>
              </SelectTrigger>
              <SelectContent>
                {Object.entries(schemas).map(([key, { name }]) => (
                  <SelectItem key={key} value={key}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* JSON 编辑器 */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="border-b bg-slate-50 px-6 py-4">
              <h2 className="text-lg font-semibold text-slate-800 flex items-center">
                <Code2 className="w-5 h-5 mr-2 text-slate-600"/>
                JSON Schema 配置
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                编辑表单的JSON配置文件
              </p>
            </div>
            <div className="h-[600px]">
              <MonacoEditor
                height="100%"
                language="json"
                value={JSON.stringify(currentSchema, null, 2)}
                onChange={(code) => {
                  if (code) {
                    setCurrentSchema(JSON.parse(code))
                  } else {
                    setCurrentSchema({ defaultValues: {}, nodes: [] })
                  }
                }}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  lineNumbers: 'on',
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  theme: 'vs-light',
                  padding: { top: 16, bottom: 16 },
                  fontFamily: 'JetBrains Mono, Monaco, "Courier New", monospace',
                }}
              />
            </div>
          </div>

          {/* 表单预览 */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="border-b bg-slate-50 px-6 py-4">
              <h2 className="text-lg font-semibold text-slate-800 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-slate-600"/>
                表单预览
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                实时预览生成的表单
              </p>
            </div>
            <div className="p-6 h-[600px] overflow-y-auto">
              <div className="max-w-md mx-auto">
                <JsonSchemaForm schema={currentSchema} onSubmit={onSubmit}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
