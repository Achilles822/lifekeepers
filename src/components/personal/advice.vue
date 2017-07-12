<template>
  <div class="advice">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>个人中心</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/3-4'}">意见反馈</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="advice-content">
      <el-row :gutter="20">
        <el-col :span="18" :offset="3">
      <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 8}"
        placeholder="请输入内容"
        v-model="textarea3">
      </el-input>
          <el-col :span="4" :offset="21" style="margin-top: 10px;margin-bottom: 10px"><el-button type="success">提交</el-button></el-col>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              align="center"
              prop="date"
              label="时间">
            </el-table-column>
            <el-table-column
              align="center"
              prop="name"
              label="反馈内容">
            </el-table-column>
            <el-table-column
              align="center"
              prop="address"
              label="回复">
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="5"
            layout="prev, pager, next, jumper"
            :total="20">
          </el-pagination>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default{
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
      components: {ElButton}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .advice
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
  .advice-content
   padding-top 30px
   background-color white

</style>

