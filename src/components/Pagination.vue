<template>
	<el-pagination
		background
		class='pagination-wrap'
		@size-change="handleSizeChange"
		@current-change="handleCurrentChange"
		:page-sizes="[10, 20, 30, 40]"
		:page-size="10"
		layout="total, sizes, prev, pager, next"
		:total="400">
	</el-pagination>
</template>

<script>
export default {
	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`)
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`)
		}
	}
}
</script>

<style lang='scss'>
.pagination-wrap {
	padding: 35px 0 15px;
	text-align: right;
}
</style>
