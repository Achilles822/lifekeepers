<template>
  <div class="xueya-1">
  <div id="charts-xueya" :style="{width: '700px', height: '500px'}" class="charts-xueya"></div>
  </div>
</template>
<script type="text/ecmascript-6">

    require('echarts');
    export default{
         mounted(){
              // 基于准备好的dom，初始化echarts实例
              let myChart = this.$echarts.init(document.getElementById('charts-xueya'))
              // 绘制图表
              myChart.setOption({
                title: {
                  subtext: '血压图'
                },
                tooltip: {
                  trigger: 'axis'
                },
                legend: {
                  data: ['血压变化线']
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
                xAxis: {
                  type: 'category',
                  show: false,
                  boundaryGap: false,
                  data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                  min: 50,
                  max: 160,
                  type: 'value',
                  axisLabel: {
                    formatter: '{value} mmHg'
                  }
                },
                series: [
                  {
                    name: '收缩压(mmHg)',
                    type: 'line',
                    data: [90, 95, 110, 100, 120, 105, 93],
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
                  },
                  {
                    name:'舒张压(mmHg)',
                    type:'line',
                    data:[65, 75, 72, 80, 66, 70, 75],
                    markPoint: {
                      data: [
                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                      ]
                    },
                    markLine: {
                      data: [
                        {type: 'average', name: '平均值'},
                        [{
                          symbol: 'none',
                          x: '90%',
                          yAxis: 'max'
                        }, {
                          symbol: 'circle',
                          label: {
                            normal: {
                              position: 'start',
                              formatter: '最大值'
                            }
                          }
                        }]
                      ]
                    }
                  }
                ]
              });
            }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .xueya-1
    background-color white
    margin 0 0 0 20px
    box-shadow 0 2px 5px #ccc
    height 750px
    .charts-xueya
       display block
       margin:0 auto

</style>

