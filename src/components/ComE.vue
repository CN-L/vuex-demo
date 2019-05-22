<template>
  <div>
    课程
    <button @click="handleSee">点击查看已购课程</button>
    <button @click="handleClose">关闭</button>
    <com-d v-show="isMain == 2"></com-d>
  </div>
</template>
<script>
import ComD from './ComD';
import {mapState} from 'vuex';
export default {
  name: 'ComE',
  computed: {
    ...mapState(['isMain'])
  },
  methods: {
    handleSee() {
      this.$store.commit('changeStatus', 2);
      console.log(this.isMain);
    },
    // 关闭
    handleClose() {
      this.$store.commit('changeStatus', true);
    }
  },
  components: {
    ComD
  }
};
</script>
<style>

</style>
