<template>
  <div class="header">
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#001938"
     text-color="#fff" active-text-color="#ffd04b" >
        <el-menu-item index="1">知码开门前端V1.0</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Header',
  components: {
    
  },
  data() {
      return {
          activeIndex: '0'
      }
  },
}
</script>
