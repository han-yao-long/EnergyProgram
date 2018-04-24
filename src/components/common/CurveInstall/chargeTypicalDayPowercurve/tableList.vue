<template>

<div class="TableList">
    
<el-table
    ref="multipleTable"
    :data="tableData3"
    tooltip-effect="dark"
    border
    style="width: 100%"
    @selection-change="ucheckeddata"
    :row-class-name="tableRowClassName">
    <el-table-column
      align="center"
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      align="center"
      label="用户名"
      prop="username"
      width="120">
    </el-table-column>
    <el-table-column
      align="center"
      prop="accountNumber"
      label="账号"
      width="120">
    </el-table-column>
    <el-table-column
      align="center"
      prop="password"
      label="密码"
      width="120">
    </el-table-column>
    <el-table-column
      align="center"
      prop="region"
      label="状态"
      width="120">
    </el-table-column>
    <el-table-column
      align="center"
      prop="value1"
      label="角色"
      width="120">
    </el-table-column>
    <el-table-column
      align="center"
      prop="desc"
      label="描述"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>

</div>
  
</template>

<script>
import {mapState, mapActions} from "vuex"

export default {
    name: 'TableList',
    data () {
        return {
            tableData3: [{
                username: '王小',     //用户名
                accountNumber: '11223344',//账号
                password:"123456789",      //密码
                region:"1",       //是否禁用
                generateData:[],  //可选角色
                value1: [1, 4],   //已选角色
                desc:"hhhhh哈哈哈哈"           //账号描述
                },{
                username: '王虎',     //用户名
                accountNumber: '11223344',//账号
                password:"123456789",      //密码
                region:"1",       //是否禁用
                generateData:[],  //可选角色
                value1: [1, 4],   //已选角色
                desc:"hhhhh哈哈哈哈"           //账号描述
                },{
                username: '小虎',     //用户名
                accountNumber: '11223344',//账号
                password:"123456789",      //密码
                region:"0",       //是否禁用
                generateData:[],  //可选角色
                value1: [1, 4],   //已选角色
                desc:"hhhhh哈哈哈哈"           //账号描述
                },{
                username: '王小虎',     //用户名
                accountNumber: '11223344',//账号
                password:"123456789",      //密码
                region:"1",       //是否禁用
                generateData:[],  //可选角色
                value1: [1, 4],   //已选角色
                desc:"hhhhh哈哈哈哈"           //账号描述
                },
            ],
            ucheckeddata:[]
        }
    },
    computed : {

    },
    methods: {
        tableRowClassName({row, rowIndex}) {
            if (rowIndex%2 === 1) {
            return 'warning-row';
            } else if (rowIndex%2 === 0) {
            return 'success-row';
            }
        },
    }
}
</script>

<style>
 .el-table .warning-row {
    background: rgb(247, 248, 242);
  }

  .el-table .success-row {
    background: #e7f1f8;
  }
</style>
