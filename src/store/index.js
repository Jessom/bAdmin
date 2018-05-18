import Vue from 'vue'
import vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(vuex)

export default new vuex.Store({
	modules: {
		mutations
	},
	actions
})
