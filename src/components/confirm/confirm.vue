<template>
  <mod-dialog v-model="canShow" background-color="rgba(0, 0, 0, 0)" :width="width" :isMaskClickHide="false" :useIscroll="useIscroll">
    <div slot="header">
      <div class="jsmod-confirm-title">
        <slot name="title">
          <div v-html="title"></div>
        </slot>
      </div>
    </div>

    <div class="jsmod-confirm-content">
      <slot><div v-html="content"></div></slot>
    </div>

    <div slot="footer">
      <div class="jsmod-confirm-footer">
        <mod-button v-on:click="_onBtnNo" :customStyle="buttonNoStyle">
          {{ btnNo }}
        </mod-button>
        <mod-button v-on:click="_onBtnOk" :customStyle="buttonOkStyle">
          {{ btnOk }}
        </mod-button>
      </div>
    </div>
  </mod-dialog>
</template>

<script>
  import { ModDialog } from '../dialog';
  import { ModButton } from '../button';

  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      width: {
        type: [String, Number],
        default: '80%'
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
      onClick: {
        type: Function,
        default: () => {}
      }
    },

    data () {
      return {
        canShow: false,
        buttonNoStyle: {
          flex: 1,
          padding: '10px 0',
          color: '#999',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderRight: '1px solid #efefef',
          borderRadius: '0'
        },
        buttonOkStyle: {
          flex: 1,
          padding: '10px 0',
          color: '#108ee9',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderRadius: '0'
        },
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
        let returnValue = this.onClick({
          type: true
        });

        this.$emit('click', {
          type: true
        });

        if (returnValue !== false) {
          this.canShow = false;
        }
      },

      _onBtnNo () {
        let returnValue = this.onClick({
          type: false
        });

        this.$emit('click', {
          type: false
        });

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
  @import "../../styles/mixin";

  .jsmod-confirm-title
    background: #fff;
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    padding: 10px 0;

  .jsmod-confirm-content
    background: #fff;
    padding-bottom: 15px;
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
