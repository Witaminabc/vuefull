<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style >

@import "./scss/index.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*import sassStyles from './scss/index.module.scss'*/

</style>

<!--<style lang="scss" rel="stylesheet/scss">-->
<!--<style lang="scss" rel="stylesheet/scss">-->
<!--#app{-->
<!--  background: red;-->
<!--}-->
<!--</style>-->
