## ModButton

### 何时使用？

`ModButton` 提供了按钮的基础样式，以及 `loading`, `disabeld` 两种状态，对于 api 调用接口可以通过简单的设置 `loading` 状态达到阻止重复提交的效果


### components 调用

```
<mod-button v-on:click="alert(1)" :customStyle="customStyle">按钮</mod-button>
```


### slots
| name        | description |
| ----------- |-------------|
| default     | 按钮内容区域  |
| loading     | 切换 loading 状态时的替代内容，推荐放置于 span 标签中  |

### props


| name        | default     |   type      | description |
| ----------- |-------------|-------------|-------------|
| status      | default     |    String   |  按钮的状态，可选值为：`default`, 'loading', 'disabeld' |
| backgroundColor   |             |    String   |  按钮的背景色|
| color   |             |    String   |  按钮的字体颜色 |
| border      |             |    [String, Boolean]   | 设置为 true 显示默认颜色边框，也可设置颜色值 |
| inline      |             |    Boolean   | 按钮是否以 inline-block 形式显示 |
| onClick      |             |    Function   | 点击回调 |
| href      |             |    String   | 按钮点击后链接，如果要处理 vue-router 监听 click 事件在使用 api 进行处理  |
| customStyle      |             |    Object   | 覆盖按钮样式  |
| className      |             |    String   | 为按钮添加的类名  |


### events

| name        |    description |
| ----------- |------------------ |
| click       | 点击按钮时触发 |


### 示例

[原始链接](http://mjsmod-vue.tedfe.com/dist/#/button)

<iframe width="375" height="667" src="http://mjsmod-vue.tedfe.com/dist/?iframe=1#/button"></iframe>
