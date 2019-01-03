// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//echarts
import echarts from 'echarts'

//ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

//css
import './style/index.css'
//font
import './common/font/font.css';

//组件

Vue.use(ElementUI, { locale })
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // components: { App },
    // template: '<App/>'
    render: h => h(App)
})