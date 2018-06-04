<template>
	<div class="container">
		<!-- 工具条 -->
		<v-top-bar
			:btns='topbar.btns'
			:select='topbar.select'
			placeholder='请输入文章标题'
			@onEnter='topbarSearch'
			@onSelect='onSelect' />		<!-- 工具条 -->
		<!-- 表格 -->
		<el-table
			:data="articleList"
			border
			@selection-change="handleSelectionChange"
			style="width: 100%">
			<el-table-column
				type="selection"
				fixed
				width="55">
			</el-table-column>
			<el-table-column
				prop="title"
				label="标题"
				width="320">
			</el-table-column>
			<el-table-column
				prop="type"
				label="分类"
				width="120">
			</el-table-column>
			<el-table-column
				prop="status"
				label="状态"
				width="120">
				<template slot-scope="scope">
					<el-tag
						:type="scope.row.status === 0 ? 'danger' : 'success'"
						disable-transitions>{{scope.row.status===0?'禁用':'正常'}}</el-tag>
				</template>
			</el-table-column>
			<el-table-column
				prop="look"
				label="浏览量"
				width="140">
			</el-table-column>
			<el-table-column
				prop="htime"
				label="操作时间"
				width="180">
			</el-table-column>
			<el-table-column
				prop="atime"
				label="添加时间"
				min-width="180">
			</el-table-column>
			<el-table-column
				fixed="right"
				label="操作"
				width="135">
				<template slot-scope="scope">
					<el-button type="text" @click='handle(0, scope.row)' size="small">编辑</el-button>
					<el-button type="text" v-if='scope.row.status' @click='handle(1, scope.row)' size="small">禁用</el-button>
					<el-button type="text" v-if='!scope.row.status' @click='handle(2, scope.row)' size="small">启用</el-button>
					<el-button type="text" @click='handle(3, scope.row)' size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>		<!-- 表格 -->
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
	name: 'Dashboard',
	data() {
		return {
			// 表格数据
			articleList: [],
			// 保存选中项
			multipleSelection: [],
			// 工具条
			topbar: {
				btns: [{
					label: '添加',
					type: 'success',
					icon: 'icon-add',
					disabled: false,
					event: () => {}
				}, {
					label: '删除',
					type: 'danger',
					icon: 'icon-shanchu',
					disabled: true,
					event: this.topBarEvent
				}],
				select: [{
					label: 'nodejs',
					value: 'nodejs'
				}, {
					label: 'vuejs',
					value: 'vuejs'
				}, {
					label: 'reactjs',
					value: 'reactjs'
				}, {
					label: 'angularjs',
					value: 'angularjs'
				}]
			},
			// 分页
			page: {
				total: 0
			}
		}
	},
	created() {
		this.getArticles()
	},
	methods: {
		// 获取数据
		async getArticles() {
			try {
				let res = await this.axios(`static/data/article.json`)
				this.articleList = res.article
				this.page.total = res.total
			} catch (e) {
				console.log(e)
			}
		},
		// 选择事件
		handleSelectionChange(val) {
			if(val.length > 0) {
				this.topbar.btns[1].disabled = false
				this.topbar.btns[2].disabled = false
			} else {
				this.topbar.btns[1].disabled = true
				this.topbar.btns[2].disabled = true
			}
			this.multipleSelection = val
		},
		// 操作按钮点击事件
		handle(tag, obj) {
			if(tag === 0) {
				this.$router.push({path: `/editor/${obj.id}`})
			} else if(tag === 1) {
				this.disabledOne(obj)
			} else if(tag === 2) {
				this.activedOne(obj)
			} else if(tag === 3) {
				this.delectOne(obj)
			}
		},
		// 启用某条数据
		activedOne(obj) {
			this.$alert('启用后，数据会展现在客户端，确定启用吗？', '启用提醒', {
				confirmButtonText: '确定',
				type: 'success',
				center: true,
				callback: action => {
					if(action === 'confirm') {
						this.$store.commit('SHOW_LOADING')
						setTimeout(() => {
							this.$store.commit('HIDE_LOADING')
							this.$message({
								type: 'success',
								message: `${obj.title} 启用成功`
							})
						}, 1000)
					}
				}
			})
		},
		// 禁用某条数据
		disabledOne(obj) {
			this.$alert('禁用后，数据在客户端不会显示，确定禁用吗？', '禁用提醒', {
				confirmButtonText: '确定',
				type: 'warning',
				center: true,
				callback: action => {
					if(action === 'confirm') {
						this.$store.commit('SHOW_LOADING')
						setTimeout(() => {
							this.$message({
								type: 'success',
								message: `${obj.title} 禁用成功`
							})
							this.$store.commit('HIDE_LOADING')
						}, 1000)
					}
				}
			})
		},
		// 删除某条数据
		delectOne(obj) {
			this.$alert('删除后，数据不可恢复，确定删除吗？', '删除提醒', {
				confirmButtonText: '确定',
				type: 'error',
				center: true,
				callback: action => {
					if(action === 'confirm') {
						this.$store.commit('SHOW_LOADING')
						setTimeout(() => {
							this.$store.commit('HIDE_LOADING')
							this.$message({
								type: 'success',
								message: `${obj.title} 删除成功`
							})
						}, 1000)
					}
				}
			})
		},
		// topbar 按钮点击事件
		topBarEvent(obj) {
			console.log(obj)
		},
		// topbar下拉选择事件
		onSelect(val) {
			console.log(val)
			this.$store.commit('SHOW_LOADING')
			// this.$store.commit('SET_LOADING_TEXT', '请稍后')
			setTimeout(() => {
				this.$store.commit('HIDE_LOADING')
			}, 1500)
		},
		// 换页
		handlePageCurrent(val) {
			console.log(val)
		},
		// topbar回车事件
		topbarSearch(val) {
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
