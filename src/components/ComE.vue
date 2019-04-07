<template>
    <div>
        ComE-state
        <br>
        store - state
        {{count}} --- {{msg}}
        <br>
        store -moudle - state
        {{ this.$store.state.moduleA.name }}
        --
        {{ this.$store.state.moduleA.age }}
        <br>
          {{ this.$store.state.moduleB.hero }}
          {{ this.$store.state.moduleB.sex}}
          <!-- 模块中的state简化 -->
          {{ }}
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState['count', 'msg','name']
    // module
  }
};
</script>
<style>

</style>
