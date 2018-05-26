import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: resolve => require(['@/views/Main.vue'], resolve),
    meta: {
			title: '首页'
    },
    redirect: {name: 'dashboard'},
    children: [{
      path: '/dashboard',
      name: 'dashboard',
      component: resolve => require(['@/views/Dashboard.vue'], resolve)
    }, {
      path: '/article',
      name: 'article',
      component: resolve => require(['@/views/Article.vue'], resolve)
    }, {
      path: '/editor/:id',
      name: 'editor',
      component: resolve => require(['@/views/Editor.vue'], resolve)
    }]
  }, {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/views/Login.vue'], resolve)
  }, {
    path: '/404',
    name: '404',
    component: resolve => require(['@/views/404.vue'], resolve)
  }, {
    path: '/403',
    name: '403',
    component: resolve => require(['@/views/403.vue'], resolve)
  }]
})
