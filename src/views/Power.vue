<template>
	<div class="container">
		<v-top-bar
			placeholder='请输入管理员名称'
			:btns='topbar.btns'
			@onEnter='topbarSearch' />
		<!-- 主要数据 -->
		<el-table
			:data="powerList"
			border
			style="width: 100%">
			<el-table-column
				type="selection"
				fixed
				width="55">
			</el-table-column>
			<el-table-column
				prop="name"
				label="管理员"
				width="120">
			</el-table-column>
			<el-table-column
				prop="account"
				label="账号"
				width="220">
			</el-table-column>
			<el-table-column
				prop="power"
				label="权限"
				width="220">
				<template slot-scope="scope">
					<el-tag
						:type="scope.row.power === 9 ? 'error' : 'success'"
						disable-transitions>{{scope.row.power===9?'超级管理员':'管理员'}}</el-tag>
				</template>
			</el-table-column>
			<el-table-column
				prop="time"
				label="添加时间"
				width="180">
			</el-table-column>
			<el-table-column
				prop="status"
				label="状态"
				width="180">
				<template slot-scope="scope">
					<el-tag
						:type="scope.row.status === 0 ? 'danger' : 'success'"
						disable-transitions>{{scope.row.status===0?'禁用':'正常'}}</el-tag>
				</template>
			</el-table-column>
			<el-table-column
				fixed="right"
				label="操作"
				width="120">
				<template slot-scope="scope">
					<el-button
						type="text"
						@click='handlePower(scope.row)'
						size="small">
						编辑权限
					</el-button>
				</template>
			</el-table-column>
		</el-table>		<!-- 主要数据 -->
		<!-- 弹出权限框 -->
		<el-dialog
			:title="dialog.title"
			:visible.sync="dialog.dialogVisible">
			<el-transfer
				v-model="transfer.selected"
				:data="transfer.data"
				:titles="['未选权限', '已选权限']">
			</el-transfer>
		</el-dialog> 		<!-- 弹出权限框 -->
		<!-- 添加管理员 -->
		<el-dialog
			title="添加管理员"
			width='500px'
			:visible.sync="admin.dialogVisible">
			<el-form :model="adminForm" ref="adminForm" label-width="80px">
				<el-form-item
					label='姓名'
					prop='name'
					:rules="[ { required: true, message: '请填写管理员名称', trigger: 'blur' },
						{ min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' } ]">
					<el-input v-model='adminForm.name'></el-input>
				</el-form-item>
				<el-form-item
					label='账号'
					prop='account'
					:rules="[ { required: true, message: '请填写邮箱地址', trigger: 'blur' },
						{ type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' } ]">
					<el-input v-model='adminForm.account'></el-input>
				</el-form-item>
				<el-form-item
					label='手机号'
					prop='phone'
					:rules="[ { required: true, message: '请填写手机号', trigger: 'blur' } ]">
					<el-input v-model='adminForm.phone'></el-input>
				</el-form-item>
				<el-form-item
					label='密码'
					prop='password'>
					<el-input v-model='adminForm.password' :disabled='true' style='width:275px'></el-input>
					<el-button @click='randomPwd'>随机生成</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click='addAdmin("adminForm")'>提交</el-button>
				</el-form-item>
			</el-form>
		</el-dialog> 		<!-- 添加管理员 -->
		<!-- 分页 -->
		<div class="page-wrap">
			<el-pagination
				background
				@current-change="handlePageCurrent"
				layout="prev, pager, next"
				:total="page.total">
			</el-pagination>
		</div>		<!-- 分页 -->
	</div>
</template>

<script>
import vTopBar from '@/components/TopBar.vue'
import { randPassword } from '@/assets/js/utils'
import { SHOW_LOADING, HIDE_LOADING } from '@/store/types'
import md5 from 'md5'
export default {
	name: 'Dashboard',
	data() {
		const self = this
		return {
			page: {
				total: 0
			},
			// 弹出框配置
			dialog: {
				dialogVisible: false,
				title: ''
			},
			// 添加管理员
			admin: {
				dialogVisible: false
			},
			// 管理员
			adminForm: {
				name: 'わタし',
				account: 'jessoncheung@gmail.com',
				phone: '15371829847',
				password: 'Watasi123'
			},
			// 穿梭框
			transfer: {
				selected: [],
				data: []
			},
			// 工具条
			topbar: {
				btns: [{
					label: '添加管理员',
					icon: 'icon-add',
					type: 'success',
					event() { self.admin.dialogVisible = true }
				}]
			},
			// 表格数据
			powerList: []
		}
	},
	created() {
		console.log(this)
		this.getPowers()
	},
	methods: {
		async getPowers() {
			try {
				const res = await this.$axios(`static/data/power.json`)
				this.powerList = res.powers
				this.transfer.data = res.powerList
				this.page.total = res.total
			} catch (e) {
				console.log(e)
			}
		},
		// 随机生成密码
		randomPwd() {
			this.adminForm.password = randPassword()
		},
		// 添加管理员
		addAdmin(formName) {
			this.$refs[formName].validate(valid => {
				if(valid) {
					this.$store.commit(SHOW_LOADING)
					this.$axios({
						method: 'POST',
						url: '/api/admin/register',
						data: {
							name: this.adminForm.name,
							account: this.adminForm.account,
							phone: this.adminForm.phone,
							password: md5(this.adminForm.password)
						}
					}).then(res => {
						this.$store.commit(HIDE_LOADING)
						console.log(res.data)
					}).catch(err => {
						console.log(err)
					})
					/*
					this.$axios.post(`/api/admin/register`, {
						name: this.adminForm.name,
						account: this.adminForm.account,
						phone: this.adminForm.phone,
						password: md5(this.adminForm.password)
					}).then(res => {
						console.log(res.data)
						this.$store.commit(HIDE_LOADING)
						if(res.data.code <= 0) {
							this.$notify({
								title: '错误',
								message: res.data.msg,
								type: 'error'
							})
						} else {
							this.admin.dialogVisible = false
							this.$notify({
								title: '成功',
								message: res.data.msg,
								type: 'success'
							})
						}
					}).catch(err => {
						this.$store.commit(HIDE_LOADING)
						this.$notify({
							title: '警告',
							message: `${err}, 网络超时`,
							type: 'warning'
						})
					})
					*/
				} else {
					return false
				}
			})
		},
		// 编辑权限按钮
		handlePower(e) {
			this.dialog.dialogVisible = true
			this.dialog.title = e.name
			e.admin.menu.forEach(c => this.transfer.selected.push(c.key))
		},
		// topbar搜索事件
		topbarSearch(val) {
			console.log(val)
		},
		// 换页
		handlePageCurrent(val) {
			console.log(val)
		}
	},
	components: {
		vTopBar
	}
}
</script>

<style lang='scss'>
</style>
