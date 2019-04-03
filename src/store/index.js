import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // 状态
  state: {
    count: 0,
    msg: 'hello'
  },
  mutations: {
    add(state) {
      state.count++;
    },
    sub(state) {
      state.count--;
    },
    // 演示mutation的使用
    // 第一个参数是state状态
    // 第二个参数就是载荷 就是一个额外的参数
    setCount(state, payload) {
      state.count = state.count + payload;
    }
  }
});
export default store;
