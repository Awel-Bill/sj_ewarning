<template>
    <el-row>
      <el-row>
        <p class="title">历史警情</p>
        <el-row class="early-tabs">
          <div class="early-tab-row f-c"> 
            <router-link tag="div" :to="{name: 'yesterday'}" class="history-link"><div class="history-tab f-c" :class="{'early-tab-active': 0 == active}" @click="onTabClick(0)"><p class="early-tab-p" :class="{'early-tab-p-active': 0 == active}">昨日</p></div></router-link>
            <router-link tag="div" :to="{name: 'lastWeek'}" class="history-link"><div class="history-tab f-c" :class="{'early-tab-active': 1 == active}" @click="onTabClick(1)"><p class="early-tab-p" :class="{'early-tab-p-active': 1 == active}">上周</p></div></router-link>
            <router-link tag="div" :to="{name: 'lastMonth'}" class="history-link"><div class="history-tab early-tab-right f-c" :class="{'early-tab-active': 2 == active}" @click="onTabClick(2)"><p class="early-tab-p" :class="{'early-tab-p-active': 2 == active}">上月</p></div></router-link>
          </div>
        </el-row>
      </el-row>

      <router-view></router-view>
        

    </el-row>
</template>
<script>
export default {
  name: 'historyWarning',
  data () {
    return {
      active: 0,
    }
  },
  methods: {
    //tab标签样式切换
    onTabClick(i) {
        this.active = i;
    },
  },
}
</script>
