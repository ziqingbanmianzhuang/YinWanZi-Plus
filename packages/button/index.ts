// import Button from './index'
import Button from './src/index.vue';
import { withInstall } from '../withInstall'
//主组件定义注册主组件和子组件的install方法
const YWZButton = withInstall(Button)
export default YWZButton
