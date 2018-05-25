import Vue from 'vue'
import vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import mutations from './mutations'
import actions from './actions'

Vue.use(vuex)

export default new vuex.Store({
	modules: {
		mutations
	},
	actions,
	plugins: [
		createPersistedState()
	]
})
