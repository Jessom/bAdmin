<template>
	<div class="container">
		<v-top-bar
			placeholder='请输入昵称或账号'
			@onEnter='topbarSearch' />
		<el-table
			:data="users"
			border
			style="width: 100%">
			<el-table-column
				fixed
				prop='nick'
				label='昵称'
				width='120'>
			</el-table-column>
			<el-table-column
				prop='name'
				label='姓名'
				width='120'>
			</el-table-column>
			<el-table-column
				prop='account'
				label='账号'
				width='220'>
			</el-table-column>
			<el-table-column
				prop='sex'
				label='性别'
				width='120'>
				<template slot-scope="scope">
					<el-tag
						:type='scope.row.sex===0?"danger":"promary"'
						size='mini'
						disable-transitions>
						{{scope.row.sex===0?"女":"男"}}
					</el-tag>
				</template>
			</el-table-column>
			<el-table-column
				prop='ipaddress'
				label='最新登录IP'
				width='200'>
			</el-table-column>
			<el-table-column
				prop='address'
				label='最新登录地点'
				width='200'>
			</el-table-column>
			<el-table-column
				prop='time'
				label='注册时间'
				width='140'>
			</el-table-column>
			<el-table-column
				fixed='right'
				label='操作'
				width='120'>
				<template slot-scope="scope">
					<el-button type="text" @click='handle(0, scope.row)' size="small">查看</el-button>
					<el-button type="text" @click='handle(1, scope.row)' size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
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
export default {
	name: 'users',
	data() {
		return {
			// 表格数据
			users: [],
			page: {
				total: 0
			}
		}
	},
	created() {
		this.getUsers()
	},
	methods: {
		// 获取数据
		async getUsers() {
			try {
				const res = await this.axios(`static/data/users.json`)
				this.users = res.users
				this.page.total = res.total
			} catch(e) {
				console.log(e)
			}
		},
		// 操作按钮
		handle(tag, obj) {
			switch (tag) {
				case 0:
					this.$router.push({path: `user/${obj.id}`})
					break
				case 1:
					this.delectOne(obj)
					break
				default:
					break
			}
		},
		// 删除用户
		delectOne(obj) {
			this.$alert('确定要删除该用户吗？', '提示', {
				confirmButtonText: '确定',
				type: 'danger',
				center: true,
				callback: action => {
					if(action === 'confirm') {
						this.$store.commit('SHOW_LOADING')
						setTimeout(() => {
							this.$message({ type: 'success', message: '操作成功' })
							this.$store.commit('HIDE_LOADING')
						}, 1000)
					}
				}
			})
		},
		// 回车搜索事件
		topbarSearch(val) {
			console.log(val)
		},
		// 切换页面
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
.container {
}
</style>
