<template>
    <el-row>
        <el-row class="el el-m">
          <el-row :gutter="10">
            <el-col :span="12">
              <div class="grid-content">
                <div class="data-icon"><img :src='imgurl1'/></div>
                <div class="data"><p class="data-num">326</p></div>
                <div class="data-name"><p class="data-name-p">警情数量(件)</p></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <div class="data-icon"><img :src='imgurl2'/></div>
                <div class="data"><p class="data-num">80.7</p></div>
                <div class="data-name"><p class="data-name-p">结案率(%)</p></div>
              </div>
            </el-col>
          </el-row>
        </el-row>

        <el-row class="el">
          <el-row class="f-l el-m">
            <div class="module-block"></div>
            <p class="module-title">时段分析</p>
          </el-row>
          <el-row class="chart-bg">
            <div id="sdChart" :style="{width: '100%', height: '250px'}"></div>
          </el-row>
        </el-row>

        <el-row class="el">
          <el-row class="f-l el-m">
            <div class="module-block"></div>
            <p class="module-title">日分布</p>
          </el-row>
          <el-row class="chart-bg">
            <div id="dayChart" :style="{width: '100%', height: '250px'}"></div>
          </el-row>
        </el-row>

        <el-row class="el">
          <el-row class="f-l el-m">
            <div class="module-block"></div>
            <p class="module-title">警情链接</p>
          </el-row>
          <el-row class="tabs">
            <div class="history-tab-row f-t">
              <router-link tag="div" :to="{name: 'historySpread'}"><div class="tab f-c" :class="{'tab-active': 0 == active}" @click="onTabClick(0)"><p class="tab-p">警情分布</p></div></router-link>
              <router-link tag="div" :to="{name: 'historyHighArea'}"><div class="tab f-c" :class="{'tab-active': 1 == active}" @click="onTabClick(1)"><p class="tab-p">高发区域</p></div></router-link>
              <router-link tag="div" :to="{name: 'historyHighRoad'}"><div class="tab f-c" :class="{'tab-active': 2 == active}" @click="onTabClick(2)"><p class="tab-p">高发道路</p></div></router-link>
              <router-link tag="div" :to="{name: 'historyHighCrossing'}"><div class="tab f-c" :class="{'tab-active': 3 == active}" @click="onTabClick(3)"><p class="tab-p">高发路口路段</p></div></router-link>
              <router-link tag="div" :to="{name: 'weather'}"><div class="tab f-c" :class="{'tab-active': 4 == active}" @click="onTabClick(4)"><p class="tab-p">天气分析</p></div></router-link>
              <router-link tag="div" :to="{name: 'vehicle'}"><div class="tab f-c" :class="{'tab-active': 5 == active}" @click="onTabClick(5)"><p class="tab-p">交通方式</p></div></router-link>
            </div>
          </el-row>
          <router-view></router-view>
        </el-row>
    </el-row>
</template>

