<template>
    <div class="footer">
      <router-link to="/home">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-list"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-weibiaoti19"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/my">
        <i class="iconfont icon-wode"></i>
        <span>我的</span>
      </router-link>

    </div>
</template>

<script>
    export default {
        name: "Tab"
    }
</script>
<!--
  router-link-active表示激活后的状态
-->
<style scoped lang="less">
  .footer{
    position: fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 50px;
    border-top:1px solid #252525;
    display: flex;
    a{
      flex: 1;
      display: flex;
      flex-direction: column;
      color: darkgreen;
      justify-content: center;
      align-items: center;
      font-size: 12px;
    }
    a.router-link-active{
      color: red;
    }

  }
</style>
