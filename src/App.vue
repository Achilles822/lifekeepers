<template>
  <div id="app">
   <v-header></v-header>
    <div class="content-wrapper">
      <div class="nav">
        <navbar></navbar>
      </div>
      <div class="content">
        <router-view>

        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import header from './components/header/header.vue';
export default {
  components: {
    'v-header': header
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  background-color rgb(241,241,241)

.el-row
    margin-bottom 20px
    &:last-child
      margin-bottom 0


  .el-col
    border-radius 2px

  .bg-purple-dark
    background rgb(32,160,255)

  .grid-content
    border-radius 2px
    min-height 60px

  .header
    width 100%


.content-wrapper
  display flex
  display -webkit-flex
  display -ms-flex
  -webkit-display flex
  -ms-display flex
  flex-flow row
 .nav
   width 200px
   background rgb(238,241,246)
 .content
   background-color rgb(241,241,241)
   flex 1

</style>
