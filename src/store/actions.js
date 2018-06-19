import * as types from './types'

export default {
	hideLoading: ({commit}) => {
		commit(types.HIDE_LOADING)
	},
	showLoading: ({commit}) => {
		commit(types.SHOW_LOADING)
	},
	setToken: ({commit}, token) => {
		commit(types.SET_TOKEN, token)
	}
}
