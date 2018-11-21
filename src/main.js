// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */

// import Vuex from 'vuex'
// Vue.use(Vuex)
// const store = new Vuex.Store({
//   state: {
//     city: '上海'
//   },
//   getter: {
//     doneTodos: (state, getters) => {
//       return state.todos.filter(todo => todo.done)
//     }
//   },
//   mutations: {
//     increment (state, payload) {
//       state.count++
//     }
//   },
//   actions: {
//     addCount(context) {
//       // 可以包含异步操作
//       // context 是一个与 store 实例具有相同方法和属性的 context 对象
//     }
//   }
// })

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
