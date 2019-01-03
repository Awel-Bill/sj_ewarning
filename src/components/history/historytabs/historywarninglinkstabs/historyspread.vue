<template>
  <el-row>
    <el-row class="map"></el-row>
    <history-spread></history-spread>
  </el-row>
</template>

<script>
import spread from '@/components/tabs/spread'
export default {
  name: 'historySpread',
  components: {
      'history-spread':spread
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




