# TypeScript React Shadcn UI Demo

这是一个使用 TypeScript、React 和 Shadcn UI 构建的示例项目，用于展示 Shadcn UI 组件库的基本使用方法。

## 项目特点

- 🛠️ 使用 Vite 作为构建工具
- 📝 TypeScript 支持
- 🎨 集成 Shadcn UI 组件库
- 🌗 支持亮色/暗色主题
- 📱 响应式设计

## 功能演示

目前演示了以下组件：

- Button 组件的各种变体：
  - 默认按钮
  - 次要按钮
  - 危险按钮
  - 轮廓按钮
  - 幽灵按钮
  - 链接按钮
- Button 组件的不同尺寸：
  - 小型按钮
  - 默认大小
  - 大型按钮
  - 图标按钮

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI
- Radix UI (Shadcn UI 的底层依赖)

## 开始使用

1. 克隆项目：
```bash
git clone <repository-url>
cd typescript-react-shadcn-demo
```

2. 安装依赖：
```bash
pnpm install
```

3. 启动开发服务器：
```bash
pnpm start
```

4. 打开浏览器访问：
```
http://localhost:5173
```

## 项目结构

```
src/
  ├── components/        # UI 组件
  │   └── ui/
  │       └── button.tsx # Button 组件
  ├── lib/              # 工具函数
  │   └── utils.ts      # 通用工具函数
  ├── App.tsx           # 主应用组件
  ├── main.tsx          # 应用入口
  └── index.css         # 全局样式
```

## 构建生产版本

```bash
pnpm build
```

构建后的文件将生成在 `dist` 目录中。

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可

MIT
