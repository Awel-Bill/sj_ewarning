<template>
  <el-row>
    <el-row class="map"></el-row>
    <today-rank></today-rank>
  </el-row>
</template>

<script>
import rank from '@/components/tabs/ranking'
export default {
  name: 'todayHighArea',
  components: {
      'today-rank':rank
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




