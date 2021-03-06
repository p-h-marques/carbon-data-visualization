import * as types from './types'

function reducer(state, action) {
  switch (action.type) {
    case types.UPDATE_DATEPICKER:
      return {
        ...state,
        filters: {
          ...state.filters,
          startDate: action.payload[0],
          finalDate: action.payload[1],
        },
      }

    case types.UPDATE_REQUEST:
      return {
        ...state,
        request: {
          ...state.request,
          ...action.payload,
        },
      }

    default:
      throw new Error()
  }
}

export default reducer
