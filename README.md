![电教委员指南](https://github.com/TEHS-TECH/CN-e-learning/blob/main/docs/images/banner.png)

![CC BY-NC-SA 4.0](https://camo.githubusercontent.com/0157aea42bfc560de71cdb5847ae8350e92d19b5da400c4d4529d5eb54559f0e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d43435f42592d2d4e432d2d53415f342e302d626c75652e737667)

## 项目介绍

CN-e-learning 是一个专注于帮助电教委员提升工作能力的指南项目。本指南由顶尖电教委编撰，内容涵盖多种计算机知识、错误应对方法等，旨在助力每一位电教委员成为优秀的技术支持角色。

## 主要特点

- **内容优质**：由经验丰富的电教委精心编写，确保内容的专业性和实用性
- **覆盖面广**：包含多种计算机知识、设备操作指南及常见错误应对方法
- **多校联盟**：汇集全国多所学校的电教委经验，提供学校专属信息（筹备中）
- **易于阅读**：文档结构清晰，语言简洁明了，便于快速查阅和学习

## 快速开始

### 本地运行

1. 克隆仓库

    ```bash
    git clone https://github.com/TEHS-TECH/CN-e-learning.git
    cd CN-e-learning
    ```

2. 安装依赖

    ```bash
    npm install
    ```

3. 启动开发服务器

    ```bash
    npm run docs:dev
    ```

4. 在浏览器中访问 `http://localhost:5173` 查看文档

### 构建生产版本

```bash
npm run docs:build
```

构建后的文件将位于 `docs/.vitepress/dist` 目录下，可部署到任何静态文件服务器。

## 项目结构

- `docs/`：文档内容目录
  - `index.md`：首页内容
  - `guide/`：指南内容目录
    - `dev.md`：开发相关指南
- `.vitepress/`：VitePress 配置目录
- `package.json`：项目依赖和脚本配置

## 技术栈

- [VitePress](https://vitepress.dev/)：静态站点生成器，基于 Vue 3
- Markdown：文档内容编写格式

## 贡献指南

欢迎全国各学校的电教委员贡献经验和知识，具体贡献方式请关注项目后续更新的贡献指南。

## 许可证

本项目采用 [CC BY-NC-ND 4.0 许可证](LICENSE)。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=TEHS-TECH/CN-e-learning&type=Date)](https://www.star-history.com/#TEHS-TECH/CN-e-learning&Date)
