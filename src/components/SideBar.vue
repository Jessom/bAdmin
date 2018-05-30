<template>
	<el-aside
    width="200px"
    class='side-right-bar'>
    <div class="logo-container">
      <router-link class='logo-wrap' to='/'>
        <img src="http://p94agf1t4.bkt.clouddn.com/images/logo2.png" class="logo" alt="">
      </router-link>
    </div>
		<el-menu
			:default-active="onRoute"
			class="el-menu-vertical-demo"
      @select='handleSelect'
			background-color="#545c64"
			text-color="#fff"
			:collapse="isCollapse"
			active-text-color="#ffd04b">
      <el-menu-item index='/dashboard'>
        <i class="el-icon-menu"></i>
        <span slot='title'>Dashboard</span>
      </el-menu-item>
      <el-menu-item index='/article'>
        <i class="el-icon-document"></i>
        <span slot='title'>Article</span>
      </el-menu-item>
      <el-menu-item index='/users'>
        <i class="iconfont icon-user-group"></i>
        <span slot='title'>用户管理</span>
      </el-menu-item>
      <el-menu-item index='/message'>
        <i class="iconfont icon-ai-message"></i>
        <span slot='title'>消息管理</span>
      </el-menu-item>
      <el-menu-item index='/power'>
        <i class="el-icon-document"></i>
        <span slot='title'>权限管理</span>
      </el-menu-item>
    </el-menu>
	</el-aside>
</template>

<script>
export default {
	data() {
		return {
			isCollapse: false
		}
	},
  computed: {
    onRoute() {
      return `/${this.$route.path.split('/')[1]}`
    }
  },
	methods: {
    handleSelect(key, keyPath) {
      this.$router.replace({ path: `${key}` })
    }
	}
}
</script>

<style lang='scss' scope>
@import 'static/scss/_variable.scss';
.side-right-bar {
  &>.el-menu {
    border-right: 0;
    height: calc(100vh - 60px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .logo-container {
    display: table;
    width: 100%;
    height: $hHeight;
    text-align: center;
    .logo-wrap {
      display: table-cell;
      vertical-align: middle;
      .logo {
        width: 120px;
      }
    }
  }
}
.iconfont {
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
}
</style>
