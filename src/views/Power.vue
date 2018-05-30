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
			page: {
				total: 0
			},
			// 弹出框配置
			dialog: {
				dialogVisible: false,
				title: ''
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
					event: obj => {}
				}]
			},
			// 表格数据
			powerList: []
		}
	},
	created() {
		this.getPowers()
	},
	methods: {
		async getPowers() {
			try {
				const res = await this.axios(`static/data/power.json`)
				this.powerList = res.powers
				this.transfer.data = res.powerList
				this.page.total = res.total
			} catch (e) {
				console.log(e)
			}
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
</style>
