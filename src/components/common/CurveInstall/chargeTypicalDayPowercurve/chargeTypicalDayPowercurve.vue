<template>
  <div class="chargeTypicalDayPowercurve">
  <Search class="search"></Search>
  <Operate class="operate"></Operate>
  <TableList></TableList>



  </div>
</template>
<script>
    import Search from "./search"
    import Operate from "./operate"
    import TableList from "./tableList"
    export default {
      name: 'chargeTypicalDayPowercurve',
      data () {
        return {
        
        }
      },
      methods: {
        
      },
      components:{
        Search,
        Operate,
        TableList
      }
    }
    
</script>
<style scoped>




</style>