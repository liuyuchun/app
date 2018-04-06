<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab'
export default {
  name: 'App',
  components:{
    Tab,
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
</style>
