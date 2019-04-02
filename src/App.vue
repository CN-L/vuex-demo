<template>
  <div id="app">
    <!-- 初始值 -->
    <!-- {{$store.state.count}} -->
    <!-- 调用mutation中的方法 -->
    <button @click="$store.commit('add')">+</button>
    <hr>
    <com-a></com-a>
    <hr>
    <com-b></com-b>
  </div>
</template>

<script>
import ComA from './components/ComA';
import ComB from './components/ComB';
export default {
  name: 'App',
  components: {
    ComA,
    ComB
  }
};
</script>
<style>
</style>
