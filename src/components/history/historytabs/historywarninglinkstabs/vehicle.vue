<template>
    <el-row class="pie-bg">
        <div id="vehiclepie" :style="{width: '100%', height: '320px'}"></div>
    </el-row>
</template>

<script>
export default {
  name: 'vehicle',
  data () {
    return {
        
    }
  },
  mounted(){
    this.drawPie();
  },
  methods: {

    drawPie(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('vehiclepie'));
        // 绘制图表
        myChart.setOption({
          tooltip: {},
          grid: {
            // containLabel: false,
          },
          legend: {
            orient: 'horizontal',
            top: '75%',
            textStyle: {
              color: '#333333',
              fontSize: 15,
              fontFamily: 'PingFang',
            },
            data:['小型车','大型车','重型货车','轻型货车','其他'],
          },
          color: ["#9578FF","#2FC7D3","#6785EB","#E14A55","#F39139"],
          series: [
            {
              name:'',
              type:'pie',
              center: ['50%', '40%'],
              radius: ['25%', '35%'],
              avoidLabelOverlap: true,
              label: {
                  normal: {
                      show: true,
                      position: 'outside',
                      color: '#333',
                      fontSize: 18,
                      fontFamily: 'PingFang',
                      formatter:"{d}%"
                  }
              },
              labelLine: {
                  normal: {
                      show: true
                  }
              },
              data:[
                  {value:335, name:'小型车'},
                  {value:310, name:'大型车'},
                  {value:234, name:'重型货车'},
                  {value:135, name:'轻型货车'},
                  {value:1548, name:'其他'}
              ]
            }
          ]
        });


        window.addEventListener("resize", () => { myChart.resize();});
    }
  }

}
</script>
