// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// Vue.use(Vuex);
Vue.config.productionTip = false;
// // vuex创建store
// const store = new Vuex.Store({
//   // 状态（数据）
//   state: {
//     count: 0
//   },
//   // 改变状态
//   mutations: {
//     setcount(state) {
//       state.count++;
//     }
//   }
// });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
