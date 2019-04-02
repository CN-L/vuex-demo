<template>
  <div id="app">
    <!-- 初始值 -->
    {{$store.state.count}}
    <!-- 调用mutation中的方法 -->
    <button @click="$store.commit('setcount')">+</button>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
</style>
