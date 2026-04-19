import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Yay+ Docs",
  description: "一个简单易用的 Arch Linux 包管理器。",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/favicon.ico',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/start' },
      { text: '其他', link: '/other/about' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '快速开始',
          items: [
            { text: '概述', link: '/guide/start' },
            { text: '安装', link: '/guide/install' },
            { text: '配置', link: '/guide/config' },
            { text: '使用', link: '/guide/usage' }
          ]
        }
      ],
      '/other/': [
        {
            text: '其他',
            items: [
              { text: '关于', link: '/other/about' },
              { text: '开发计划', link: '/other/plans' }
            ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Colin130716/yay-plus' }
    ],
    footer: {
      message: 'Released under the GPLv3 License.',
      copyright: '© 2024-2026 Yay+ All Rights Reserved.'
    }
  }
})