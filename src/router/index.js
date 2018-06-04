import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: () => import('@/views/Main.vue'),
    redirect: { path: '/dashboard' },
    children: [{
      path: '/dashboard',
      meta: {
        title: '首页 | わタしAdmin'
      },
      component: () => import('@/views/Dashboard.vue')
    }, {
      path: '/article',
      meta: {
        title: '文章管理 | わタしAdmin'
      },
      component: () => import('@/views/Article.vue')
    }, {
      path: '/users',
      meta: {
        title: '用户管理 | わタしAdmin'
      },
      component: () => import('@/views/Users.vue')
    }, {
      path: '/message',
      meta: {
        title: '消息管理 | わタしAdmin'
      },
      component: () => import('@/views/Message.vue')
    }, {
      path: '/power',
      meta: {
        title: '权限管理 | わタしAdmin'
      },
      component: () => import('@/views/Power.vue')
    }, {
      path: '/types',
      meta: {
        title: '文章类型 | わタしAdmin'
      },
      component: () => import('@/views/Types.vue')
    }, {
      path: '/editor/:id',
      meta: {
        title: '编辑文章 | わタしAdmin',
        actived: '/article'
      },
      component: () => import('@/views/Editor.vue')
    }]
  }, {
    path: '/login',
    meta: {
      title: '登录 | わタしAdmin'
    },
    component: () => import('@/views/Login.vue')
  }, {
    path: '*',
    meta: {
      title: '404 | わタしAdmin'
    },
    component: () => import('@/views/404.vue')
  }, {
    path: '/403',
    meta: {
      title: '403 | わタしAdmin'
    },
    component: () => import('@/views/403.vue')
  }]
})
