<template>
	<div class="container">
		<v-top-bar
			:btns='btns' />
		<v-table
			:listHead='listHead'
			:list='list'
			:selection='true'
			:handler='handler'
			@onSelect='onSelect' />

		<Pagination />
	</div>
</template>

<script>
import vTable from '@/components/Table.vue'
import vTopBar from '@/components/TopBar.vue'
import Pagination from '@/components/Pagination.vue'
export default {
	name: 'Dashboard',
	data() {
		return {
			listHead: [{
				label: '标题',
				prop: 'title',
				width: '430',
				sortable: true
			}, {
				label: '分类',
				width: '120',
				prop: 'type',
				sortable: false
			}, {
				label: '状态',
				width: '120',
				prop: 'status',
				sortable: false
			}, {
				label: '操作时间',
				width: '120',
				prop: 'date',
				sortable: false
			}, {
				label: '浏览量',
				width: '100',
				prop: 'look',
				sortable: false
			}],
			list: [{
				id: 1,
				title: '男子自导自演绑架案勒索妻子:你丈夫女儿在我手上',
				type: '新闻',
				status: '正常',
				date: '2018-05-25',
				look: '2333'
			}, {
				id: 2,
				title: '小男孩手术前紧张得大哭 她半蹲40分钟放动画片安抚',
				type: '新闻',
				status: '正常',
				date: '2018-05-25',
				look: '5324'
			}, {
				id: 3,
				title: '2018全球最具价值品牌榜：苹果八连冠 华为上榜',
				type: '新闻',
				status: '正常',
				date: '2018-05-25',
				look: '1423'
			}],
			handler: [{
				label: '编辑',
				event(obj) {
					console.log(obj)
				}
			}, {
				label: '删除',
				event: this.onDelect
			}],
			btns: [{
				label: '添加',
				type: 'success',
				icon: 'icon-add',
				event: this.topBarEvent
			}, {
				label: '禁用',
				type: 'warning',
				icon: 'icon-tabledisable',
				event: this.topBarEvent
			}, {
				label: '删除',
				type: 'danger',
				icon: 'icon-shanchu',
				event: this.topBarEvent
			}]
		}
	},
	methods: {
		topBarEvent(obj) {
			console.log(obj)
			this.$store.commit('SHOW_LOADING')
			this.$store.commit('SET_LOADING_TEXT', '请稍后...')
			setTimeout(() => {
				this.$store.commit('HIDE_LOADING')
			}, 1500)
		},
		onDelect(obj) {
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).then(() => {
				this.$message({
				type: 'success',
				message: '删除成功!'
				})
			}).catch(() => {})
		},
		onSelect(val) {
			console.log(val)
		},
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`)
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`)
		}
	},
	components: {
		vTable,
		Pagination,
		vTopBar
	}
}
</script>

<style lang='scss'>
.container {
	background-color: #fff;
	border-radius: 5px;
	padding: 15px 30px;
	border: 1px solid #e6e6e6;
}
</style>
