<template>
	<div class="top-bar clearfix">
		<div class="pull-left">
			<el-button
				v-for='(item, ind) in btns'
				:key='ind'
				:type="item.type"
				@click='item.event(item)'
				plain
				size="small">
				<i class="iconfont" :class='item.icon'></i>&nbsp;{{item.label}}
			</el-button>
		</div>

		<div class='pull-right'>
			<el-select v-model="value" placeholder="请选择">
				<el-option
					v-for="item in options"
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
			options: [{
				value: 'vuejs',
				lable: 'vuejs'
			}, {
				value: 'nodejs',
				lable: 'nodejs'
			}, {
				value: 'reactjs',
				lable: 'reactjs'
			}, {
				value: 'angularjs',
				lable: 'angularjs'
			}]
		}
	},
	watch: {
		value(val, oldVal) {
			this.$store.commit('SHOW_LOADING')
			this.$store.commit('SET_LOADING_TEXT', '请稍后...')
			setTimeout(() => {
				this.$store.commit('HIDE_LOADING')
			}, 1500)
		}
	},
	props: {
		btns: Array
	}
}
</script>

<style lang='scss'>
.top-bar {
	padding-bottom: 15px;
}
</style>
