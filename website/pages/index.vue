<template>
  <layout title="Home">
    <div class="components-group">
      <div class="components-title">弹出层组</div>

      <div class="components-links">
        <router-link to="dialog">
          ModDialog
          <span class="cn-name">弹窗</span>
        </router-link>
        <router-link to="alert">
          ModAlert
          <span class="cn-name">提示窗</span>
        </router-link>
        <router-link to="confirm">
          ModConfirm
          <span class="cn-name">确认窗</span>
        </router-link>
        <router-link to="toast">
          ModToast
          <span class="cn-name">轻提示</span>
        </router-link>
        <router-link to="layer">
          ModLayer
          <span class="cn-name">滑出层</span>
        </router-link>
      </div>
    </div>

    <div class="components-group">
      <div class="components-title">操作控件组</div>

      <div class="components-links">
        <router-link to="button">
          ModButton
          <span class="cn-name">按钮</span>
        </router-link>

        <router-link to="tab">
          ModTab
          <span class="cn-name">分栏</span>
        </router-link>
      </div>
    </div>

    <div class="components-group">
      <div class="components-title">展示控件组</div>

      <div class="components-links">
        <router-link to="image">
          ModImage
          <span class="cn-name">图片</span>
        </router-link>
        <router-link to="carousel">
          ModCarousel
          <span class="cn-name">滑动轮播</span>
        </router-link>
        <router-link to="banner">
          ModBanner
          <span class="cn-name">广告展示</span>
        </router-link>
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
        margin: 0 5px 10px 0;

  .components-view
    margin-bottom: 15px;
    padding: 5px;

    .view-title
      color: main-color;
      margin-bottom: 5px;

    .view-actions
      padding: 5px 0;

  .components-links
    a
      color: main-color;

    .cn-name
      display: block;
      text-align: center;
      color: #999;
      font-size: 12px;

</style>
