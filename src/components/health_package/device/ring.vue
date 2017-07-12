<template>
  <div class="ring">
    <div id="charts-ring" :style="{width: '700px', height: '500px'}" class="charts-ring"></div>
  </div>
</template>
<script type="text/ecmascript-6">

    require('echarts');
  export default{
    mounted(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('charts-ring'))
      // 绘制图表
      myChart.setOption({
        title: {
          subtext: '心率图'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:[]
        },
        toolbox: {
          show: false,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis:  {
          show: false,
          type: 'category',
          boundaryGap: false,
          data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            min: 70,
          max: 160,
          type: 'value',
          axisLabel: {
            formatter: '{value} bpm'
          }
        },
        series: [
          {
            name:'心率(bpm)',
            type:'line',
            data:[90, 86, 100, 95, 110, 100, 85],
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }
        ]
      });
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .ring
   background-color white
   margin 0 0 0 20px
   box-shadow 0 2px 5px #ccc
   height 750px
   .charts-ring
     display block
     margin:0 auto
</style>

