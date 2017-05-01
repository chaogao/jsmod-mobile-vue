<template>
  <div class="common-header">
    <a v-if="!hideBack" v-on:click="goBack" class="action-back">
      <i class="iconjsmod iconjsmod-xiangzuo1" aria-hidden="true"></i>返回
    </a>

    <span class="title">{{ title }}</span>

    <a v-on:click="goHome" class="action-home">
      <i class="iconjsmod iconjsmod-shouye" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'common-header',
  props: ['title', 'hideBack', 'logout'],
  methods: {
    goBack () {
      this.$router.go(-1);
    },

    goHome () {
      this.$router.replace({
        name: 'Index'
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~website/assets/mixin";

  .common-header
    height: 45px;
    padding: 14px 15px;
    text-align: center;
    border-bottom: 1px solid border-color;
    background: main-color;
    color: #fff;
    position: relative;

    .title
      font-size: 16px;


    .action-home
      position: absolute;
      padding: 0 10px;
      right: 0;
      top: 0;
      height: 45px;
      line-height: 45px;

      i
        font-size: 18px;
        margin-right: 5px;


    .action-back
      position: absolute;
      padding: 0 10px;
      left: 0;
      top: 0;
      height: 45px;
      line-height: 45px;

      i
        font-size: 18px;
        margin-right: 5px;
</style>
