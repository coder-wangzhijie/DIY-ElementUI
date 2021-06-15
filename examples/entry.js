import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './app.vue'

// 公用组件
// 引用
import MainHeader from './components/header.vue'
import MainFooter from './components/footer.vue'
// 注册为全局组件
Vue.component('main-header', MainHeader)
Vue.component('main-footer', MainFooter)

const routes = [

]
const router = new VueRouter({
  mode: 'hash',
  routes,
  base: __dirname
})

new Vue({
  ...Index,
  router,
}).$mount('#app')