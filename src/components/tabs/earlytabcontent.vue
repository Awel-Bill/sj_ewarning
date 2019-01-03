<template>
    <el-row class="early-BG">
        <el-row class="el">
          <el-row class="f-l el-m">
            <div class="module-block"></div>
            <p class="module-title">时段分布</p>
          </el-row>
          <el-row class="early-chart">
            <div id="sdChart" :style="{width: '100%', height: '250px'}"></div>
          </el-row>
          <div class="early-line"></div>
        </el-row>

        <el-row class="el">
          <el-row class="f-l el-m">
            <div class="module-block"></div>
            <p class="module-title">时段预警</p>
          </el-row>

          <el-row class="map"></el-row>
          <el-row class="table">
            <el-row class="table-title-li f-a">
                <p class="table-left-title">高发道路排名TOP5</p>
                <p class="table-right-title">单位(起)</p>
            </el-row>

            <el-row class="table-li f-a">
                <div class="table-content-left f-l">
                <div class="no-num no-num-1 f-c">1</div>
                <p class="content-title">岳阳街道</p>
                </div>
                <div class="table-content-right">
                <p class="content-num">3,204</p>
                </div>
            </el-row>

            <el-row class="table-li f-a">
                <div class="table-content-left f-l">
                <div class="no-num no-num-2 f-c">2</div>
                <p class="content-title">广富林街道</p>
                </div>
                <div class="table-content-right">
                <p class="content-num">2,197</p>
                </div>
            </el-row>
            
            <el-row class="table-li f-a">
                <div class="table-content-left f-l">
                <div class="no-num no-num-3 f-c">3</div>
                <p class="content-title">中山街道</p>
                </div>
                <div class="table-content-right">
                <p class="content-num">2,084</p>
                </div>
            </el-row>
            
            <el-row class="table-li f-a">
                <div class="table-content-left f-l">
                <div class="no-num no-num-4 f-c">4</div>
                <p class="content-title">方松街道园中路</p>
                </div>
                <div class="table-content-right">
                <p class="content-num">1,950</p>
                </div>
            </el-row>
        
          </el-row>
        </el-row>
    </el-row>
</template>

<script>
export default {
  name: 'earlytab',
  data() {
    return {
      
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {

    drawLine(){
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
                  color: '#FE4455',
                  borderWidth: 0,
                },
                lineStyle: {
                  color: '#FE4455',
                  width: 2,
                },
                data: chartdata
            },{
                name: '今年时段平均值',
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
