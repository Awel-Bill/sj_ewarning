<template>
    <history-tab-content></history-tab-content>
</template>

<script>
import historytab from '@/components/tabs/historytabcontent'
export default {
  name: 'yesterday',
  components: {
      'history-tab-content':historytab
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