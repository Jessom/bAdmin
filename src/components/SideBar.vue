<template>
	<el-aside
    width="200px"
    class='side-right-bar'>
    <div class="logo-container">
      <router-link class='logo-wrap' to='{}'>
        <img src="../assets/images/logo.png" class="logo" alt="">
      </router-link>
    </div>
		<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			background-color="#545c64"
			text-color="#fff"
			:collapse="isCollapse"
			active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
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
	methods: {
		handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
	}
}
</script>

<style lang='scss'>
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
</style>
