<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

</script>

<style lang="stylus">
  .demo-btn
    display: block;
    padding: 5px;
    background: #ff5a00;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 12px;
    border-radius: 5px;
    margin-bottom: 15px;
</style>
