// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import navbar from '@/components/nav/nav-bar'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import echarts from 'echarts'
import hnavbar from '@/components/health_package/health_data'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component('navbar', navbar)
Vue.component('hnavbar',hnavbar)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)

})
