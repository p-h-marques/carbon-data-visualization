import React, { useContext, useEffect } from 'react'
import { MainStyles } from './styles'

import Context from '../../state/Context'
import { Button, DatePicker, DatePickerInput } from 'carbon-components-react'

const Main = () => {
  const { state } = useContext(Context)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <MainStyles>
      <div className="visualization">
        <h1 className="visualization__heading">Data Visualization</h1>

        <div className="visualization__filters">
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
          <Button>Apply</Button>
        </div>
        <p className="visualization__chart">chart here!</p>
      </div>
    </MainStyles>
  )
}

export default Main
