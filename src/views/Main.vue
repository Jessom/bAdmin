<template>
	<el-container>
		<SideBar />
		<el-container>
			<v-header />
			<el-main>
				<el-collapse-transition>
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</el-collapse-transition>
			</el-main>
			<el-footer style='border-top: 1px solid #E4E7ED;height:62px;'>
				<v-footer />
			</el-footer>
		</el-container>
	</el-container>
</template>

<script>
import vHeader from '@/components/Header.vue'
import SideBar from '@/components/SideBar.vue'
import vFooter from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
		vHeader,
		SideBar,
		vFooter
	}
}
</script>

<style>
.el-main {
	height: calc(100vh - 60px - 62px);
	overflow-y: auto;
	background-color: #f7f7f7;
	&::-webkit-scrollbar {
    display: none;
  }
}
</style>
