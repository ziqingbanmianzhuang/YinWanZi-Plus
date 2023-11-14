import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YinWanZi-Plus",
  description: "encapsulation of  elementPlus",
  lang: 'cn-ZH',
  base: '/yinwanzi/',
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.jpg',
    siteTitle: 'YinWanZi-Plus',
    outline: 3,
    nav: [
      { text: '主页', link: '/' },
      { text: '安装指南', link: '/guide' },
      { text: '基础组件', link: '/components/WanSelect/index.md' },
      { text: 'github', link: 'https://github.com/ziqingbanmianzhuang/YinWanZi-Plus' }
    ],

    sidebar: {
      '/components': [
        {
          text: '常用组件',
          items: [
            {
              text: '下拉选择', link: '/components/WanSelect/index.md'
            },
            {
              text: '详情', link: '/components/WanDetail/index.md'
            },
            {
              text: '按钮', link: '/components/WanButton/index.md'
            },
            {
              text: '日期', link: '/components/WanDatePicker/index.md'
            },
            {
              text: '步骤', link: '/components/WanStepWizard/index.md'
            },
          ]
        },
        {
          text: '复杂组件',
          items: [
            {
              text: '下拉选择表格',
              link: '/components/WanSelectTable/index.md'
            },
            {
              text: '适应页面',
              link: '/components/WanAdaptivePage/index.md'
            },
            {
              text: '条件查询',
              link: '/components/WanQueryCondition/index.md'
            },
            {
              text: '表单',
              link: '/components/WanForm/index.md'
            },
            {
              text: '模块表单',
              link: '/components/WanModuleForm/index.md'
            },
            {
              text: '表格',
              link: '/components/WanTable/index.md'
            }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ziqingbanmianzhuang/YinWanZi-Plus' }
    ],
  },
  markdown: {
    headers: {
      level: [0, 0],
    },
    theme: { light: 'github-light', dark: 'github-dark' },
    // 配置Markdown-it实例。
    config: (md) => mdPlugin(md),
  }
})
