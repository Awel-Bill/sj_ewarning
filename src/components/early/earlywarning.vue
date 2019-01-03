<template>
    <el-row>
      <el-row class="early-bg">
        <p class="title">警情预警</p>
        <p class="title-2">注：早高峰为7-9时，晚高峰为17-19时，平峰为9-17时， 夜间为19-7时。</p>
        <el-row class="early-tabs">
          <div class="early-tab-row f-c">
            <router-link tag="div" :to="{name: 'all'}" class="early-link"><div class="early-tab f-c" :class="{'early-tab-active': 0 == active}" @click="onTabClick(0)"><p class="early-tab-p" :class="{'early-tab-p-active': 0 == active}">全部</p></div></router-link>
            <router-link tag="div" :to="{name: 'morningPeak'}" class="early-link"><div class="early-tab f-c" :class="{'early-tab-active': 1 == active}" @click="onTabClick(1)"><p class="early-tab-p" :class="{'early-tab-p-active': 1 == active}">早高峰</p></div></router-link>
            <router-link tag="div" :to="{name: 'eveningPeak'}" class="early-link"><div class="early-tab f-c" :class="{'early-tab-active': 2 == active}" @click="onTabClick(2)"><p class="early-tab-p" :class="{'early-tab-p-active': 2 == active}">晚高峰</p></div></router-link>
            <router-link tag="div" :to="{name: 'flatPeak'}" class="early-link"><div class="early-tab f-c" :class="{'early-tab-active': 3 == active}" @click="onTabClick(3)"><p class="early-tab-p" :class="{'early-tab-p-active': 3 == active}">平峰</p></div></router-link>
            <router-link tag="div" :to="{name: 'night'}" class="early-link"><div class="early-tab early-tab-right f-c" :class="{'early-tab-active': 4 == active}" @click="onTabClick(4)"><p class="early-tab-p" :class="{'early-tab-p-active': 4 == active}">夜间</p></div></router-link>
          </div>
        </el-row>
      </el-row>

      <router-view></router-view>
        

    </el-row>
</template>
<script>
export default {
  name: 'earlyWarning',
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
