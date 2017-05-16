<template>
  <layout title="Layer" source="layer/index.vue">
    <mod-layer v-model="show1">
      <div class="layer-inner">
        <div class="components-view">
          <div class="view-title">垂直方向 layer</div>
          <mod-button v-on:click="show1 = false">关闭</mod-button>
        </div>
      </div>
    </mod-layer>

    <mod-layer v-model="show2" :coverScreen="true">
      <div class="layer-inner">
        <div class="components-view">
          <div class="view-title">垂直方向 layer</div>

          <mod-button v-on:click="show2 = false">关闭</mod-button>

          <li class="demo-list" v-for="item in list">测试数据：{{ item }}</li>

        </div>
      </div>
    </mod-layer>

    <mod-layer v-model="show3" :useIscroll="false">
      <div class="layer-inner">
        <div class="components-view">
          <div class="view-title">内部有 input 不要使用 iscroll</div>

          <input placeholder="点击弹起键盘"/>

          <mod-button v-on:click="show3 = false">关闭</mod-button>

          <li class="demo-list" v-for="item in list">测试数据：{{ item }}</li>

        </div>
      </div>
    </mod-layer>

    <mod-layer v-model="show4" verticalPosition="top">
      <div class="layer-inner">
        <div class="components-view">
          <div class="view-title">垂直方向，起始位置在上，layer</div>
          <mod-button v-on:click="show4 = false">关闭</mod-button>
        </div>
      </div>
    </mod-layer>

    <mod-layer width="50%" v-model="show5" direction="horizontal">
      <div class="layer-inner">
        <div class="components-view">
          <div class="view-title">水平方向 layer</div>
          <mod-button v-on:click="show5 = false">关闭</mod-button>
          <li class="demo-list" v-for="item in list">测试数据：{{ item }}</li>
        </div>
      </div>
    </mod-layer>

    <mod-layer v-model="show5" width="50%" direction="horizontal">
      <div class="layer-inner">
        <div class="components-view">
          <div class="view-title">水平方向 layer</div>
          <mod-button v-on:click="show6 = false">关闭</mod-button>
          <li class="demo-list" v-for="item in list">测试数据：{{ item }}</li>
        </div>
      </div>
    </mod-layer>

    <mod-layer :coverScreen="true" width="50%" v-model="show6" direction="horizontal" horizontalPosition="right">
      <div class="layer-inner">
        <div class="components-view">
          <div class="view-title">水平方向 layer</div>
          <mod-button v-on:click="show6 = false">关闭</mod-button>
          <li class="demo-list" v-for="item in list">测试数据：{{ item }}</li>
        </div>
      </div>
    </mod-layer>

    <div class="components-view">
      <mod-button v-on:click="show1 = true">垂直方向</mod-button>
    </div>

    <div class="components-view">
      <mod-button v-on:click="show2 = true">覆盖全屏</mod-button>
    </div>

    <div class="components-view">
      <div class="view-title">内部有 input 不要使用 iscroll</div>

      <mod-button v-on:click="show3 = true">不使用 Iscroll</mod-button>
    </div>

    <div class="components-view">
      <mod-button v-on:click="show4 = true">起始位置在上</mod-button>
    </div>

    <div class="components-view">
      <div class="view-title">水平方向 layer 必须设置宽度，不然默认 100%</div>

      <mod-button v-on:click="show5 = true">水平方向</mod-button>
    </div>

    <div class="components-view">
      <mod-button v-on:click="show6 = true">水平反向，覆盖全屏</mod-button>
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
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },

    components: {
      Layout
    }
  }
</script>

<style lang="stylus">
  @import "~website/assets/mixin"

  .layer-inner
    padding: 10px;

    input
      border: 1px solid #999;
      width: 100%;
      height: 50px;
      padding: 5px;
      margin-bottom: 10px;

  .demo-list
    padding: 20px 0;


</style>
