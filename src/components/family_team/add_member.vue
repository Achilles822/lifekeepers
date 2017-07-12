<template>
  <div class="add_member">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>家庭组</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/5-2'}">新增成员</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="add_member_info">
      <el-row :gutter="10">
        <el-col :span="2" :offset="1"><div>添加新成员</div></el-col>
      </el-row>
      <div class="line_03"><b></b></div>
      <div style="margin-top: 20px">
        <el-row :gutter="10">
          <el-col :span="8" :offset="1">
            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm2.name"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
    </div>
  </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('姓名不能为空'));
        }
        setTimeout(() => {
            var regStr = "^[\\u4e00-\\u9fa5_a-zA-Z0-9-]{1,16}$";
          if (!regStr.test(value)) {
            callback(new Error('限16个字符，支持中英文、数字、减号或下划线'));
          }else {
              callback();
            }
        }, 100);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .add_member
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
    .add_member_info
      background-color white
      box-shadow 0 2px 5px #ccc
      padding-top 30px
  .line_03
    width:90%
  .line_03 b
    background: #ddd;
    margin-top: 4px;
    margin-left 5%
    display: inline-block;
    width: 100%;
    height: 1px;
    _overflow: hidden;
    vertical-align: middle;

</style>
