import Vue from 'vue'
import router from './router'
import App from './App'
import { PROGRESS_CONF } from './config'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import VueProgressBar from 'vue-progressbar'
import VeLine from 'v-charts/lib/line'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// import { HIDE_LOADING } from '@/store/types'
Vue.component(VeLine.name, VeLine)
Vue.use(ElementUI)
Vue.use(VueProgressBar, PROGRESS_CONF)
Vue.prototype.$axios = axios
axios.interceptors.request.use(config => {
	console.log(config)
	if(store.state.mutations.token) {
		config.headers['Authorization'] = store.state.mutations.token
	}
	config.headers['Content-Type'] = 'application/json'
	return config
})
router.beforeEach((to, from, next) => {
	if(to.path !== '/login') {
		if(store.state.mutations.token) {
			next()
		} else {
			next({
				path: '/login',
				query: { redirect: to.fullPath }
			})
		}
	} else {
		next()
	}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

axios.interceptors.response.use(response => {
	let data = response.data
	console.log(response)
	store.commit('HIDE_LOADING')
	if(data.status === 403 || data.status === 401) {
		router.push({ path: '/login' })
	} else if(data.status < 1) {
		app.$message({
			message: data.message,
			type: 'wraning'
		})
	}
	return data
}, err => {
	console.log(err)
	return Promise.reject(err)
})
