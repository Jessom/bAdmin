<template>
	<div class="login-container">
		<el-form
			status-icon
			:model='loginForm'
			:rules="rules"
			ref="loginForm"
			class="login-form">
			<div class="logo-wrap">
				<img src="../assets/images/logo.png" alt="">
			</div>
			<el-form-item prop='account'>
				<i class="iconfont icon-yonghu-tianchong el-icon"></i>
				<el-input
					type="text"
					v-model='loginForm.account'
					placeholder="place entry account" />
			</el-form-item>

			<el-form-item prop='password'>
				<i class="iconfont icon-suoding el-icon"></i>
				<el-input
					type="password"
					v-model='loginForm.password'
					placeholder="place entry password" />
			</el-form-item>

			<!-- 提交按钮 -->
			<el-button type="primary" @click='submitForm("loginForm")' class="login-btn">登录</el-button>
		</el-form>
	</div>
</template>

<script>
import md5 from 'md5'
export default {
	name: 'login',
	data () {
		return {
			loginForm: { account: '', password: '' },
			rules: {
				account: [
					{ required: true, message: '请输入账号', trigger: 'blur' },
					{ type: 'email', message: '账号不合法', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' },
					{ min: 6, max: 16, message: '长度在 3 到 5 个字符', trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(async (valid) => {
				if (valid) {
					this.$store.commit('SHOW_LOADING')
					const res = await this.$axios.post('/api/admin/login', { account: this.loginForm.account, password: md5(this.loginForm.password) })
					if(res.status === 1) {
						this.$store.commit('SET_TOKEN', res.token)
						this.$router.push({ path: '/dashboard' })
					}
				}
			})
		}
	}
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
