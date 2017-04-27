<template>
  <mod-dialog v-model="canShow" background-color="rgba(0, 0, 0, 0)" :width="width" :isMaskClickHide="false" :useIscroll="useIscroll">
    <div slot="header">
      <div class="jsmod-alert-title">
        {{ title }}
      </div>
    </div>

    <div class="jsmod-alert-content">
      <slot><div v-html="content"></div></slot>
    </div>

    <div slot="footer">
      <a href="javascript:void(0);" v-on:click="onFooterClick" class="jsmod-alert-footer">
        {{ btn }}
      </a>
    </div>
  </mod-dialog>
</template>

<script>
  import { ModDialog } from '../dialog';
  import { ModButton } from '../button';

  export default {
    props: {
      width: {
        type: [String, Number],
        default: '80%'
      },
      value: {
        type: Boolean,
        default: false
      },
      useIscroll: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ''
      },
      btn: {
        type: String,
        default: '确认'
      },
      content: {
        type: String,
        default: ''
      },
      onClick: {
        type: Function,
        default: () => {}
      }
    },

    data () {
      return {
        canShow: false
      }
    },

    created () {
      if (this.value !== undefined) {
        this.canShow = this.value
      }
    },

    watch: {
      value (val) {
        this.canShow = val;
      },

      canShow () {
        this.$emit('input', this.canShow);
      }
    },

    methods: {
      onFooterClick () {
        let returnValue = this.onClick();

        if (returnValue !== false) {
          this.canShow = false;
        }
      },

      hide () {
        this.canShow = false;
      },
    },

    components: {
      'mod-dialog': ModDialog
    }
  }

</script>


<style lang="stylus">
  @import "~@/styles/mixin";

  .jsmod-alert-title
    background: #fff;
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    padding: 10px 0;

  .jsmod-alert-content
    background: #fff;
    padding-bottom: 10px;
    border-bottom: 1px solid #efefef;
    font-size: 12px;
    text-align: center;
    overflow: hidden;

  .jsmod-alert-footer
    display: block;
    background: #fff;
    text-align: center;
    border-radius: 0px 0px 10px 10px;
    padding: 10px 0;
    color: link-color;
    text-decoration: none;

</style>
