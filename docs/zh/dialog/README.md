所有的弹出层组件父组件都为 `ModDialog`，其特点如下:

1. 免去宽、高设定，在修改 slot 后自动计算最新位置
2. 弹窗内容高度超过限定高度自动调用 `IScroll` 生成可滚动弹窗
3. 所有的组件均可以组件、API两种形式调用
4. 使用 `:value` 设置显示状态，如果绑定 `v-model` 则可在父组件中获取弹出层的显示状态

<p class="tip">
  `:value`、`v-model` 都可以控制弹层的显示状态，区别在于 `v-model` 可以对弹窗的显示状态进行双向绑定
</p>

## ModDialog

### components 调用
```html
<mod-dialog :value="true" >
  <div v-bind:style="{height: '100px', width: '100px', backgroundColor: '#efefef'}">
    hello world
  </div>
</mod-dialog>
```

### api 调用
```javascript
this.$jsmod.dialog.show({
  content: 'hello world'
});
```

### slots

| name        | description |
| ----------- |-------------|
| default     | 内容区域     |
| header     | 头部区域     |
| footer     | 尾部区域     |

<p class="tip">
  设置的高度为弹窗整体高度，当 height=100、header、footer 高度为 25px 时，内容区域的高度为 50px
</p>


### props

| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| value       | false       |    Boolean   |  是否显示弹窗，设置 v-model 时不要设置此值 |
| html        |             |    String   |  内容区域，可用默认 slot 代替|
| header      |             |    String   |  头部区域，可用 header slot 代替|
| footer      |             |    String   |  尾部区域，可用 footer slot 代替|
| useIscroll  |      true   |    Boolean   |  是否使用 Iscroll 插件，当内容有 input 时建议设置为 false|
| useMask     |      true   |    Boolean   |  是否显示遮盖层|
| isScrollAble|      false  |    Boolean   |  遮盖区域是否引起页面滚动|
| isMaskClickHide|      true  |    Boolean   |  点击遮盖区域是否关闭弹窗|
| width          |       |    [String, Number]   |  可以设置百分比（80%）, 也可以设置数值，当为空时会自动根据内容区域计算|
| height         |       |    [String, Number]   |  可以设置百分比（80%）, 也可以设置数值，当为空时会自动根据内容区域计算|
| backgroundColor|    #fff   |    [String]   |  弹窗的背景色 |
| soltBackgroundColor|    #fff   |    [String]   |  内容区域的背景色（不包括 header、footer 区域） |
