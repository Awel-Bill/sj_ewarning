<template>
    <el-row>
        <el-row class="table">
          <el-row class="table-title-li f-l">
            <div class="new f-c"><p>NEW</p></div>
            <p class="table-left-title">交通事故实时动态</p>
          </el-row>

          <el-row class="table-li f-a">
            <div class="table-content">
              <div class="table-content-top f-l">
                <p class="content-title">西康路</p>
                <p class="content-time">09:15</p>
              </div>
              <div class="table-content-bottom f-t">
                <p class="content-detail">大货车司机疲劳驾驶，行人闯红灯</p>
              </div>
            </div>
            <div class="table-icon no-1 f-c">
              <i class="el-icon-location location"></i>
            </div>
          </el-row>
          
          <el-row class="table-li f-a">
            <div class="table-content">
              <div class="table-content-top f-l">
                <p class="content-title">武宁南路</p>
                <p class="content-time">昨天 20:56</p>
              </div>
              <div class="table-content-bottom f-t">
                <p class="content-detail">路面结冰，驾驶员刹车过急</p>
              </div>
            </div>
            <div class="table-icon no-2 f-c">
              <i class="el-icon-location location"></i>
            </div>
          </el-row>
        </el-row>
    </el-row>
</template>

<script>
export default {
  name: 'spread',
  data () {
    return {
      
    }
  },

}
</script>




