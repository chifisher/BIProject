<template>
<!-- 这里router-link to="newcontact"会把路由导航到http://localhost:8080/#/newcontact   -->
    <router-link to="newcontact"><h1>{{ msg }}</h1></router-link>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
