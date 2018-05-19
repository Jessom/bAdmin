<template>
	<el-container>
		<SideBar />
		<el-container>
			<v-header />
			<el-main>
				<transition name="el-fade-in-linear">
					<keep-alive>
						<router-view></router-view>
					</keep-alive>
				</transition>
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
	name: 'Index',
	components: {
		vHeader,
		SideBar,
		vFooter
	}
}
</script>

<style>
</style>
