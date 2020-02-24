<template>
  <div class="home"> 
     <Head></Head>
     <div class='menus'>
       <el-scrollbar style="height:100%">
        <ul class="menus-ul">
           <li>
            <p class='title'>前端文档规范</p>
            <router-link class='title_content' to='/doc'>前端文档规范</router-link>
            <!-- <router-link class='title_content' to='/doc'>CSS文档规范</router-link>
            <router-link class='title_content' to='/doc'>JS文档规范</router-link> -->
          </li>
          <li>
            <p class='title'>组件使用介绍</p>
            <router-link class='title_content' to='/vant'>Vant在企业微信如何使用</router-link>
            <router-link class='title_content' to='/vant1'>Vant在企业微信如何调试</router-link>
            <router-link class='title_content' to='/card'>Vant常用样式card</router-link>
            <router-link class='title_content' to='/card2'>Vant常用样式card2</router-link>
          </li>
           <li>
            <p class='title'>nginx配置</p>
            <router-link class='title_content' to='/nginx'>nginx+vue配置</router-link>
          </li>
          
        </ul>
       </el-scrollbar>
    </div>
    <div class='content'>
       <el-scrollbar style="height:100%">
     <router-view/>
     </el-scrollbar>
    </div>
     
  </div>
</template>

<script>
// @ is an alias to /src

import Head from './Header'
export default {
  name: 'Home',
  components: {
      Head
  },
  methods: {
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    clickChange() {
      //alert(this.$i18n.locale)
      let locale = this.$i18n.locale;
      if(locale == 'zh'){
        this.$i18n.locale = 'en'
      }else{
        this.$i18n.locale = 'zh'
      }
    }
  },
}
</script>

<style scoped>
   .menus{
     float:left;
     width:270px;
     height:100vh;
     background: rgb(243, 243, 243);
     overflow:hidden;
   }
  .menus-ul{
      margin:0;
      padding:0;
    }
  .menus-ul li{
    text-align: left;
    padding:0 0 0 42px;
  }
  .title{
    font-size: 16px;
    color: #333;
    line-height: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    display: block;
    position: relative;
    transition: .15s ease-out;
    font-weight: 700;
  }
  .title_content{
    display: block;
    color: #444;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    text-decoration: none;
    margin-left:0px;
    line-height: 22px;
  }
  .title_content:hover{
    color:cadetblue
  }
  .content{
    margin-left: 270px;/*==等于左边栏宽度==*/
    text-align: left;
    padding:20px 5px 20px 20px;
    height:100vh;
    overflow: hidden;
   
    
  }


</style>
