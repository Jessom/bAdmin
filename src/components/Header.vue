<template>
  <el-header
    class='header-container'>
    <!-- 菜单 -->
    <!-- <el-menu
      :default-active="activeIndex"
      class="hm"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
    </el-menu>  -->   <!-- 菜单 -->

    <!-- 登录人 -->
    <el-dropdown
      trigger="click"
      class='menu-right'>
      <span class="el-dropdown-link">
        <img class="avatar" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2697783222,3717756653&fm=27&gp=0.jpg" alt="">
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>Dashboard</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>    <!-- 登录人 -->
  </el-header>
</template>

<script>
export default {
	name: 'HeaderComponent',
	data() {
		return {
			activeIndex: '1'
		}
	},
	methods: {
		handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
	}
}
</script>

<style lang='scss'>
@import 'static/scss/_variable.scss';
$avatarS: 45px;
.header-container {
  background-color: $baseColor;
  .el-header{
    padding: 0;
  }
  .hm.el-menu--horizontal {
    border-bottom: 0;
    float: left;
  }
  /*登录者*/
  .menu-right {
    float: right;
    height: 60px;
    line-height: 55px;
    .el-dropdown-link {
      cursor: pointer;
    }
    .avatar {
      width: $avatarS;
      height: $avatarS;
      vertical-align: middle;
      border-radius: 50%;
      border: 2px solid #fff;
      background-color: #fff;
    }
  }
}
</style>
