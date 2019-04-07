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
      // 不建议在mutations中执行异步操作改变状态
      // 模拟异步执行 给状态赋值
      // setTimeout(() => {
      //   state.count = state.count + payload;
      // });
      state.count = state.count + payload;
    }
  },
  actions: {
    setCount(context, payload) {
      // context拥有的属性和方法 跟store一样
      // action中调用mutations,更改状态

      // action中异步调用
      setTimeout(() => {
        context.commit('setCount', payload);
      }, 2000);
    }
  }
});
export default store;
