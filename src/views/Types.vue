<template>
	<div class="container">
		<v-top-bar :btns='topbar.btns' :search='false' />
		<el-tree
			:data="types"
			accordion
			@node-click="handleNodeClick">
			<span class="custom-tree" slot-scope="{ node, data }">
				<span>{{ node.label }}</span>
				<el-button
					v-if='data.children'
					type="text"
					size="mini"
					@click="append(data, $event)">
					<i class="iconfont icon-add"></i>
				</el-button>
			</span>
		</el-tree>
		<el-dialog
			:title="dialog.title"
			:visible.sync="dialog.dialogVisible">
			<el-form :model="typeForm" :rules="rules" ref="typeForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="所属类型" prop="parent">
					<el-input v-model="typeForm.parent" disabled></el-input>
				</el-form-item>
				<el-form-item label="类型名" prop="name">
					<el-input v-model="typeForm.name"></el-input>
				</el-form-item>
				<el-form-item label="描述" prop="desc">
					<el-input v-model="typeForm.desc"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="submitForm('typeForm')">确定</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
import vTopBar from '@/components/TopBar.vue'
export default {
	name: 'types',
	data() {
		const self = this
		return {
			// 渲染类型
			types: [{
				label: 'JavaScript',
				children: [{
					label: 'nodejs'
				}, {
					label: 'vuejs'
				}, {
					label: 'reactjs'
				}]
			}, {
				label: 'python',
				children: [{
					label: 'Django'
				}, {
					label: 'Flask'
				}]
			}],
			// 顶部工具条
			topbar: {
				btns: [{
					label: '添加主类型',
					icon: 'icon-add',
					type: 'success',
					event: () => {
						self.typeForm.parent = '主类型'
						self.dialog.dialogVisible = true
					}
				}]
			},
			// 弹出框
			dialog: {
				title: '添加类型',
				dialogVisible: false
			},
			// 弹出框表单
			typeForm: {
				parent: '主类型',
				name: '',
				desc: ''
			},
			// 表单验证
			rules: {
				name: [
					{ required: true, message: '请输入类型名', trigger: 'blur' }
				],
				desc: [
					{ required: true, message: '稍微写点什么吧', trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		handleNodeClick(d) {
			console.log(d)
		},
		// 添加子类型
		append(d, e) {
			e.cancelBubble = true
			console.log(d)
			this.typeForm.parent = d.label
			this.dialog.dialogVisible = true
		},
		submitForm(d) {
			console.log(d)
		}
	},
	components: {
		vTopBar
	}
}
</script>

<style lang='scss'>
.container {
	.custom-tree {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		padding-right: 8px;
		.iconfont {
			font-size: 14px;
		}
	}
}
</style>
