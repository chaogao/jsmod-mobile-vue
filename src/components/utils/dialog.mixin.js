const DIALOG_ZINDEX_BEGIN = 10000;

let dialogArr = {};
let zIndexOffset = 0;

// 注入弹窗的逻辑
let InjectTools = {
  append ($el) {
    if (!this.$root) {
      this.createRoot();
    }

    $el.style.zIndex = DIALOG_ZINDEX_BEGIN + zIndexOffset;
    zIndexOffset += 1;
    this.$root.appendChild($el);

    return $el.style.zIndex;
  },

  createRoot () {
    this.$root = document.createElement('div');
    this.$root.classList.add('jsmod-dialog-placement');
    document.body.appendChild(this.$root);
  },

  remove ($el) {
    this.$root.removeChild($el);
  }
}



export default {
  beforeMount () {
    if (this.$el) {
      this.__jsmod_dialog_zindex = InjectTools.append(this.$el);
    }
  },

  mounted () {
    if (this.$el && !this.__jsmod_dialog_zindex) {
      this.__jsmod_dialog_zindex = InjectTools.append(this.$el);
    }
  },

  destroyed () {
    InjectTools.remove(this.$el);
  }
}
