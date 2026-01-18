# Nuxt MCP 服务器配置指南

## 什么是 Nuxt MCP？

Nuxt 官方提供的 MCP (Model Context Protocol) 服务器，可以让 AI 助手直接访问 Nuxt 文档和相关功能。

## 配置步骤

### 1. 在 Claude Desktop 中配置

在你的 Claude Desktop 配置文件中添加以下配置：

**macOS/Linux**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "nuxt": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://nuxt.com/mcp"
      ]
    }
  }
}
```

### 2. 重启 Claude Desktop

保存配置文件后，重启 Claude Desktop 即可使用 Nuxt MCP 服务器。

## 本地测试

你可以在项目目录中运行以下命令测试 MCP 连接：

```bash
npx mcp-remote https://nuxt.com/mcp
```

看到 "Proxy established successfully" 表示连接成功。

## 功能

通过 Nuxt MCP，AI 助手可以：
- 🔍 访问最新的 Nuxt 文档
- 📚 获取 API 参考
- 💡 提供最佳实践建议
- 🛠️ 帮助解决 Nuxt 相关问题

## 已安装的依赖

```json
{
  "devDependencies": {
    "mcp-remote": "^0.1.37"
  }
}
```

## 相关链接

- [Nuxt 官方文档](https://nuxt.com)
- [MCP 协议文档](https://modelcontextprotocol.io)
- [Nuxt MCP 服务器](https://nuxt.com/mcp)
