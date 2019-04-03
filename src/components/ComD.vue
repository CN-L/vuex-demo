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
import { mapState } from 'vuex';
export default {
  methods: {
    handleClick() {
      // 调用actions
      this.$store.dispatch('setCount');
    }
  },
  computed: {
    ...mapState(['count', 'msg'])
  }
};
</script>
<style>

</style>
