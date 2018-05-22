<template>
	<div>
		<el-row :gutter="20">
			<el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="1" class='item'>
				<router-link to='/article'>
					<el-card shadow="always">
						<el-col :span='12'>
							<i class="iconfont icon-user-group size40 warning-color"></i>
						</el-col>
						<el-col :span='12' class='text-right'>
							<div class="card-title">用户</div>
							<span class="card-num">123</span>
						</el-col>
					</el-card>
				</router-link>
			</el-col>
			<el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="1" class='item'>
				<router-link to='/article'>
					<el-card shadow="always">
						<el-col :span='12'>
							<i class="iconfont icon-ai-message size40 danger-color"></i>
						</el-col>
						<el-col :span='12' class='text-right'>
							<div class="card-title">消息</div>
							<span class="card-num">12</span>
						</el-col>
					</el-card>
				</router-link>
			</el-col>
			<el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="1" class='item'>
				<router-link to='/article'>
					<el-card shadow="always">
						<el-col :span='12'>
							<i class="iconfont icon-liulanjilu size40 blue-color"></i>
						</el-col>
						<el-col :span='12' class='text-right'>
							<div class="card-title">浏览</div>
							<span class="card-num">245,123</span>
						</el-col>
					</el-card>
				</router-link>
			</el-col>
			<el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="1" class='item'>
				<router-link to='/article'>
					<el-card shadow="always">
						<el-col :span='12'>
							<i class="iconfont icon-wenzhang size40 success-color"></i>
						</el-col>
						<el-col :span='12' class='text-right'>
							<div class="card-title">文章</div>
							<span class="card-num">56</span>
						</el-col>
					</el-card>
				</router-link>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default {
	name: 'Dashboard'
}
</script>

<style lang='scss'>
@import 'static/scss/style.scss';
.el-card__body {
	@extend .clearfix;

	.card-title {
		color: rgba(0, 0, 0, .45);
		margin-bottom: 10px;
		font-size: 16px;
		line-height: 18px;
	}
	.card-num {
		font-size: 20px;
	}
}
.item {
	padding-top: 10px;
	padding-bottom: 10px;
}
</style>
