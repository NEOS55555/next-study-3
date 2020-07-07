import { ADD_COUNT, SUB_COUNT } from '@/constants'

const initState = {
  num: 0,
};

export default (state = initState, {type, data}) => {
  switch (type) {
    case ADD_COUNT:
      return {
        ...state,
        num: state.num + data
      }
    case SUB_COUNT:
      return {
        ...state,
        num: state.num - data
      }
    default:
      return state
  }
};
