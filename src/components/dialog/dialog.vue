<template>
  <transition v-bind:name="useMask ? 'jsmod-mask' : 'jsmod-mask-none'">
    <div v-on:touchmove="onTouchmove" v-show="canShow" @click="maskHide" :class="['jsmod-mask', {'jsmod-mask-none': !useMask}]">
      <div ref="htmlContent" :style="htmlStyle" :class="['jsmod-dialog-html', {'jsmod-dialog-html-none-mask': !useMask}]">
        <div ref="headerContent" class="jsmod-dialog-solt-header">
          <slot name="header"><div v-html="header"></div></slot>
        </div>
        <div ref="soltContent" class="jsmod-dialog-solt-content" :style="{overflow: useIscroll && useMask ? 'hidden' : 'auto', backgroundColor: soltBackgroundColor}">
          <div ref="soltContentInner">
            <slot><div v-html="html"></div></slot>
          </div>
        </div>
        <div ref="footerContent" >
          <slot name="footer"><div v-html="footer"></div></slot>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
  import DialogMixin from '../utils/dialog.mixin';
  import IScroll from 'iscroll';

  export default {
    props: {
      html: String,
      header: String,
      footer: String,
      useIscroll: {
        type: Boolean,
        default: true
      },
      useMask: {
        type: Boolean,
        default: true
      },
      isScrollAble: {
        type: Boolean,
        default: false
      },
      isMaskClickHide: {
        type: Boolean,
        default: true,
      },
      width: {
        type: [String, Number]
      },
      height: {
        type: [String, Number]
      },
      value: {
        type: Boolean,
        default: false
      },
      offsetTop: {
        type: Number,
        default: 0
      },
      backgroundColor: {
        type: String,
        default: '#fff'
      },
      soltBackgroundColor: {
        type: String,
        default: '#fff'
      }
    },

    data () {
      return {
        calcWidth: undefined,
        calcHeight: undefined,
        canShow: false
      }
    },

    watch: {
      value: {
        handler: function (val) {
          this.canShow = val
        },
        immediate: true
      },

      canShow () {
        this.$emit('input', this.canShow);

        if (this.canShow) {
          this.$emit('onShow');
        } else {
          this.$emit('onHide');
        }
      }
    },

    created () {
      if (typeof this.value !== 'undefined') {
        this.canShow = this.value
      }
    },

    mounted () {
      this.canShow && this.calc();
      this.onEvents();
    },

    destroyed () {
      this.offEvents();
    },

    updated () {
      if (this.canShow) {
        this.$nextTick(() => {
          this.calc();
        });
      }
    },

    computed: {
      htmlStyle () {
        let obj = {
          backgroundColor: this.backgroundColor
        }

        obj.width = this.calcWidth + 'px';
        obj.height = this.calcHeight + 'px';

        return obj;
      }
    },

    methods: {
      maskHide (e) {
        if (!this.isMaskClickHide) {
          return;
        }
        if (e.target.classList.contains('jsmod-mask')) {
          this.canShow = false;
        }
      },

      onTouchmove (e) {
        if (e.target == e.currentTarget) {
          !this.isScrollAble && e.preventDefault();
        }
      },

      hide () {
        this.canShow = false;
      },

      offEvents () {
        window.removeEventListener('resize', this.onResize);
      },

      onEvents () {
        window.addEventListener('resize', this.onResize);
      },

      onResize () {
        this.calc();
      },

      getWidth () {
        if (this.width && typeof this.width == 'number') {
          return this.width;
        }

        if (this.width && typeof this.width == 'string' && /%$/.test(this.width)
          && !isNaN(parseInt(this.width))) {

          return (window.innerWidth * parseInt(this.width) / 100);
        }

        return undefined;
      },

      getHeight () {
        if (this.height && typeof this.height == 'number') {
          return this.height;
        }

        if (this.height && typeof this.height == 'string' && /%$/.test(this.height)
          && !isNaN(parseInt(this.height))) {

          return (window.innerHeight * parseInt(this.height) / 100);
        }

        return undefined;
      },

      calc () {
        this.calcWidth = this.getWidth();
        this.calcHeight = this.getHeight();

        // 只有 mask 正常显示时，iscroll 才能正确使用
        if (this.useIscroll && this.useMask) {
          this.$nextTick(() => {
            this.createIScroll();
          });
        }
      },

      createIScroll () {
        if (!this.iscroll) {
          this.iscroll = new IScroll(this.$refs.soltContent, {
            mouseWheel: true,
            scrollbars: true,
            click: true
          });
        }

        this.iscroll.refresh();
      },

      removeIScroll () {
        this.iscroll && this.iscroll.destroy();
        this.iscroll = null;
      }
    },

    mixins: [DialogMixin],
  }
</script>


<style lang="stylus">
  .jsmod-dialog-html
    position: absolute;
    left: 50%;
    top: 50%;
    max-height: 90%;
    max-width: 90%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);

    &.jsmod-dialog-html-none-mask
      position: fixed;


  .jsmod-dialog-solt-content
    overflow: hidden;
    position: relative;
    flex: 1 1 auto;

</style>
