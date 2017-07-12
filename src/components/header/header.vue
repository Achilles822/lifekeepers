<template>
  <div class="header" style="background-color: #324157">
    <el-row>
      <el-col :span="24">
        <img src="../../assets/logo.png" style="float:left;">
        <div class="grid-content bg-purple-dark grid-position">
          <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">

            <el-menu-item index="1"><i class="el-icon-document"></i>帮助</el-menu-item>
            <el-menu-item index="3-1"><span style="display: flex;align-items: center"><img class="avatar" src="../../assets/photo.jpg" />变形金肛</span></el-menu-item>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">退出</a></el-menu-item>
          </el-menu>
        </div></el-col>
    </el-row>
  </div>
</template>
<script>
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .header
    box-shadow 0 2px 5px #ccc
  .grid-position
    float right
    margin-right 5px
    .avatar
     width 50px
     height 50px
     border-radius 50%
     margin-right 10px
</style>

