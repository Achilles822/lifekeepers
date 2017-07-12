<template>

  <div class="main">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="index-content">
      <div style="border-top: 1px solid #ddd;width: 100%;margin-right: 5%"><b></b></div>
      <el-row>
        <el-col :span="11">
          <div style="border: 1px solid #ddd;margin-left: 5%;margin-top: 30px;height: 300px">
            <ul class="index-ul">
            <li>血压计</li>
            <li>收缩压 0mmHg:
              <el-progress :text-inside="false" :stroke-width="14" :percentage="70" :show-text="false"></el-progress>
            </li>
            <li>舒张压 0mmHg
              <el-progress :text-inside="false" :stroke-width="14" :percentage="50" status="success" :show-text="false"></el-progress>
            </li>
            <li>心率 0bpm
              <el-progress :text-inside="false" :stroke-width="14" :percentage="80" status="exception" :show-text="false"></el-progress>
            </li>
            </ul>
            <div style="margin-top: 30px"><el-button type="text" @click="open1">正常范围值</el-button></div>
          </div>

        </el-col>

        <el-row :gutter="15">
        <el-col :span="11">
          <div style="border: 1px solid #ddd;margin-left: 5%;margin-top: 30px;height: 300px;">
              <div class="grid-content bg-purple">
                <div class="step" style="margin-left: 0px">
                  <div style="margin-top: 20px"><h3>肺活仪</h3></div>
                  <canvas id="canvas1" width="170" height="170"></canvas>
                </div>
                <el-button type="text" @click="open2">正常范围值</el-button>
              </div>

          </div>
        </el-col>
        </el-row>
      </el-row>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">

  require('echarts');
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";



  export default{
    components: {
      ElCol,
      ElRow},
    mounted() {
      //绘制echarts

      var today_readyrun=5000;
      var today_shouldrun=6000;
      var canvas = document.getElementById("canvas1"),
        context = canvas.getContext("2d"),
        cirX = canvas.width/ 2,
        cirY = canvas.height/ 2,
        rad = Math.PI * 2 / today_shouldrun,
        n = 1,
        r = 50;  //半径
      //绘制最外层细圈
      function writeCircle(){
        context.save();         //ve和restore可以保证样式属性只运用于该段canvas元素
        context.beginPath();    //开始路径
        context.strokeStyle = "#5f5f5d";
        context.globalAlpha = 0.3;
        context.lineWidth = 8;
        context.arc(cirX, cirY, r, 0, Math.PI*2, false);      //画一个圆的路径
        context.stroke();       //绘制边框
        context.restore();
      }

      //绘制数据文本
      function writeText(n){
        context.save();
        context.fillStyle = "red";
        context.font = "20px Arial";
        context.fillText(n.toFixed(0),cirX -30 ,cirY+10);
        context.restore();
      }
      //绘制数据文本
      function writeText2(){
        context.save();
        context.fillStyle = "red";
        context.font = "10px Microsoft YaHei";
        context.fillText("血氧饱和度",cirX -30 ,cirY+40);
        context.restore();
      }
      //绘制数据文本
      function writeText3(){
        context.save();
        context.fillStyle = "red";
        context.font = "10px Microsoft YaHei";
        context.fillText("步",cirX +20 ,cirY +7);
        context.restore();
      }
      //绘制绿色内圈
      function writeBlue(n){
        context.save();
        context.strokeStyle = "#2ec34e";
        context.lineWidth = 8;
        context.lineCap="round";
        context.beginPath();
        context.arc(cirX, cirY, r, -Math.PI*1.25,-Math.PI*1.25+ rad * n, false);
        context.stroke();
        context.restore();

      }

      function DreamLoading(){
        //清除所有，重新绘制
        context.clearRect(0,0,canvas.width,canvas.height)
        writeCircle();
        writeText(n);
        writeBlue(n);
//        writeText2();
        writeText3();
        if(n < today_readyrun){
          n= n+50;
        }else {
          n=today_readyrun;
        }
//            setTimeout(DreamLoading,5000);
        requestAnimationFrame(DreamLoading);
      }
      DreamLoading();


    },
    methods: {
      open1() {
        this.$alert('收缩压正常范围：92-129 mmHg '+'\n'+'舒张压正常范围 :64-86 mmHg'+'\n'+ '心率正常范围 :55-117 bpm', '正常范围值', {
          confirmButtonText: '确定',
        });
      },
      open2() {
        this.$alert('收缩压正常范围：92-129 mmHg '+'\n'+'舒张压正常范围 :64-86 mmHg'+'\n'+ '心率正常范围 :55-117 bpm', '正常范围值', {
          confirmButtonText: '确定',
        });
      }
    }

  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .main
    color  black
    margin 20px
    height 700px
    min-height 700px
  .breadcrumb
    background-color white
    box-shadow 0 2px 5px #ccc
    margin 20px 0
    min-height 40px
    display flex
    align-items center
    padding-left 20px

  .index-content
    background-color white
    height 95%
    .step-title
      margin-top 50px
  .blood-pressure
    width 500px
  .blood-charts
    display block
    margin:0 auto
  .blood-title
    padding-top 50px
    text-align center
  .index-ul
    margin 20px 20px 10px 20px
  .index-ul li
    margin 20px
</style>
