import * as types from './types'

const state = {
	loading: false,
	loadingText: '',
	token: ''
}

const mutations = {
	[types.HIDE_LOADING](state) {
		state.loading = false
	},
	[types.SHOW_LOADING](state) {
		state.loading = true
	},
	[types.SET_LOADING_TEXT](state, text) {
		state.loadingText = text
	},
	[types.SET_TOKEN](state, token) {
		state.token = token
	}
}

const getters = {
	getLoadingState(state) {
		return state.loading
	},
	getToken(state) {
		return state.token
	}
}

export default {
	state,
	mutations,
	getters
}
