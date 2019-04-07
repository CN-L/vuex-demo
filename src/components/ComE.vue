<template>
    <div>
        ComE-state
        <br>
        store - state
        {{count}} --- {{msg}}
        <br>
        store -moudle - state
        <!-- {{ this.$store.state.moduleA.name }}
        -- -->
        <!-- {{ this.$store.state.moduleA.age }} -->
        <br>
          <!-- {{ this.$store.state.moduleB.hero }}
          {{ this.$store.state.moduleB.sex}} -->
          <!-- 模块中的state简化 -->
          {{ name }} -- {{age}}
          <br>
          {{ hero }} -- {{sex}}
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState['count', 'msg','name'],
    // module 命名空间 作用就是简化我们访问模块中的成员
    //映射模块a中的成员

    ...mapState('moduleA',['name','age']),
    ...mapState('moduleB',['hero','sex'])

  }
};
</script>
<style>

</style>
