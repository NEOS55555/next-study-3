import { ADD_COUNT, SUB_COUNT } from '@/constants'

function addCountAct (data) {
	return {
		type: ADD_COUNT,
		data
	}
}
function subCountAct (data) {
	return {
		type: SUB_COUNT,
		data
	}
}

export {
	addCountAct,
	subCountAct
}