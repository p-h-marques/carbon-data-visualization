import React, { useContext, useEffect, useCallback, useState } from 'react'
import { MainStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'
import { DatePicker, DatePickerInput } from 'carbon-components-react'

const Main = () => {
  const { state, dispatch } = useContext(Context)
  const [date, setDate] = useState([
    state.filters.startDate,
    state.filters.finalDate,
  ])

  const handleChange = useCallback(e => {
    console.log(e)
    setDate(e)
    dispatch(actions.updateDatepicker(e))
  }, [])

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <MainStyles>
      <div className="visualization">
        <h1 className="visualization__heading">Data Visualization</h1>

        <div className="visualization__filters">
          <DatePicker
            datePickerType="range"
            size="md"
            value={date}
            onChange={handleChange}
          >
            <DatePickerInput
              id="date-picker-input-id-start"
              labelText="Start date"
              placeholder="mm/dd/yyyy"
              size="sm"
            />
            <DatePickerInput
              id="date-picker-input-id-finish"
              labelText="End date"
              placeholder="mm/dd/yyyy"
              size="sm"
            />
          </DatePicker>
        </div>
        <p className="visualization__chart">chart here!</p>
      </div>
    </MainStyles>
  )
}

export default Main
