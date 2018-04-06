<template>
  <div class="header">
    <i class="iconfont icon-fanhui"></i>
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="less">
  .header{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 40px;
    background-color: skyblue;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
    i{
      position: absolute;
      left: 10px;


    }
  }

</style>
