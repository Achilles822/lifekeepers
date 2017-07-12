<template>
  <div class="medical">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>健康档案</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/2-1'}">个人病历</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="medical_content">
      <el-row>
        <el-col :span="4"><div style="margin: 30px 20px">个人病历</div></el-col>
        <div style="float: right;margin: 20px"><router-link to="/4-1-1"><el-button><i class="el-icon-plus"></i>添加病历</el-button></router-link></div>
      </el-row>
      <div style="border-top: 1px solid #ddd;width: 90%;margin-left: 5%;margin-right: 5%"><b></b></div>


      <div style="min-height: 500px;margin-top: 30px;border: 1px #ddd">
        <el-row>
          <el-col :span="24">
        <ul class="style-ul">
          <li v-for="item in list">
            <router-link to="/4-1-1">
            <dl class="style-dl">
              <dd>{{item.condition2}}</dd>
              <dd>{{item.time}}</dd>
              <dd>{{item.title}}</dd>
              <dd>{{item.id}}</dd>
            </dl>
            </router-link>
          </li>
        </ul>
          </el-col>
        </el-row>
      </div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="5"
        layout="prev, pager, next, jumper"
        :total="20">
      </el-pagination>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  import axios from 'axios';
  export default{
    data(){
     return{
         list:[],
       pageMessage:[]
     }
    },
    mounted:function(){
      this.showView();
    },
    methods:{
        showView(){
          let self = this;
          axios.get('/api/pageMessage')
            .then(function(response){
              //var list = response.data.data.list;
              self.list = response.data.data.list;
              self.pageMessage = response.data.data.pageMessage;
            })
            .catch(function(err){
              console.log(err);
            });
        }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .medical
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
   .medical_content
     background-color white
     box-shadow 0 2px 5px #ccc
    .el-icon-plus
      color greenyellow
    .style-ul
      width 90%
      margin-left 5%
    .style-ul li
      border 1px solid #ddd
      margin-top 20px
    .style-ul li:hover
      background-color #f0efef
    .style-ul li .style-dl
       margin 20px
       display flex
       align-items flex-start
       justify-content flex-start
       flex-direction column
    .style-ul li .style-dl dd
       margin 10px
       display:block
       max-width 1000px



</style>
