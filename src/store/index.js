import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  // 状态
  state: { count:
         0
  },
  mutations: {
    add(state) {
      state.count++;
    },
    sub(state) {
      state.count--;
    }
  }
});
export default store;
