import Vue from 'vue'
import router from './router'
import App from './App'
import { PROGRESS_CONF } from './config'

// element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// vuex
import store from './store'
// vue progress bar
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, PROGRESS_CONF)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
