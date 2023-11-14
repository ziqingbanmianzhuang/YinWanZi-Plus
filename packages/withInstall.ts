//导入类型而不是值,因为直接写Mian.install=()=>{}会报错,因为comp没有Install方法,所有需要从vue中引入plugin类型,断言comp的类型为T & Plugin
import type { App, Plugin } from 'vue'
//main:主组件,extra:子组件
//组件外部使用use的时候执行install,将组件注册为全局组件
//withinstall方法处理以下组件类型问题
//ts类型中的&类型表示交集,两个类型都拥有的类型
type SFCWithInstall<T> = T & Plugin
let withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
    //主组件定义注册主组件和子组件的install方法
    (main as SFCWithInstall<T>).install = (app: App) => {
        //?? 和 || 的意思有点相似，但是又有点区别,??相较||比较严谨, 当值等于0的时候||就把他给排除了，但是?? 不会
        for (const comp of [main, ...Object.values(extra ?? {})]) {
            app.component(comp.name, comp);
        }
    }

    //如果有子组件,那么把子组件存在主组件中
    if (extra) {
        for (const [compName, comp] of Object.entries(extra)) {
            //使用类型断言来指定一个更加具体的类型
            //ts内置Rcord类型用来描述一个对象，这个对象的属性都具有相同的类型
            (main as Record<string, any>)[compName] = comp;
        }
    }
    //返回主组件
    //断言为一个更加具体的类型
    return main as SFCWithInstall<T> & E
}


export {
    withInstall
}