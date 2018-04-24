<template>
  <div>
      <div class="loginDIV">
      <div class="info">
          
          <el-carousel>
            <el-carousel-item>
                <div class="describe">
                   能源规划
                </div>
                <div class="icon">
                    <i class="el-icon-edit-outline"></i>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="describe">
                    文件查询
                </div>
                <div class="icon">
                    <i class="el-icon-search"></i>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="describe">
                    配置管理
                </div>
                <div class="icon">
                    <i class="el-icon-setting"></i>
                </div>
            </el-carousel-item>
          </el-carousel>
      </div>
      <div class="form">
          <div class="title">能源规划管理平台</div>
          <div class="subTitle">Welcome</div>
          <div class="input">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
                            <el-form-item prop="username">
                                <el-input
                                    size="small"
                                    placeholder="用户名"
                                    v-model="ruleForm.username"
                                    prefix-icon="el-icon-star-off">
                                </el-input>
                            </el-form-item>

                            <el-form-item prop="password">
                                <el-input
                                    placeholder="密码"
                                    size="small"
                                    prefix-icon="el-icon-edit"
                                    v-model="ruleForm.password"
                                    @keyup.enter.native="submitForm('ruleForm')"
                                    type="password">
                                </el-input>
                            </el-form-item>

                        </el-form>
                        
                        
                        
                        <div class="tools">
                            <el-checkbox>记住密码</el-checkbox>
                            <span class="igonPass">忘记密码?</span>
                        </div>
                        <el-button size="small" type="primary" round class="loginBtn" @click="submitForm('ruleForm')">登陆</el-button>
          </div>
      </div>
  </div>
  <div class="footer noselect">
      ©2017~2018 北京国电通网络技术有限公司 （推荐使用Chrome浏览器访问）
  </div>
  </div>
</template>

<script>
export default {
  data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
    methods: {
            submitForm(formName) {
                const self = this;
                self.$refs[formName].validate((valid) => {
                    
                    if (valid) {
                     
                        if(this.ruleForm.username=="admin" && this.ruleForm.password=="123456"){
     localStorage.setItem('ms_username',self.ruleForm.username);
                        self.$router.push('/Home');
                        this.ruleForm.username="";
                        this.ruleForm.password="";

                        }else{
    localStorage.setItem('ms_username','');
                        this.ruleForm.username="";
                        this.ruleForm.password="";
                        }
                        

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
}
</script>


<style lang="less">
body{
    background:url('/static/login/bkg.jpg') no-repeat;  
    width:100%;
    height:100%;  
    background-size:cover;   
}
.loginDIV{
    width: 800px;
    height: 320px;
    background: slategray;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    overflow: hidden;

    .info{
        flex: 1;
         background: #1280cd;
        padding: 5px 5px 5px 5px;
       
       .describe{
           color: #fff;
           width: 100%;
           text-align: center;
           margin-top: 50px;
           font-size: 20px;
           font-weight: bold;
       }
       .icon{
           color: #fff;
           width: 100%;
           text-align: center;
           font-size: 130px;
           font-weight: bold;
           padding-top: 20px;
       }
    }

    .form{
        flex: 1;
        padding: 50px 0 0 0;
        background: #fff;

        .title{
            width: 100%;
            text-align: center;
            color: #388267;
            font-size: 17px;
        }
        .subTitle{
            width: 100%;
            text-align: center;
            font-size: 16px;
            color:#D9DCDB;
            padding: 5px;
        }
        .el-form-item{
            margin: 0;
        }
        .el-input{
            margin-top:15px;
        }

        .input{
            padding:0 20px 0 20px; 
            text-align: center;
            .tools{
                margin-top:15px;
                display: block;
                .el-checkbox{
                    float: left;
                    text-align: left;
                }

                .igonPass{
                    float: right;
                    text-align: right;
                    font-size: 14px;
                    color:rgb(167, 179, 175);
                    cursor: pointer;
                }
            }
            .loginBtn{
                width: 80%;
                margin-top:15px;
            }
        }
        
        
    }
    

}

.footer{
    color: #a79e9e;
    position: absolute;
    bottom: 0px;
    text-align: center;
    width: 100%;
    background: rgba(0,0,0,0.3);
    height: 30px;
    line-height: 30px;
    font-size: 14px;
}

.noselect {
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Chrome/Safari/Opera */
-khtml-user-select: none; /* Konqueror */
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* Internet Explorer/Edge */
user-select: none; /* Non-prefixed version, currently
not supported by any browser */
}
</style>
