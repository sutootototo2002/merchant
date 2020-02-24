#### Vant 在企业微信得使用
##### 1、添加代码（方式四. 通过 CDN 引入）
######  使用 Vant 最简单的方法是直接在 html 文件中引入 CDN 链接，之后你可以通过全局变量vant访问到所有组件。 
    ```
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vant@2.4/lib/index.css">

```
<!-- 引入 Vue 和 Vant 的 JS 文件 -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vant@2.4/lib/vant.min.js"></script>
<script>
  // 在 #app 标签下渲染一个按钮组件
  new Vue({
    el: '#app',
    template: `<van-button>按钮</van-button>`
  });
  // 调用函数组件，弹出一个 Toast
vant.Toast('提示');
</script>
```
这是有赞官网[Vant官网](https://youzan.github.io/vant/#/zh-CN/quickstart "Vant官网"). 


<template>
  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    
  },
  methods:{
      clickFn(){
          alert('aa')
      }
  }
}
</script>
<style>
  .card{
    margin:auto;
    width: 600px;
    text-align: center;
  }
</style>
