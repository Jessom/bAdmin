<template>
	<div class="container">
		<v-top-bar
			:btns='topbar.btns'
			placeholder='请输入消息标题'
			@onEnter='topbarSearch' />
		<el-table
			:data="messages"
			border
			style="width: 100%">
			<el-table-column
				type="selection"
				fixed
				width="55">
			</el-table-column>
			<el-table-column
				prop="title"
				label='标题'>
			</el-table-column>
			<el-table-column
				prop="time"
				label='时间'
				width="180">
			</el-table-column>
			<el-table-column
				fixed='right'
				label='操作'
				width="120">
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
import vTopBar from '@/components/TopBar'
export default {
	name: 'message',
	data() {
		return {
			// 表格数据
			messages: [],
			// topbar
			topbar: {
				btns: [{
					label: '删除',
					icon: 'icon-shanchu',
					type: 'danger',
					event: () => {}
				}]
			},
			page: {
				total: 0
			}
		}
	},
	created() {
		this.getMessages()
	},
	methods: {
		async getMessages() {
			try {
				const res = await this.axios(`static/data/messages.json`)
				this.messages = res.messages
				this.page.total = res.total
			} catch(e) {
				console.log(e)
			}
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
.container {
}
</style>
