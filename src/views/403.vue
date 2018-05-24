<template>
	<div class="error-page">
		<h1 class="error-code">
			4<span class='zero'>0</span>3
		</h1>
		<el-button type='primary'>返回首页</el-button>
	</div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
@import 'static/scss/_variable.scss';
.error-page {
	text-align: center;
	.error-code {
		font-size: 250px;
		line-height: 1;
		color: $blue;
		margin: 0;
		.zero {
			color: $danger;
		}
	}
}
</style>
