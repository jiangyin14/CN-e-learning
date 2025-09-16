import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '电教委员指南',
  description: '教你如何做一名优秀的电教委员（网站装修中）',

  head: [
    ['link', { rel: 'icon', href: 'https://wmimg.com/i/1169/2025/09/68c4fed991a78.png' }]
  ],

  base: '/',

  themeConfig: {
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
        },
        {
          text: '常见错误',
          items: [
            { text: '电脑软键盘无法输入字符', link: '/guide/the-soft-keyboard-cannot-type' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TEHS-TECH/CN-e-learning' }
    ],

    footer: {
      message: '根据 MIT 许可发布。',
      copyright: '版权所有 © 2025 天津市实验中学电教委员'
    },

    search: {
      provider: 'local'
    }
  },

  appearance: true,
  lastUpdated: true
})