<template>
  <div class="search">
    <el-form  label-width="135px" :model="formInline" class="demo-form-inline">

    <el-row>

    <el-col :span="8" :offset="4">
        <el-form-item label="省（自治区）：">
            <el-select v-model="formInline.region" placeholder="请选择" size="medium">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
    </el-col>
    <el-col :span="8">
        <el-form-item label="市（县）：">
            <el-input v-model="formInline.user" class="county" placeholder="审批人" size="medium"></el-input>
        </el-form-item>
    </el-col>

    </el-row>

    <el-row>

        <el-col :span="8" :offset="4">
            <el-form-item label="发电机类型：">
                <el-select v-model="formInline.region" placeholder="请选择" size="medium">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-col>
        <el-col :span="8">
            <el-form-item label="月：">
                <el-select v-model="formInline.region" placeholder="请选择" size="medium">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-col>

    </el-row>

    <el-row>
        <el-button type="primary" size="medium">查询</el-button>
        <el-button size="medium">重置</el-button>
    </el-row>


</el-form>

  </div>
</template>
<script>
   
  export default {
    name: 'search',
    data () {
      return {
          formInline: {
          user: '',
          region: ''
        }
       
      }
    },
    methods: {
      
    }
  }
    
</script>
<style scoped>
.county{
    max-width: 217px;
}
</style>