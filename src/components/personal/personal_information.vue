<template>
  <div class="personal-info">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人中心</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/3-1'}">个人信息</el-breadcrumb-item>
    </el-breadcrumb>
<div class="per-info-content">
  <el-row :gutter="20">
    <el-col :span="10" :offset="6">
      <el-form ref="form" :model="form" label-width="80px" class="per-info-form">
        <el-form-item label="上传头像">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :multiple="false">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>

        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.resource">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日">
          <el-col :span="10">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认修改</el-button>
          <el-button>取消</el-button>
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
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
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
  .personal-info
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
   .per-info-content
    background-color white
    box-shadow 0 2px 5px #ccc
    .per-info-form
     padding-top 30px
</style>

