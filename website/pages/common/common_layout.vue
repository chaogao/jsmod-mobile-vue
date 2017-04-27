<template>
	<div id="common-layout">
		<common-header v-bind:onRigthBtn="onRigthBtn" v-if="title" v-bind:hideBack="hideBack" v-bind:title="title" v-bind:OrderTip="OrderTip" v-bind:isService="isService" v-bind:isTitle="isTitle">
      <span v-if="rightBtn" v-html="rightBtn"></span>
		</common-header>

		<slot v-if="isShowNotFound" name="header">
			<common-header v-bind:title="'找不到页面'"></common-header>
		</slot>

		<div v-if="!isShowNotFound" v-bind:style="{minHeight: this.winHeight + 'px'}" v-bind:class="['container', containerClass, {'has-footer': !hideFooter}]">
			<slot></slot>
		</div>

		<slot v-if="!isShowNotFound" name="footer">
			<common-footer v-if="!hideFooter" v-bind:footerTab="footerTab"></common-footer>
		</slot>
	</div>
</template>

<script>
import CommonHeader from './common_header';
import CommonFooter from './common_footer';

export default {
	name: 'common-layout',
	data () {
		return {
			winHeight: this.containerClass == 'container-gray' ? (window.outerHeight || window.innerHeight) - 45 : 0
		}
	},

	props: ['title', 'hideFooter', 'containerClass', 'isShowNotFound', 'footerTab', 'hideBack', 'rightBtn', 'onRigthBtn', 'OrderTip', 'isService', 'isTitle'],

	components: {
		CommonHeader,
		CommonFooter
	}
}
</script>

<style scoped lang="stylus">
	#common-layout
	.container {
		&.container-gray {
			background: #EAEAEA;
		}

		&.has-footer {
			// padding-bottom: 120px;
		}
	}


	.fade-leave {
		display: none;
	}

	.fade-leave-active {
		display: none;
	}

	.fade-enter-active {
		transition: opacity 1s;

		.container {
			transition: opacity 1s;
			opacity: 1;
		}
	}

	.fade-enter {
		transition: opacity 1s;

		.container {
			transition: opacity 1s;
			opacity: 0;
		}
	}
</style>
