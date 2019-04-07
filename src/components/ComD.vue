<template>
    <div>
        actions
       <button @click="handleClick">异步调用</button>
       <br>
       {{count}}
       <br>
       {{msg}}
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
  methods: {
    handleClick() {
      // 异步调用action方法 1
      // this.$store.dispatch('setCount', 1);

      // actions的简化调用
      // 配合...mapActions使用写法2
      // this.setCount(1); 写法2.1
      this['setCount'](5); // 写法2.2
    },
    // this.setCount ==> this.dispatch('setCount')
    // actions的映射
    ...mapActions(['setCount'])
  },
  computed: {
    ...mapState(['count', 'msg'])
  }
};
</script>
<style>

</style>
