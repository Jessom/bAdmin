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
import VueAxios from 'vue-axios'

Vue.component(VeLine.name, VeLine)
Vue.use(ElementUI)
Vue.use(VueProgressBar, PROGRESS_CONF)
Vue.use(VueAxios, axios)
axios.interceptors.response.use(response => {
	let data = response.data
	if (typeof data === 'string') {
		data = JSON.parse(data)
	}
	return data
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
