<template>
  <div class="member">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>家庭组</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/5-1'}">家庭成员</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="member_info">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        border
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"

          align="center">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="手机号码"

          align="center"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        tableData3: [{
          email: '731576218@qq.com',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          phone: '18814129335'
        }, {
          email: '731576218@qq.com',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          phone: '18814129335'
        }, {
          email: '731576218@qq.com',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          phone: '18814129335'
        }, {
          email: '731576218@qq.com',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          phone: '18814129335'
        }, {
          email: '731576218@qq.com',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          phone: '18814129335'
        }, {
          email: '731576218@qq.com',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          phone: '18814129335'
        }, {
          email: '731576218@qq.com',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          phone: '18814129335'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .member
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
    .member_info
      background-color white
      box-shadow 0 2px 5px #ccc
  </style>
