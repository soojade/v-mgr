import Vue from 'vue'
import { Button, Input, Form, FormItem, Message } from 'element-ui'
import '../assets/styles/theme.css' // 自定义主题文件

Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)

Vue.prototype.$message = Message
