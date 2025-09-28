# JSON Form Builder

一个基于 JSON Schema 的动态表单构建器，支持通过 JSON 配置生成表单，并集成 AI 能力自动生成表单配置。

## ✨ 特性

- 🚀 **动态表单生成**: 通过 JSON Schema 配置快速生成表单
- 🤖 **AI 驱动**: 集成 AI 服务，根据描述自动生成表单配置
- 📱 **响应式设计**: 基于 Tailwind CSS 的现代化 UI
- 🔧 **类型安全**: 完整的 TypeScript 支持
- 🎨 **组件化**: 可扩展的表单控件系统
- ✅ **表单验证**: 基于 React Hook Form 的强大验证功能

## 🛠️ 技术栈

### Frontend
- **React 19** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **TanStack Router** - 路由管理
- **React Hook Form** - 表单管理
- **Tailwind CSS** - 样式框架
- **Shadcn/ui** - UI 组件库
- **Zod** - 数据验证

### Backend
- **NestJS** - Node.js 框架
- **TypeScript** - 类型安全
- **Axios** - HTTP 客户端
- **Coze API** - AI 服务集成

## 📁 项目结构

```
json-form-builder/
├── apps/
│   ├── frontend/          # React 前端应用
│   │   ├── src/
│   │   │   ├── components/    # 组件
│   │   │   │   ├── JsonSchemaForm/  # 表单组件
│   │   │   │   └── ui/             # UI 组件
│   │   │   ├── schemas/       # 表单配置示例
│   │   │   ├── types/         # 类型定义
│   │   │   └── routes/        # 路由配置
│   │   └── package.json
│   └── backend/           # NestJS 后端应用
│       ├── src/
│       │   ├── modules/
│       │   │   └── ai-form-json/  # AI 表单生成模块
│       │   └── main.ts
│       └── package.json
├── docs/                  # 文档
└── package.json
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 安装依赖

```bash
# 安装项目依赖
pnpm install
```

### 环境配置

1. 在 `apps/backend` 目录下创建 `.env` 文件：

```env
COZE_TOKEN=your_coze_api_token
```

### 启动开发服务器

```bash
# 启动前端开发服务器 (默认端口: 5173)
pnpm dev:fe

# 启动后端开发服务器 (默认端口: 3000)
pnpm dev:be
```

访问 http://localhost:5173 查看应用。

## 📖 使用指南

### 1. 表单配置

通过 JSON Schema 配置表单结构：

```json
{
  "defaultValues": {},
  "nodes": [
    {
      "type": "input",
      "name": "username",
      "label": "用户名",
      "description": "请输入您的用户名",
      "formItemProps": {
        "rules": {
          "required": "用户名不能为空"
        }
      },
      "fieldProps": {
        "placeholder": "请输入用户名",
        "type": "text"
      }
    }
  ]
}
```

### 2. 支持的控件类型

- **input**: 文本输入框（支持 text、email、password、number、tel、url 等类型）
- **radio**: 单选框组

### 3. AI 生成表单

通过后端 API 接口，使用自然语言描述生成表单配置：

```bash
POST /ai-form-json
Content-Type: application/json

{
  "input": "创建一个用户注册表单，包含姓名、邮箱、密码和确认密码字段"
}
```

## 📄 许可证

[ISC License](LICENSE)

## 🔗 相关链接

- [React Hook Form 文档](https://react-hook-form.com/)
- [Shadcn/ui 组件库](https://ui.shadcn.com/)
- [NestJS 文档](https://nestjs.com/)
- [TanStack Router](https://tanstack.com/router)
