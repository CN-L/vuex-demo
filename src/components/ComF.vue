<template>
    <div>
        <div v-show="isMain == true">
            <span>公司名称</span>
            <button @click="handleChangeStatus">审核</button>
        </div>
        <div v-show="isMain == false">
          <com-e></com-e>
        </div>
    </div>
</template>
<script>
import ComE from './ComE';
import {mapState} from 'vuex';
export default {
  name: 'ComF',
  data() {
    return {

    };
  },
  computed: {
    ...mapState(['isMain'])
  },
  methods: {
    handleChangeStatus() {
      this.$store.commit('changeStatus', false);
    }
  },
  components: {
    ComE
  }
};
</script>
