<template>
<div id="homes">
    <el-container height="100%">
  <el-header height="100px">
      <Header ></Header>
  </el-header>
  <el-container  height="100%" class="container">
    <el-aside width="199px" height="100%">
        <Nav></Nav>
    </el-aside>
    <el-main height="100%" class="mainss">   <router-view></router-view></el-main>
  </el-container>
</el-container>   
</div>
</template>
<script>
    import Nav from "@/components/common/nav"
    import Header from "@/components/common/header"
  export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      Nav,
      Header
  }
}
</script>
<style scoped>

#homes{
  height:100%;
  background: #ffffff;
   background-size:cover;   
}
.mainss{
  background: #fff
}
.el-header{
  margin:0px;
  padding:0px;

  }
.el-aside{
  margin: 0px;
  padding:0px
}
</style>

