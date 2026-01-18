
<div align="center">

<h1 align="center">Nuxt-Whois</h1>
<p align="center">一款好用的 Whois 工具，基于 Nuxt 4 构建的一体化全栈应用。</p>

</div>

## 技术栈

- **框架**: [Nuxt 4](https://nuxt.com/) - 全栈 Vue.js 框架
- **运行时**: Vue 3 + Vite
- **服务端**: Nitro (内置)
- **包管理**: pnpm

## 项目结构

```
Nuxt-Whois/
├── app/              # 前端应用入口
├── server/           # 服务端 API 路由
├── public/           # 静态资源
├── components/       # Vue 组件（待创建）
├── pages/            # 页面路由（待创建）
├── composables/      # 组合式函数（待创建）
└── nuxt.config.ts    # Nuxt 配置
```

## 开发指南

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

开发服务器将在 `http://localhost:3000` 启动

### 构建生产版本

```bash
pnpm build
```

### 预览生产构建

```bash
pnpm preview
```

## 功能规划

- [ ] Whois 查询功能
- [ ] 用户界面设计
- [ ] 管理后台
- [ ] API 接口开发

## 免责声明

本项目开源仅供学习使用，不得用于任何违法用途，否则后果自负，与本人无关。使用请保留项目地址谢谢。

## License

本项目遵循 [GPL-3.0 协议](./LICENSE) 许可证。
