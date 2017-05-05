<template>
  <layout title="Home">
    <div class="components-group">
      <div class="components-title">弹出层组</div>

      <div class="components-links">
        <router-link to="dialog">ModDialog</router-link>
        <router-link to="alert">ModAlert</router-link>
        <router-link to="confirm">ModConfirm</router-link>
        <router-link to="toast">ModToast</router-link>
      </div>
    </div>

    <div class="components-group">
      <div class="components-title">操作控件组</div>

      <div class="components-links">
        <router-link to="button">ModButton</router-link>
      </div>
    </div>

    <div class="components-group">
      <div class="components-title">展示控件组</div>

      <div class="components-links">
        <router-link to="image">ModImage</router-link>
      </div>
    </div>


    <div class="components-group">
      <div class="components-title">滑动控件组</div>

      <div class="components-links">
        <router-link to="carousel">ModCarousel</router-link>
        <router-link to="banner">ModBanner</router-link>
      </div>
    </div>
  </layout>
</template>

<script>
  import Layout from './common/common_layout';

  export default {
    components: {
      Layout
    }
  }
</script>

<style lang="stylus">
  @import "~website/assets/mixin"

  .components-group
    padding: 5px;
    margin-bottom: 10px;

    .components-title
      font-size: 16px;
      line-height: 24px;
      border-bottom: 1px solid main-color;
      margin-bottom: 5px;

    .components-links
      padding: 5px;

      a
        display: inline-block;
        font-size: 14px;
        margin: 0 5px 5px 0;

  .components-view
    margin-bottom: 15px;
    padding: 5px;

    .view-title
      color: main-color;
      margin-bottom: 5px;

    .view-actions
      padding: 5px 0;

</style>
