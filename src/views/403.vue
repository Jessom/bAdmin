<template>
	<div class="error-page">
		<h1 class="error-code">
			4<span class='zero'>0</span>3
		</h1>
		<el-button type='primary' @click='test'>返回首页</el-button>
		<el-button type='primary' @click='add'>添加类型</el-button>
	</div>
</template>

<script>
export default {
	methods: {
		test() {
			this.$axios.post('/api/admin/login', {
				'account': 'jessoncheung@gmail.com',
				'password': 'e10adc3949ba59abbe56e057f20f883e'
			}).then(res => {
				console.log(res)
				localStorage.setItem('token', res.data.token)
			}).catch(err => {
				console.log(err)
			})
		},
		add() {
			this.$axios.post('/api/admin/addtype', {
				'title': 'JavaScript',
				'desc': 'js相关内容'
			}).then(res => {
				console.log(res)
			}).catch(err => {
				console.log(err)
			})
		}
	}
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
