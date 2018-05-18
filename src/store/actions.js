import * as types from './types'

export default {
	hideLoading: ({commit}) => {
		commit(types.HIDE_LOADING)
	},
	showLoading: ({commit}) => {
		commit(types.SHOW_LOADING)
	}
}
