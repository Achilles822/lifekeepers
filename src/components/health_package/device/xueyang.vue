<template>
  <div class="xueyang">
    <div id="charts-xueyang" :style="{width: '700px', height: '500px'}" class="charts-xueyang"></div>
  </div>
</template>
<script type="text/ecmascript-6">

  require('echarts');
  export default{
    mounted(){
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('charts-xueyang'))
      // 绘制图表
      myChart.setOption({
        title: {
          subtext: '血氧图'
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
          min: 90,
          max: 100,
          type: 'value',
          axisLabel: {
            formatter: '{value} %'
          }
        },
        series: [
          {
            name:'血氧(%)',
            type:'line',
            data:[97, 92, 95, 91, 96, 94, 93],
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
  .xueyang
    background-color white
    margin 0 0 0 20px
    box-shadow 0 2px 5px #ccc
    height 750px
    .charts-xueyang
      display block
      margin:0 auto
</style>



