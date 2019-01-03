<template>
  <el-row>
    <el-row class="map"></el-row>
    <today-rank></today-rank>
  </el-row>
</template>

<script>
import spread from '@/components/tabs/ranking'
export default {
  name: 'todaySpread',
  components: {
      'today-rank':spread
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




