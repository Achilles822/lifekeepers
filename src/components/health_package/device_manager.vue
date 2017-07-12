<template>
<div class="device-manager">
  <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>健康便携包</el-breadcrumb-item>
    <el-breadcrumb-item :to="{path:'/2-1'}">设备管理</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="device-content">
    <el-row>
      <el-col :span="4" :offset="2" style="margin-top: 50px">
        <el-card :body-style="{ padding: '0px' }">
          <div style="position: relative">
          <img src="../../assets/device/BloodPressure.png" class="image">
          <div class="img_check1"><img src="../../assets/device/check.png" alt="" class="check"></div></div>
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="success" class="choose" @click="choose1">选择</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1" style="margin-top: 50px">
        <el-card :body-style="{ padding: '0px' }">
          <div style="position: relative">
            <img src="../../assets/device/BloodPressure.png" class="image">
            <div class="img_check2"><img src="../../assets/device/check.png" alt="" class="check"></div></div>
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="success" class="choose" @click="choose2">选择</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1" style="margin-top: 50px">
        <el-card :body-style="{ padding: '0px' }">
          <div style="position: relative">
            <img src="../../assets/device/BloodPressure.png" class="image">
            <div class="img_check3"><img src="../../assets/device/check.png" alt="" class="check"></div></div>
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="success" class="choose" @click="choose3">选择</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1" style="margin-top: 50px">
        <el-card :body-style="{ padding: '0px' }">
          <div style="position: relative">
            <img src="../../assets/device/BloodPressure.png" class="image">
            <div class="img_check4"><img src="../../assets/device/check.png" alt="" class="check"></div></div>
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="success" class="choose" @click="choose4">选择</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="2" style="margin-top: 50px">
        <el-card :body-style="{ padding: '0px' }">
          <div style="position: relative">
            <img src="../../assets/device/BloodPressure.png" class="image">
            <div class="img_check5"><img src="../../assets/device/check.png" alt="" class="check"></div></div>
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="success" class="choose" @click="choose5">选择</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1" style="margin-top: 50px">
        <el-card :body-style="{ padding: '0px' }">
          <div style="position: relative">
            <img src="../../assets/device/BloodPressure.png" class="image">
            <div class="img_check6"><img src="../../assets/device/check.png" alt="" class="check"></div></div>
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="success" class="choose" @click="choose6">选择</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1" style="margin-top: 50px">
        <el-card :body-style="{ padding: '0px' }">
          <div style="position: relative">
            <img src="../../assets/device/BloodPressure.png" class="image">
            <div class="img_check7"><img src="../../assets/device/check.png" alt="" class="check"></div></div>
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="success" class="choose" @click="choose7">选择</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" :offset="1" style="margin-top: 50px">
        <el-card :body-style="{ padding: '0px' }">
          <div style="position: relative">
            <img src="../../assets/device/BloodPressure.png" class="image">
            <div class="img_check8"><img src="../../assets/device/check.png" alt="" class="check"></div></div>
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <el-button type="success" class="choose" @click="choose8">选择</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</div>
</template>
<script type="text/ecmascript-6">
export default{
  methods: {
    choose1() {
      var choose1=document.getElementsByClassName("img_check1");
      for(var i=0;i<choose1.length;i++){
          if (choose1[i].style.display !='block'){
            choose1[i].style.display='block';
          } else {
            choose1[i].style.display='none';
          }
      }
    },
    choose2() {
      var choose2=document.getElementsByClassName("img_check2");
      for(var i=0;i<choose2.length;i++){
        if (choose2[i].style.display !='block'){
          choose2[i].style.display='block';
        } else {
          choose2[i].style.display='none';
        }
      }
    },
    choose3() {
    var choose3=document.getElementsByClassName("img_check3");
    for(var i=0;i<choose3.length;i++){
      if (choose3[i].style.display !='block'){
        choose3[i].style.display='block';
      } else {
        choose3[i].style.display='none';
      }
    }
  },
    choose4() {
      var choose4=document.getElementsByClassName("img_check4");
      for(var i=0;i<choose4.length;i++){
        if (choose4[i].style.display !='block'){
          choose4[i].style.display='block';
        } else {
          choose4[i].style.display='none';
        }
      }
    },
    choose5() {
      var choose5=document.getElementsByClassName("img_check5");
      for(var i=0;i<choose5.length;i++){
        if (choose5[i].style.display !='block'){
          choose5[i].style.display='block';
        } else {
          choose5[i].style.display='none';
        }
      }
    },
    choose6() {
      var choose6=document.getElementsByClassName("img_check6");
      for(var i=0;i<choose6.length;i++){
        if (choose6[i].style.display !='block'){
          choose6[i].style.display='block';
        } else {
          choose6[i].style.display='none';
        }
      }
    },
    choose7() {
      var choose7=document.getElementsByClassName("img_check7");
      for(var i=0;i<choose7.length;i++){
        if (choose7[i].style.display !='block'){
          choose7[i].style.display='block';
        } else {
          choose7[i].style.display='none';
        }
      }
    },
    choose8() {
      var choose8=document.getElementsByClassName("img_check8");
      for(var i=0;i<choose8.length;i++){
        if (choose8[i].style.display !='block'){
          choose8[i].style.display='block';
        } else {
          choose8[i].style.display='none';
        }
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

.device-manager
 margin 20px
 height 750px
 .breadcrumb
  background-color white
  box-shadow 0 2px 5px #ccc
  margin 20px 0
  min-height 40px
  display flex
  align-items center
  padding-left 20px
 .device-content
  padding-top 30px
  background-color white
  height auto
  .time
     font-size 13px
     color #999
  .bottom
     margin-top 13px
     line-height 12px
  .button
     padding 0
     float right


  .image
     width 100%
     display block


  .clearfix:before,
  .clearfix:after
     display table
     content ""


  .clearfix:after
     clear both
  .img_check1
    position absolute
    right 25px
    top 20px
    display none
  .img_check2
     position absolute
     right 25px
     top 20px
     display none
  .img_check3
    position absolute
    right 25px
    top 20px
    display none
  .img_check4
    position absolute
    right 25px
    top 20px
    display none
  .img_check5
    position absolute
    right 25px
    top 20px
    display none
  .img_check6
    position absolute
    right 25px
    top 20px
    display none
  .img_check7
    position absolute
    right 25px
    top 20px
    display none
  .img_check8
    position absolute
    right 25px
    top 20px
    display none





</style>

