import React, { useReducer } from 'react'
import Context from './Context'
import reducer from './reducers'

import { getPreviousYears } from '../services/handlingDates'

export const initialState = {
  filters: {
    startDate: getPreviousYears(5),
    finalDate: new Date(),
  },
}

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}

export default Provider
