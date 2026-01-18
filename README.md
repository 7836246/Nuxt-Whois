# Nuxt-Whois (Nuxt 4 重构版)

基于最新 **Nuxt 4** 架构重构的高性能 Whois 查询工具。  
本项目旨在复刻并升级 v1 版本的所有功能，同时采用现代化标准的 Nuxt 4 目录结构（`app/` 模式）以获得更好的性能和开发体验。

## ✨ 核心特性

- **⚡️ Nuxt 4 驱动**：利用最新的 Nuxt 4 引擎，提供极致的 SSR 性能和更快的冷启动速度。
- **🏗 标准化架构**：采用 `app/` 目录结构，实现应用层与配置层的完美分离，结构更清晰。
- **🎨 界面升级**：(开发中) 计划继承并优化 v1 的响应式界面。
- **🛠 功能完备**：(移植中)
    - 🔍 **Whois 查询**：域名所有者、注册商、过期时间等详细信息。
    - 🌐 **DNS 查询**：深度挖掘域名解析记录。
    - 🌗 **主题切换**：支持深色/浅色模式。
    - 🌍 **多语言**：国际化支持。

## 🛠 技术栈

- **核心框架**: [Nuxt 4.x](https://nuxt.com) (Latest)
- **语言**: TypeScript
- **包管理**: pnpm
- **UI 组件**: [Nuxt UI](https://ui.nuxt.com)
- **CSS 框架**: [Tailwind CSS](https://tailwindcss.com)

## 📂 目录结构

本项目遵循 Nuxt 4 的现代目录规范：

```bash
Nuxt-Whois/
├── app/                  # 📱 前端应用层
│   ├── pages/            #    页面路由 (File-based Routing)
│   ├── components/       #    自动导入组件
│   ├── composables/      #    组合式函数
│   └── assets/           #    样式与资源
├── server/               # ⚡️ 服务端层 (Nitro)
│   ├── api/              #    Server API 路由
│   └── routes/           #    服务端路由
├── public/               # 📦 静态文件
├── nuxt.config.ts        # ⚙️ 项目配置文件
└── package.json          # 📦 依赖管理
```

## 🚀 快速开始 (Quick Start)

### 1. 环境准备

确保您的环境满足以下要求：
- **Node.js**: 20.x 或更高版本
- **包管理器**: pnpm (推荐)

### 2. 安装依赖

```bash
pnpm install
```

### 3. 启动开发服务器

```bash
pnpm dev
```
访问 `http://localhost:3000` 查看效果。

### 4. 构建生产版本

```bash
pnpm build
```

## 📝 历史版本 (v1)

v1 版本基于 Nuxt 3 + NaiveUI 构建，包含完整的前后台功能。
历史代码请查看 Git 分支 `v1`。

## 📄 免责声明

本项目开源仅供学习使用，不得用于任何违法用途，否则后果自负。使用请保留项目地址。
