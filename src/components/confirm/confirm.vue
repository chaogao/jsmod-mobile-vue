<template>
  <mod-dialog v-model="canShow" background-color="rgba(0, 0, 0, 0)" :width="width" :isMaskClickHide="false" :useIscroll="useIscroll">
    <div slot="header">
      <div class="jsmod-confirm-title">
        {{ title }}
      </div>
    </div>

    <div class="jsmod-confirm-content">
      <slot><div v-html="content"></div></slot>
    </div>

    <div slot="footer">
      <div class="jsmod-confirm-footer">
        <a v-on:click="_onBtnNo" class="jsmod-confirm-footer-btn-item" href="javascript:void(0)">
          {{ btnNo }}
        </a>
        <a v-on:click="_onBtnOk" class="jsmod-confirm-footer-btn-item" href="javascript:void(0)">
          {{ btnOk }}
        </a>
      </div>
    </div>
  </mod-dialog>
</template>

<script>
  import { ModDialog } from '../dialog';

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
      btnOk: {
        type: String,
        default: '确认'
      },
      btnNo: {
        type: String,
        default: '取消'
      },
      content: {
        type: String,
        default: ''
      },
      onBtnOk: {
        type: Function,
        default: () => {}
      },
      onBtnNo: {
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
      _onBtnOk () {
        let returnValue = this.onBtnOk();

        if (returnValue !== false) {
          this.canShow = false;
        }
      },

      _onBtnNo () {
        let returnValue = this.onBtnNo();

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

  .jsmod-confirm-title
    background: #fff;
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    padding: 10px 0;

  .jsmod-confirm-content
    background: #fff;
    padding-bottom: 10px;
    border-bottom: 1px solid border-color;
    font-size: 12px;
    text-align: center;
    overflow: hidden;

  .jsmod-confirm-footer
    background: #fff;
    text-align: center;
    border-radius: 0px 0px 10px 10px;
    display: flex;

    .jsmod-confirm-footer-btn-item
      flex: 1;
      padding: 10px 0;
      text-align: center;
      text-decoration: none;
      color: link-color;

      &:first-child
        color: #999;
        border-right: 1px solid border-color;

</style>
