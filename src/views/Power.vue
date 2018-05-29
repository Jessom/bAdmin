<template>
	<div class="container">
		<v-top-bar
			:btns='topbar.btns' />
		<!-- 弹出权限框 -->
		<el-dialog
			:title="dialog.title"
			:visible.sync="dialog.dialogVisible">
			<el-transfer
				v-model="transfer.sele"
				:data="transfer.data"
				:titles="['未选权限', '已选权限']">
			</el-transfer>
		</el-dialog> 		<!-- 弹出权限框 -->
	</div>
</template>

<script>
import vTopBar from '@/components/TopBar.vue'
import Pagination from '@/components/Pagination.vue'
export default {
	name: 'Dashboard',
	data() {
		return {
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
			}
		}
	},
	components: {
		Pagination,
		vTopBar
	}
}
</script>

<style lang='scss'>
</style>
