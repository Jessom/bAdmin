<template>
  <div id="app">
		<router-view
      v-loading='loading'
      element-loading-spinner="el-icon-loading"
      :element-loading-text="loadingText"
      element-loading-background="rgba(0, 0, 0, 0.6)">
    </router-view>,
		<vue-progress-bar></vue-progress-bar>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  created() {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },
  computed: {
    ...mapState({
      loading: state => state.mutations.loading,
      loadingText: state => state.mutations.loadingText
    })
  },
  mounted() {
    this.$Progress.finish()
  }
}
</script>

<style>
.el-loading-spinner .el-icon-loading {
  font-size: 40px;
  color: #fff;
}
.el-loading-spinner .el-loading-text {
  color: #fff;
  font-size: 16px;
}
</style>
