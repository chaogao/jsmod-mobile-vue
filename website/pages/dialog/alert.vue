<template>
  <layout title="Alert">
    <div class="button-wrap">
      <mod-alert v-model="show1"  content="购买成功！"></mod-alert>
      <mod-button v-on:click="show1 = !show1" >显示</mod-button>

      <mod-alert v-model="show2" v-on:click="onClick" content="购买成功！"></mod-alert>
      <mod-button v-on:click="show2 = !show2" >监听事件</mod-button>

      <mod-button v-on:click="showAlert" >API调用</mod-button>

    </div>
  </layout>
</template>

<script>
  import Layout from '../common/common_layout';

  export default {
    data () {
      return {
        show1: false,
        show2: false,
        show3: false,
        show4: false,
        show5: false,
        show6: false,
        list: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'k', 'm', 'o'],
        list2: ['一条数据'],
        list3: ['一条数据']
      }
    },

    methods: {
      onClick () {
        this.$jsmod.toast.show({
          content: '点击了确认'
        });
      },

      showAlert () {
        this.$jsmod.alert.show({
          content: 'api 显示的确认窗'
        })
      }
    },

    components: {
      Layout
    }
  }
</script>

<style lang="stylus">
  @import "~website/assets/mixin"

  .button-wrap
    .jsmod-button
      margin-bottom: 15px;

</style>
