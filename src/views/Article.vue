<template>
	<div>
		<el-row>
			<el-col :span="24">
				<el-button type="success" plain size="small">
					<i class="iconfont icon-add"></i>&nbsp;添加
				</el-button>
				<el-button type="warning" plain size="small">
					<i class="iconfont icon-tabledisable"></i>&nbsp;禁用
				</el-button>
				<el-button type="danger" plain size="small">
					<i class="iconfont icon-shanchu"></i>&nbsp;删除
				</el-button>
			</el-col>
		</el-row>

		<v-table />

		<Pagination />
	</div>
</template>

<script>
import vTable from '@/components/Table.vue'
import Pagination from '@/components/Pagination.vue'
export default {
	name: 'Dashboard',
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`)
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`)
		}
	},
	components: {
		vTable,
		Pagination
	}
}
</script>

<style>
</style>
