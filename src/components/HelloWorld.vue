<template>
  <div class="hello">
     <Markdown/>
  </div>
</template>

<script>
import Markdown from 'vue-meditor';
export default {
  name: 'HelloWorld',
  props: {
  },
  components: {
    Markdown
  },
  data(){
    return {
     
    }
  },
  mounted: function() {
         
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
