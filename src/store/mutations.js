import { HIDE_LOADING, SHOW_LOADING } from './types'

const state = {
	loading: false
}

const mutations = {
	[HIDE_LOADING](state) {
		state.loading = false
	},
	[SHOW_LOADING](state) {
		state.loading = true
	}
}

const getters = {
	getLoadingState(state) {
		return state.loading
	}
}

export default {
	state,
	mutations,
	getters
}
