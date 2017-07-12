<template>
<div class="health-data">
  <el-row>
  <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>健康便携包</el-breadcrumb-item>
    <el-breadcrumb-item :to="{path:'/2-2'}">健康数据</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="head-data-content">
  <el-col :span="3">

    <el-menu default-active="2-2-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
      <router-link to="/2-2-1"><el-menu-item index="2-2-1"><i class="el-icon-menu"></i>心率手环</el-menu-item></router-link>
      <router-link to="/2-2-2"><el-menu-item index="2-2-2"><i class="el-icon-setting"></i>肺活仪</el-menu-item></router-link>
      <router-link to="/2-2-3"> <el-menu-item index="2-2-3"><i class="el-icon-setting"></i>血糖仪</el-menu-item></router-link>
      <router-link to="/2-2-4"><el-menu-item index="2-2-4"><i class="el-icon-setting"></i>血氧仪</el-menu-item></router-link>
      <router-link to="/2-2-5"><el-menu-item index="2-2-5"><i class="el-icon-setting"></i>体脂秤</el-menu-item></router-link>
      <router-link to="/2-2-6"><el-menu-item index="2-2-6"><i class="el-icon-setting"></i>体温计</el-menu-item></router-link>
      <router-link to="/2-2-7"><el-menu-item index="2-2-7"><i class="el-icon-setting"></i>血压计</el-menu-item></router-link>
    </el-menu>
  </el-col>
    <el-col :span="21">
  <div class="data-charts">
    <router-view></router-view>
  </div>
    </el-col>
  </div>
  </el-row>
</div>
</template>
<script type="text/ecmascript-6">
  import ElCol from "element-ui/packages/col/src/col";
  export default{components: {ElCol}}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.health-data
 margin 0 20px
 height 750px
 .el-menu-vertical-demo
  color green
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
</style>

