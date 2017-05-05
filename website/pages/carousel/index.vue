<template>
  <layout title="Button" source="button/index.vue">
    <div class="carousel-wrap">
      <div class="carousel-demo-item">
        <p class="carousel-title">基础实例</p>

        <mod-carousel ref="ca" v-model="index" v-on:swiped="onSwiped" :height="160">
          <mod-carousel-item v-for="item, key in list1" :key="key">
            <div class="demo-carousel-inner">
              <span>这是第{{ item }}屏</span>
            </div>
          </mod-carousel-item>
        </mod-carousel>

        <div class="button-groups">
          <mod-button :inline="true" v-on:click="$refs.ca.pre()">前一个</mod-button>
          <mod-button :inline="true" v-on:click="$refs.ca.next()">后一个</mod-button>
          <mod-button :inline="true" v-on:click="list1.push(list1.length + 1)">添加一个</mod-button>
        </div>

        <div class="input-wrap">
          设置索引 <input v-model="index" type="number" min="0" :max="list1.length - 1"/>
        </div>

        <div class="carousel-info">
          当前索引：{{ index }}
        </div>
      </div>

      <div class="carousel-demo-item">
        <p class="carousel-title">自动轮播</p>
        <mod-carousel :interval="3000" :height="160">
          <mod-carousel-item v-for="item, key in list1" :key="key">
            <div class="demo-carousel-inner">
              <span>这是第{{ item }}屏</span>
            </div>
          </mod-carousel-item>
        </mod-carousel>
      </div>


      <div class="carousel-demo-item">
        <p class="carousel-title">头尾相接循环</p>
        <mod-carousel :loop="true" :height="160">
          <mod-carousel-item v-for="item, key in list1" :key="key">
            <div class="demo-carousel-inner">
              <span>这是第{{ item }}屏</span>
            </div>
          </mod-carousel-item>
        </mod-carousel>
      </div>
    </div>
  </layout>
</template>

<script>
  import Layout from '../common/common_layout';

  export default {
    components: {
      Layout
    },

    data () {
      return {
        list1: [1, 2, 3, 4],
        index: 0
      }
    },

    methods: {
      onSwiped (e) {
        console.log(e.index);
      }
    },
  }
</script>

<style lang="stylus">
  @import "~website/assets/mixin"

  .carousel-wrap
    padding: 5px;

    .carousel-demo-item
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;

      .carousel-title
        margin-bottom: 5px;
        font-weight: bold;

    .button-groups
      margin: 10px 0;

    .demo-carousel-inner
      background: #efefef;
      color: #ff5a00;
      width: 100%;
      height: 100%;

      span
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

</style>
