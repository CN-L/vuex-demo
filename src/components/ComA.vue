<template>
    <div>
        ComA <br>
        不推荐此写法{{$store.state.count}}
        <br>
        计算属性{{c}}
    </div>
</template>
<script>
export default {
  computed: {
    c() {
      return this.$store.state.count;
    }
  }
};
</script>
