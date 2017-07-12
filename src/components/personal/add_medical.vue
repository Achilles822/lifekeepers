<template>
  <div class="add_medical">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>健康档案</el-breadcrumb-item>
      <el-breadcrumb-item :to="{path:'/2-1'}">添加病历</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="add_medical_content">
      <el-row :gutter="10">
        <el-col :span="2" :offset="1"><div>添加病历</div></el-col>
      </el-row>
      <div class="line_03"><b></b></div>
      <div style="margin-top: 20px">
      <el-row :gutter="10">
        <el-col :span="15" :offset="1">
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="病历标题">
          <el-col :span="10"><el-input v-model="form.name" placeholder="请输入疾病名称"></el-input></el-col>
        </el-form-item>

          <el-form-item label="就诊医院">
          <el-col :span="10"><el-input v-model="form.hosname" placeholder="请输入就诊医院名称"></el-input></el-col>
        </el-form-item>

        <el-form-item label="科室">
          <el-col :span="10">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="10">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="医生诊断">
          <el-col :span="10"><el-input v-model="form.affname" placeholder="比如疾病名称"></el-input></el-col>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-col :span="20"><el-input type="textarea" v-model="form.desc" placeholder="就医情况与处理方案"></el-input></el-col>
        </el-form-item>
          <el-form-item>
            <el-row :gutter="10">
              <el-col :xs="4" :sm="6" :md="8" :lg="9"><el-button type="primary" @click="onSubmit">立即创建</el-button>
                <router-link to="/4-1"> <el-button>返回</el-button></router-link>
              </el-col>
            </el-row>
          </el-form-item>

      </el-form>
        </el-col>
      </el-row>
      </div>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  import ElCol from "element-ui/packages/col/src/col";

  export default {

    components: {ElCol},
    data() {
      return {
        form: {
          name: '',
          hosname: '',
          affname: '',
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
    }
//    created() {
//      this.$http.get('/api/pageMessage').then((response) => {
//        response = response.body;
//
//          this.pageMessage = response.data;
//console.log(this.pageMessage);
//
//      });
//    },

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .add_medical
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
  .add_medical_content
    background-color white
    box-shadow 0 2px 5px #ccc
    padding-top 30px
  .el-icon-plus
    color greenyellow
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
