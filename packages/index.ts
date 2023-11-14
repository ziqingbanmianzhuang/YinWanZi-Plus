import type { Component, App } from 'vue'

import YWZLayoutPage from './layout-page'
import YWZLayoutPageItem from './laylout-page-item'
import YWZQuery from './query-condition'
import YWZTable from './table'
import YWZForm from './form'
import YWZSelect from './select'
import SelectTable from './select-table'
import YWZDetail from './detail'
import YWZButton from './button'
import YWZStepWizard from './step-wizard'
import YWZTimerBtn from './timer-btn'
import YWZModuleForm from './module-form'
import YWZAdaptivePage from './adaptive-page'
import YWZDatePicker from './date-picker'

//存储组件列表
const components: {
    [propName: string]: Component
} = {
    YWZLayoutPage,
    YWZLayoutPageItem,
    YWZQuery,
    YWZTable,
    YWZForm,
    YWZSelect,
    SelectTable,
    YWZDetail,
    YWZButton,
    YWZStepWizard,
    YWZTimerBtn,
    YWZModuleForm,
    YWZAdaptivePage,
    YWZDatePicker
}

//插件声明,申明所有插件
//插件注册,在vue项目的入口文件中,通过app.use(插件)进行注册
const installComponents: any = (app) => {
    for (const key in components) {
        app.component(key, components[key])
    }
}
//vue插件,Install:每个插件都有一个Install方法,参数,是通过vue.createApp创建的app实例
//每个插件按需注册使用
const install: any = (app: any, router?: any) => {
    installComponents(app);
}

//按需引入
export {
    YWZLayoutPage,
    YWZLayoutPageItem,
    YWZQuery,
    YWZTable,
    YWZForm,
    YWZSelect,
    SelectTable,
    YWZDetail,
    YWZButton,
    YWZStepWizard,
    YWZTimerBtn,
    YWZModuleForm,
    YWZAdaptivePage,
    YWZDatePicker

}

//导出的对象需要具有install方法,才可以被vue.use方法安装
export default {
    install
}