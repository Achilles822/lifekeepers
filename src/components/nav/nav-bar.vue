<template>
  <el-row class="tac">
  <el-col :span="24">
    <el-menu default-active="0" class="el-menu-vertical" @open="handleOpen" @close="handleClose">
      <router-link to="/"><el-menu-item index="0"><i class="el-icon-menu"></i>首页</el-menu-item></router-link>

      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>健康便携包</template>
          <router-link to="/2-1">
          <el-menu-item index="2-1">设备管理</el-menu-item>
          </router-link>
          <router-link to="/2-2">
            <el-menu-item index="2-2">健康数据</el-menu-item></router-link>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>健康档案</template>
          <router-link to="/4-1">
            <el-menu-item index="4-1">个人病历</el-menu-item>
          </router-link>
          <router-link to="/2-2">
            <el-menu-item index="2-2">体检报告</el-menu-item></router-link>
      </el-submenu>

        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message"></i>个人中心</template>
            <router-link to="/3-1">
              <el-menu-item index="3-1">个人信息</el-menu-item>
            </router-link>
            <router-link to="/3-2">
            <el-menu-item index="3-2">个人档案</el-menu-item>
            </router-link>
            <router-link to="/3-3">
              <el-menu-item index="3-3">修改密码</el-menu-item>
            </router-link>
            <router-link to="/3-4">
              <el-menu-item index="3-4">意见反馈</el-menu-item>
            </router-link>
        </el-submenu>

      <el-submenu index="4">
        <template slot="title"><i class="el-icon-message"></i>家庭组</template>
        <router-link to="/5-1">
          <el-menu-item index="5-1">家庭成员</el-menu-item>
        </router-link>
        <router-link to="/5-2">
          <el-menu-item index="5-2">新增成员</el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>
  </el-col>
  </el-row>

</template>
<script type="text/ecmascript-6">

  export default {
    data() {
      return {

      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }


  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .el-menu-vertical
    margin-top 25px
    box-shadow: 0px 2px 5px #ccc;
</style>

