import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '电教委员指南',
  description: '教你如何做一名优秀的电教委员（网站装修中）',
  
  head: [
    ['link', { rel: 'icon', href: 'https://wmimg.com/i/1169/2025/09/68c4fed991a78.png' }]
  ],
  
  // 修改这里：直接指定基础路径
  base: '/',
  
  // 主题配置
  themeConfig: {
    // 导航栏
    nav: [
      { text: '指南', link: '/guide/dev' }
    ],

    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: 'Getting Started', link: '/guide/dev' }
          ]
        }
      ]
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/TEHS-TECH/CN-e-learning' }
    ],

    // 页脚
    footer: {
      message: '根据 MIT 许可发布。',
      copyright: '版权所有 © 2025 天津市实验中学电教委员'
    },

    // 搜索功能
    search: {
      provider: 'local'
    }
  },

  // 外观切换
  appearance: true,

  // 最后更新时间
  lastUpdated: true
})
