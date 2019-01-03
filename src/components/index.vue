<template>
  <div>
    <el-row>
      <router-link :to="{name: 'todayWarning'}"><el-button>今日警情</el-button></router-link>
      <router-link :to="{name: 'earlyWarning'}"><el-button>警情预警</el-button></router-link>
      <router-link :to="{name: 'historyWarning'}"><el-button>历史警情</el-button></router-link>
    </el-row>  
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
