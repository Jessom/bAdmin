<template>
	<el-table
		ref="multipleTable"
		:data="list"
		:border='true'
		style="width: 100%"
		@selection-change="handleSelectionChange">
		<!-- 复选框 -->
		<el-table-column
			fixed
			v-if='selection'
			type="selection"
			width="55">
		</el-table-column>
		<!-- 主内容 -->
		<el-table-column
			v-for='(item, ind) in listHead'
			:key='ind'
			:sortable='item.sortable'
			:prop='item.prop'
			:label="item.label"
			:width="item.width">
		</el-table-column>
		<!-- 操作 -->
		<el-table-column
			v-if='handler.length'
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button v-for='(item, ind) in handler' :key='ind' @click="item.event(scope.row)" type="text" size="small">{{item.label}}</el-button>
      </template>
    </el-table-column>
	</el-table>
</template>

<script>
export default {
	data() {
		return {
      multipleSelection: []
		}
	},
	props: {
		list: Array,			// 渲染数据
		listHead: Array,
		selection: {			// 是否可以选择
			type: Boolean,
			default: false
		},
		handler: {				// 操作列表，没有则不显示
			type: Array,
			default() {
				return []
			}
		}
	},
	methods: {
		handleClick(row) {
			console.log(row)
		},
		handleSelectionChange(val) {
			this.$emit('onSelect', val)
		}
	}
}
</script>

<style lang='scss'>
</style>
