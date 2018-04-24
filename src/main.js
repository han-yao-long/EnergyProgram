// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//路由
import router from './router'
//element-ui
import ElementUI from 'element-ui'
// 依赖挂载(例: axios)
import Tools from './tools';
Vue.use(Tools);
Vue.use(ElementUI);
// echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
//vuex 
import store from '@/store';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css';
//路由跳转时对其进行判断;
router.beforeEach((to, from, next) => {
    if (to.path=='/login') {  
      next()
    } else {
      if(localStorage.getItem('ms_username')=='admin'){
        next()
      }else{
        next('/login')
      }
    }

})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
