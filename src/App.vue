<template>
  <div id="app">
    <!-- 初始值 -->
    <!-- {{$store.state.count}} -->
    <!-- commit用于调用mutation中的方法 两种写法-->
    <button @click="$store.commit('add')">+</button>
    <hr>
    <com-a></com-a>
    <hr>
    <com-b></com-b>
    <hr>
    <com-c></com-c>
  </div>
</template>

<script>
import ComA from './components/ComA';
import ComB from './components/ComB';
import ComC from './components/ComC';
export default {
  name: 'App',
  components: {
    ComA,
    ComB,
    ComC
  }
};
</script>
<style>
</style>
