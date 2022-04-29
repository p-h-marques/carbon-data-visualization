import React, { useContext, useEffect } from 'react'
import { MainStyles } from './styles'

import Context from '../../state/Context'
import { DatePicker, DatePickerInput } from 'carbon-components-react'
// import Start from '../../components/start'

const Main = () => {
  const { state } = useContext(Context)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <MainStyles>
      <h1 className="landing-page__heading">Data Visualization</h1>

      <DatePicker datePickerType="range" size="md">
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
    </MainStyles>
  )
}

export default Main
