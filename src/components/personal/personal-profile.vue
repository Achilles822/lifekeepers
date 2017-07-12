<template>
  <div class="personal-profile">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人中心</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/3-2'}">个人档案</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="per-pro-content">
      <el-row :gutter="20">
        <el-col :span="10" :offset="6">
          <el-form ref="form" :model="form" label-width="80px" class="per-pro-form">
            <el-form-item label="身高(CM)">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="体重(KG)">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="臀围(CM)">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="腰围(CM)">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="胸围(CM)">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <span>说明：请完善个人信息，以便获取更精确的测试结果</span>
            <el-form-item class="item-top">
              <el-button type="primary" @click="onSubmit">确定</el-button>
            </el-form-item>
          </el-form>

        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data (){
      return {
        form: {
          height: '',
          weight: '',
          hip: '',
          waistline: '',
          delivery: false,
          type: [],
          bust: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .personal-profile
    margin 20px
    height 700px

  .breadcrumb
    background-color white
    box-shadow 0 2px 5px #ccc
    margin 20px 0
    min-height 40px
    display flex
    align-items center
    padding-left 20px
  .item-top
    margin-top 10px
  .per-pro-content
    background-color white
    box-shadow 0 2px 5px #ccc
    .per-pro-form
      padding-top 30px
</style>
