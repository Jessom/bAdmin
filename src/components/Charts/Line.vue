<template>
	<div class="line-chart">
		<ve-line
			:data="lineData"
			:settings='lineSet'></ve-line>
	</div>
</template>

<script>
export default {
	data() {
		return {
			lineSet: {
				area: true,
				areaStyle: {
					opacity: 0.1
				}
			}
		}
	},
	props: {
		lineData: {
			type: Object,
			default: function() {
				return {}
			}
		}
	}
}
</script>

<style lang='scss'>
.line-chart {
	padding: 15px;
	background-color: #fff;
}
</style>
