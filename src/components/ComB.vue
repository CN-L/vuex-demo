<template>
    <div>
        ComB <br>
        {{$store.state.count}}
        <br>
        计算属性:{{count}}
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  computed: {
    // 演示状态管理mapstate使用
    // mapState,可以帮我们生成计算属性，返回的是对象
    // 帮我们生成了一个计算属性 this.count-->this.$store.state.count
    ...mapState(['count'])
  }
};
</script>
