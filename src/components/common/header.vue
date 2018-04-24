<template>
<div class="headerbox">
       <div class="header noselect">
           <img src="/static/img/u16.jpg" alt="" width="100%" height="100%">
           
    </div> 
     <div class="logo">
           <img src="@/assets/logo.png"/>
           <span class="logo_name">综合能源规划设计平台</span>
           
           </div> 
   <div class="user-name"><span>欢迎您登录:</span> <span style="font-family:'楷体';font-weight:bold"> {{username}}</span></div> 
        
        <div class="user-info">
           <div class="logout_box" @click="logout()">[<span style="color:red">退出</span>]</div>
        </div>
        <div class="headr-next"><span class="bHome"></span><span class="bHome1">返回首页</span>
     <span class="bHome2"></span><span class="bHome3">{{times}}</span>
     </div>
</div>
</template>
<script>
   import store from '@/store'
   import {mapState, mapActions} from 'vuex';
    export default{
      data:function(){
          return {
              admin:'熊猫烧香',
              times:''
          }
      }  ,
         store,
      methods:{
      logout:function(){
       localStorage.setItem('ms_username','');
        this.$router.push({ path: '/login' });

      },
    addZero (n) {
		return n < 10 ? '0'+n : n;
	},
      timess(){
	     setInterval(() => {
                     var oDate = new Date();
            var years = oDate.getUTCFullYear();
           var months = oDate.getMonth()+1;
           var days = oDate.getDate();
			var hour = oDate.getHours();
			var minutes = oDate.getMinutes();
			var seconds = oDate.getSeconds();
			// 保存时间的格式
			var time = years+'-'+months+'-'+days+'  '+ this.addZero(hour)+':'+this.addZero(minutes)+':'+this.addZero(seconds);
             this.times = time;
         }, 1000);
		 
		}
      },
              computed: {
      ...mapState({
            username: state => state.username,
        })
    },
      mounted:function(){
         this.timess();
      },
    }
</script>
<style lang="less" scoped>
.headerbox {
    position: relative;
}
   .header {
       padding:0px;
       margin: 0px;
        position: absolute;
        left: 0;
        right: 0;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        line-height: 70px;
        color: #fff;
        cursor: default;
        // background-color: #409EFF ;
        // background: url('/static/img/u16.jpg')  leftrepeat;

      
    }
      .logo{
            position: absolute;
            width: 500px;
            height: 70px;
            left: 0;
            right: 0;
            // margin-left:50px;
            // text-align: center;
          background:url('/static/img/bac1.png') center repeat-x;
            .logo_name{
              
                font-size: 32px;
                color: #ffffff;
                line-height: 70px
            }
            img{
                width:50px;
                vertical-align:middle;
                margin-left: 30px;
                margin-right: 10px;
                margin-bottom: 10px;
               
            }
  
            .version{
                text-align: center;
                font-size: 16px;
                color:#ffd04b;
                padding: 5px;
            }
        }
        .user-name{
            position: absolute;
            height: 70px;
            width: 300px;
            right: 140px;
            top:0;
      display: inline-block;
        // float: right;
       line-height: 70px;
        font-size:16px
    }
    .user-info {
      position: absolute;
      right: 60px;
      top:0;
      width: 100px;
      height: 70px;
      line-height: 70px;
        padding-right: 50px;
        font-size: 16px;
        color: #000;
        cursor: pointer;
        
    }
  
    .headtwo{
      height: 30px;
      line-height: 30px;
      background: chartreuse;
          .icon-home{
        display:inline-block;
        width: 22px;
        height: 1ex;
        background: #ccc
      }
  
    }
       .headr-next{
     position: absolute;
       height: 28px;
        width: 100%;
        left: 0;
        top:70px;
       background-image: -webkit-linear-gradient(top,#fff 10%,#b7e1f4 90%);
       .bHome{
           display:inline-block;
           width: 28px;
           height: 28px;
           background: url('/static/img/home.png') center no-repeat;
           float: left;
           margin-left: 46px
       }
       .bHome1{
           float: left; 
            margin-left: 10px;
            display:inline-block;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
       }
      .bHome2{
           float: left; 
            margin-left: 80px;
            display:inline-block;
            width: 26px;
            height: 26px;
            line-height: 28px;
            background: url('/static/img/time.png') center no-repeat
       }
      .bHome3{
           float: left; 
            margin-left: -10px;
            display:inline-block;
            width: 200px;
            height: 24px;
            line-height: 28px;
            // background: url('/static/img/time.png') center no-repeat
       }
     }
</style>
