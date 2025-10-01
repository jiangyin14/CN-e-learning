import { defineConfig } from 'vitepress'
import mdItCustomAttrs from 'markdown-it-custom-attrs'

export default defineConfig({
  title: '电教委员指南',
  description: '教你如何做一名优秀的电教委员',
  
  head: [
    ['link', { rel: 'icon', href: 'https://i.p-i.vip/88/20250924-68d3e5db2b1f4.png' }],
    ['link', { rel: "stylesheet", href: "https://cdn.jsdmirror.com/npm/@fancyapps/ui/dist/fancybox.css" }],
    ['script', { src: "https://cdn.jsdmirror.com/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
  ],
  
  markdown: {
    config: (md) => {
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
      })
    }
  },

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: 'Getting Started', link: '/guide/' }
          ]
        },
        {
          text: '常见错误',
          items: [
            { text: '电脑软键盘无法输入字符', link: '/guide/the-soft-keyboard-cannot-type' },
            { text: 'Windows常见蓝屏错误代码', link: '/guide/bugcheck-codes' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TEHS-TECH/CN-e-learning' }
    ],

    footer: {
      message: '根据 CC-BY-NC-SA 4.0 许可发布',
      copyright: '版权所有 © 2025 电教委员指南'
    },

    search: {
      provider: 'local'
    }
  },

  appearance: true,
  lastUpdated: true
})