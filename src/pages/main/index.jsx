import React, { useContext, useEffect, useCallback } from 'react'
import { MainStyles } from './styles'

import Context from '../../state/Context'
import * as actions from '../../state/actions'
import { getEconomicActivity } from '../../services/economicActivity'
import { DatePicker, DatePickerInput } from 'carbon-components-react'
import { LineChart } from '@carbon/charts-react'
import '@carbon/charts/styles.css'

const chartOptions = {
  title: 'Economic Activity',
  axes: {
    bottom: {
      title: 'Date',
      mapsTo: 'data',
      scaleType: 'time',
    },
    left: {
      mapsTo: 'valor',
      title: 'Value (R$)',
      scaleType: 'linear',
    },
  },
  height: '400px',
  toolbar: {
    enabled: false,
  },
  timeScale: {
    addSpaceOnEdges: 0,
  },
}

const Main = () => {
  const { state, dispatch } = useContext(Context)

  const handleDatepickerChange = useCallback(e => {
    dispatch(actions.updateDatepicker(e))
  }, [])

  useEffect(async () => {
    dispatch(
      actions.updateRequest({
        loading: true,
        error: false,
      }),
    )

    const request = await getEconomicActivity(state.filters)
    dispatch(actions.updateRequest(request))
  }, [state.filters])

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
            value={[state.filters.startDate, state.filters.finalDate]}
            onChange={handleDatepickerChange}
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
        {state.request.loading && (
          <p className="visualization__chart">loading...</p>
        )}

        {state.request.error && (
          <p className="visualization__chart">something wrong happened!</p>
        )}

        {!state.request.loading && !state.request.error && (
          <div className="visualization__chart">
            <LineChart
              data={state.request.data}
              options={chartOptions}
            ></LineChart>
          </div>
        )}
      </div>
    </MainStyles>
  )
}

export default Main
