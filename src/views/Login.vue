<template>
	<div class="login-container">
		<el-form
			status-icon
			ref="ruleForm2"
			class="login-form">
			<div class="logo-wrap">
				<img src="../assets/images/logo.png" alt="">
			</div>
			<el-form-item>
				<i class="iconfont icon-yonghu-tianchong el-icon"></i>
				<el-input type="text" placeholder="place entry account" />
			</el-form-item>

			<el-form-item>
				<i class="iconfont icon-suoding el-icon"></i>
				<el-input type="password" placeholder="place entry password" />
			</el-form-item>

			<!-- 提交按钮 -->
			<el-button type="primary" class="login-btn">登录</el-button>
		</el-form>
	</div>
</template>

<script>
export default {
	name: 'login'
}
</script>

<style lang='scss'>
@import 'static/scss/_variable.scss';
.login-container {
	height: 100%;
	background-color: $baseColor;
	.login-form {
		position: relative;
		top: 50%;
		transform: translate3d(0, -60%, 0);
		width: 430px;
		margin: 0 auto;
		.el-input {
			width: 90%;
			color: #eee;
		}
		.el-input__inner {
			background-color: transparent;
			border: 0;
			height: 50px;
			line-height: 50px;
			color: #eee;
			font-size: 16px;
		}
		.el-form-item__content {
			background-color: rgba(0, 0, 0, .1);
			border: 1px solid rgba(255, 255, 255, .1);
			border-radius: 5px;
			padding: 0 15px;
		}
		.el-icon {
			color: #889aa4;
		}
	}
	.login-btn {
		width: 100%;
	}

	.logo-wrap {
		text-align: center;
		padding: 10px 0 20px;
	}
}
</style>
