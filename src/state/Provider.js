import React, { useReducer } from 'react'
import Context from './Context'
import reducer from './reducers'

function getInitialDate() {
  const today = new Date()
  today.setFullYear(today.getFullYear() - 5)
  return today
}

export const initialState = {
  filters: {
    startDate: getInitialDate(),
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
