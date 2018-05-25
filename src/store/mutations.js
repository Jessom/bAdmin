import { HIDE_LOADING, SHOW_LOADING, SET_LOADING_TEXT } from './types'

const state = {
	loading: false,
	loadingText: ''
}

const mutations = {
	[HIDE_LOADING](state) {
		state.loading = false
	},
	[SHOW_LOADING](state) {
		state.loading = true
	},
	[SET_LOADING_TEXT](state, text) {
		state.loadingText = text
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
