<template>
  <transition v-bind:name="useMask ? 'jsmod-mask' : 'jsmod-mask-none'">
    <div @click="maskHide" v-show="canShow" :class="[
        'jsmod-mask',
        {'jsmod-mask-none': !useMask},
        direction == 'vertical' ? 'jsmod-layer-vertical' : 'jsmod-layer-horizontal',
        'jsmod-layer-vertical-' + verticalPosition,
        'jsmod-layer-horizontal-' + horizontalPosition
      ]">
      <div ref="slotContent" :style="layerStyle" :class="['jsmod-layer-content']">
        <div ref="slotInner">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import DialogMixin from '../utils/dialog.mixin';
  import ShowMixin from '../utils/show.mixin';
  import IScroll from 'iscroll';

  export default {
    props: {
      useMask: {
        type: Boolean,
        default: true
      },

      coverScreen: {
        type: Boolean,
        default: false,
      },

      isMaskClickHide: {
        type: Boolean,
        default: true
      },

      useIscroll: {
        type: Boolean,
        default: true
      },

      direction: {
        type: String,
        default: 'vertical'
      },

      verticalPosition: {
        type: String,
        default: 'bottom'
      },

      horizontalPosition: {
        type: String,
        default: 'left'
      }
    },

    data () {
      return {
        winWidth: window.innerWidth,
        winHeight: window.innerHeight
      }
    },

    updated () {
      this.canShow && this.calcLayout();
    },

    mounted () {
      this.canShow && this.calcLayout();

      this.onEvents();
    },

    destroyed () {
      this.offEvents();
    },

    computed: {
      layerStyle () {
        let obj = {};

        if (this.direction == 'vertical') {
          obj.height = this.calcHeight + 'px';

          if (this.coverScreen) {
            obj.height = this.winHeight + 'px';
          }

          obj.maxHeight = this.winHeight + 'px';
          obj.width = '100%';

          if (this.verticalPosition == 'top') {
            obj.top = 0;
            obj.bottom = 'auto';
          } else {
            obj.top = 'auto';
            obj.bottom = 0;
          }
        } else  {
          obj.width = this.calcWidth + 'px';

          if (this.coverScreen) {
            obj.width = this.winWidth + 'px';
          }

          obj.maxWidth = this.winWidth + 'px';
          obj.height = '100%';

          if (this.horizontalPosition == 'left') {
            obj.left = 0;
            obj.right = 'auto';
          } else {
            obj.left = 'auto';
            obj.right = 0;
          }
        }

        if (this.useIscroll) {
          obj.overflow = 'hidden'
        } else {
          obj.overflow = 'auto'
        }

        return obj;
      }
    },

    methods: {
      onCalced () {
        if (this.useIscroll && this.canShow) {
          this.$nextTick(() => {
            this.createIScroll();
          });
        }
      },

      offEvents () {
        window.removeEventListener('resize', this.onResize);
      },

      onEvents () {
        window.addEventListener('resize', this.onResize);
      },

      onResize () {
        if (this.canShow) {
          this.calcLayout();
        }

        this.winHeight = window.innerHeight;
        this.winWidth = window.innerWidth;
      },

      removeIScroll () {
        this.iscroll && this.iscroll.destroy();
        this.iscroll = null;
      },

      maskHide (e) {
        if (!this.isMaskClickHide) {
          return;
        }

        if (e.target.classList.contains('jsmod-mask')) {
          this.canShow = false;
        }
      },

      createIScroll () {
        if (!this.iscroll) {
          this.iscroll = new IScroll(this.$refs.slotContent, {
            mouseWheel: true,
            scrollbars: true,
            click: true
          });
        }

        this.iscroll.refresh();
      },
    },

    mixins: [ShowMixin, DialogMixin]
  }

</script>


<style lang="stylus">
  .jsmod-layer-content
    bottom: 0;
    width: 100%;
    background: #fff;
    overflow: hidden;
    position: absolute;
</style>
