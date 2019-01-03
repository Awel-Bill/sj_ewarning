<template>
  <el-row>
    <el-row class="map"></el-row>
    <history-rank></history-rank>
  </el-row>
</template>

<script>
import rank from '@/components/tabs/ranking'
export default {
  name: 'historyHighArea',
  components: {
      'history-rank':rank
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>




