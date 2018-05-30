<template>
	<div class="top-bar clearfix">
		<div class="pull-left" v-if='btns.length'>
			<el-button
				v-for='(item, ind) in btns'
				:key='ind'
				:type="item.type"
				:disabled='item.disabled'
				@click='item.event(item)'
				plain
				size="small">
				<i class="iconfont" :class='item.icon'></i>&nbsp;{{item.label}}
			</el-button>
		</div>

		<div class='pull-right'>
			<el-input
				v-model="searchVal"
				@keyup.enter.native='onEnter'
				v-if='search'
				:placeholder="placeholder"></el-input>
			<el-select v-model="value" placeholder="请选择" v-if='select.length'>
				<el-option
					v-for="item in select"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: '',
			searchVal: ''
		}
	},
	watch: {
		value(val, oldVal) {
			this.$emit('onSelect', val)
		}
	},
	methods: {
		// 搜索框回车事件
		onEnter() {
			this.$emit('onEnter', this.searchVal)
		}
	},
	props: {
		btns: {
			type: Array,
			default: function() {
				return []
			}
		},
		select: {
			type: Array,
			default: function() {
				return []
			}
		},
		search: {
			type: Boolean,
			default: true
		},
		placeholder: String
	}
}
</script>

<style lang='scss' scoped>
.top-bar {
	padding-bottom: 15px;
}
.el-input {
	width: 170px;
}
</style>
