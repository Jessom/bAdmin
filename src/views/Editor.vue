<template>
	<div class="container">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
			<el-form-item label="标题" prop="title">
				<el-input v-model="ruleForm.title" :width='300'></el-input>
			</el-form-item>
			<el-form-item label="类型" prop="type">
				<el-select v-model="ruleForm.type" placeholder="请选择文章类型">
					<el-option label="nodejs" value="nodejs"></el-option>
					<el-option label="vuejs" value="vuejs"></el-option>
					<el-option label="reactjs" value="reactjs"></el-option>
					<el-option label="angularjs" value="angularjs"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label='内容' prop='content'>
				<v-editor
					:value='ruleForm.content'
					@change='onchange' />
			</el-form-item>
			<el-form-item label="操作" prop="handle">
				<el-checkbox-group v-model="ruleForm.handle">
					<el-checkbox label="推荐" name="handle"></el-checkbox>
					<el-checkbox label="置顶" name="handle"></el-checkbox>
					<el-checkbox label="热门" name="handle"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import VEditor from '@/components/VEditor.vue'
export default {
	name: 'editor',
	data() {
		const self = this
		return {
			ruleForm: {
				title: '',
				type: '',
				content: ``,
				handle: []
			},
			rules: {
				title: [
					{ required: true, message: '请输入标题', trigger: 'blur' },
					{ min: 5, max: 30, message: '长度在 5 到 30 个字符', trigger: 'blur' }
				],
				type: [
					{ required: true, message: '请选择文章类型', trigger: 'change' }
				]
			},
			editor: self.value 	// 编辑后的值
		}
	},
	methods: {
		onchange(val, render) {
			this.ruleForm.content = val
		},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					console.log(this.ruleForm)
				} else {
					return false
				}
			})
		}
	},
	components: {
		VEditor
	}
}
</script>

<style lang='scss'>
.v-note-panel {
	max-height: 100%;
}
</style>