<script>
import imgurl1 from '@/assets/icon_jrjq_jqsl@3x.png'
import imgurl2 from '@/assets/icon_jrjq_jal@3x.png'
export default {
  name: 'earlytab',
  data() {
    return {
      imgurl1: imgurl1,
      imgurl2: imgurl2,
      active: 0,
    }
  },
  mounted(){
    this.drawsdLine();
    this.drawdayLine();
  },
  methods: {
    
    //tab标签样式切换
    onTabClick(i) {
        this.active = i;
    },

    drawsdLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('sdChart'));
        // 绘制图表
        let dataShadow = [];
        let yMax = 500;
        let dataAxis = ["1时","2时","3时","4时","5时","6时","7时","8时","9时","10时","11时","12时","13时","14时","15时","16时","17时","18时","19时","20时","21时","22时","23时","24时"];
        let chartdata = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220, 123, 125, 220, 213];
        let chartdata2 = [110, 152, 141, 239, 280, 360, 330, 156, 239, 280, 360, 330, 156, 239, 110, 152, 141, 239, 239, 280, 360, 330, 156, 233];
        for (var i = 0; i < chartdata.length; i++) {
          dataShadow.push(yMax);
        }
        myChart.setOption({
            title: {},
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                  lineStyle: {
                    color: 'rgba(99, 176, 255, 0.9)',
                    width: 2,
                  }
                },
                backgroundColor: 'rgba(0, 127, 255, 0.9)',
                textStyle: {
                  color: '#fff',
                fontFamily: "PingFang",
                fontSize: 11
                }
            },
            grid: {
              top: 40,
              left: 50,
              right: 21,
              bottom: 44,
            },
            legend: {
              left: 'right',
              right: 42,
              top: 8,
              textStyle: {
                color: '#8A96A0',
                fontFamily: "PingFang",
                fontSize: 12
              },
              data: ['现时段','今年时段平均值']
            },
            xAxis: {
              axisLine: {
                lineStyle: {
                  color: '#D0DBE7',
                },
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                color: '#637280',
                fontFamily: "PingFang",
                fontSize: 11
              },
              z: 10,
              data: dataAxis
            },
            yAxis: {
              name: "事故数量(次)",
              nameTextStyle: {
                color: '#8A96A0',
                fontFamily: "PingFang",
                fontSize: 12
              },
              axisLine: {
                show: false,
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                color: '#637280',
                fontFamily: "PingFang",
                fontSize: 11
              },
              splitLine: {
                lineStyle: {
                  color: '#D0DBE7',
                  width: 1,
                  type: 'dotted',
                }
              },
            },
            dataZoom: [
                {
                    type: 'inside'
                }
            ],
            series: [{
                name: '现时段',
                type: 'line',
                symbol: 'circle',
                symbolSize: 2,
                itemStyle: {
                  color: '#0077FF',
                  borderWidth: 0,
                },
                lineStyle: {
                  color: '#0077FF',
                  width: 2,
                },
                data: chartdata
            },{
                name: '今年时段平均值',
                type: 'line',
                symbol: 'circle',
                symbolSize: 2,
                itemStyle: {
                  color: '#FE4455',
                  borderWidth: 0,
                },
                lineStyle: {
                  color: '#FE4455',
                  width: 2,
                },
                data: chartdata2
            }]
        });

        // Enable data zoom when user click bar.
        let zoomSize = 6;
        myChart.on('click', function (params) {
            console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
            myChart.dispatchAction({
                type: 'dataZoom',
                startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, chartdata.length - 1)]
            });
        });

        window.addEventListener("resize", () => { myChart.resize();});
    },

    drawdayLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('dayChart'));
          // 绘制图表
          let dataShadow = [];
          let yMax = 500;
          let dataAxis = ["1日","2日","3日","4日","5日","6日","7日","8日","9日","10日","11日","12日","13日","14日","15日","16日","17日","18日","19日","20日","21日","22日","23日","24日"];
          let chartdata = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220, 123, 125, 220, 213];
          let chartdata2 = [110, 152, 141, 239, 280, 360, 330, 156, 239, 280, 360, 330, 156, 239, 110, 152, 141, 239, 239, 280, 360, 330, 156, 233];
          for (var i = 0; i < chartdata.length; i++) {
            dataShadow.push(yMax);
          }
          myChart.setOption({
              title: {},
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    lineStyle: {
                      color: 'rgba(99, 176, 255, 0.9)',
                      width: 2,
                    }
                  },
                  backgroundColor: 'rgba(0, 127, 255, 0.9)',
                  textStyle: {
                    color: '#fff',
                  fontFamily: "PingFang",
                  fontSize: 11
                  }
              },
              grid: {
                top: 40,
                left: 50,
                right: 21,
                bottom: 44,
              },
              legend: {
                left: 'right',
                right: 42,
                top: 8,
                textStyle: {
                  color: '#8A96A0',
                  fontFamily: "PingFang",
                  fontSize: 12
                },
                data: ['日平均','今年日平均值']
              },
              xAxis: {
                axisLine: {
                  lineStyle: {
                    color: '#D0DBE7',
                  },
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  color: '#637280',
                  fontFamily: "PingFang",
                  fontSize: 11
                },
                z: 10,
                data: dataAxis
              },
              yAxis: {
                name: "事故数量(次)",
                nameTextStyle: {
                  color: '#8A96A0',
                  fontFamily: "PingFang",
                  fontSize: 12
                },
                axisLine: {
                  show: false,
                },
                axisTick: {
                  show: false
                },
                axisLabel: {
                  color: '#637280',
                  fontFamily: "PingFang",
                  fontSize: 11
                },
                splitLine: {
                  lineStyle: {
                    color: '#D0DBE7',
                    width: 1,
                    type: 'dotted',
                  }
                },
              },
              dataZoom: [
                  {
                      type: 'inside'
                  }
              ],
              series: [{
                  name: '日平均',
                  type: 'line',
                  symbol: 'circle',
                  symbolSize: 2,
                  itemStyle: {
                    color: '#0077FF',
                    borderWidth: 0,
                  },
                  lineStyle: {
                    color: '#0077FF',
                    width: 2,
                  },
                  data: chartdata
              },{
                  name: '今年日平均值',
                  type: 'line',
                  symbol: 'circle',
                  symbolSize: 2,
                  itemStyle: {
                    color: '#FE4455',
                    borderWidth: 0,
                  },
                  lineStyle: {
                    color: '#FE4455',
                    width: 2,
                  },
                  data: chartdata2
              }]
          });

          // Enable data zoom when user click bar.
          let zoomSize = 6;
          myChart.on('click', function (params) {
              console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
              myChart.dispatchAction({
                  type: 'dataZoom',
                  startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
                  endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, chartdata.length - 1)]
              });
          });

          window.addEventListener("resize", () => { myChart.resize();});
      }
    }
}
</script>
