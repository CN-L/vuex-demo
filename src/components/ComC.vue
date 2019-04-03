<template>
    <div>
        <button @click="handle">按钮</button>
        {{count}}
        <br>
        {{msg}}
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['count', 'msg'])
  },
  methods: {
    handle() {
      this.setCount(6);
    //   等同于this['setCount'](6)
    },
    // 函数 返回一个对象
    // 会简化mutations的调用 生成setCount方法
    ...mapMutations(['setCount'])
    // handle() {
    // 让state中的count，点一次按钮count+5
    // commit的第二种写法,5为参数
    //   this.$store.commit('setCount', 5);
    // },
  }
};
</script>
<style>

</style>
