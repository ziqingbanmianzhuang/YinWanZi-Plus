// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import YinWanZiPlus from '../../../packages/index'
// import { Demo } from '../vitepress/components/index.vue'
import { VPDemo } from '../vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // 注册element-plus
    app.use(ElementPlus, { locale: zhCn, })
    //注册element-plus图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
    app.component('YinWanZiPlus', YinWanZiPlus)
    // app.use(YinWanZiPlus)
    // app.component('Demo', Demo)
    app.component('Demo', VPDemo)

  }
} satisfies Theme
