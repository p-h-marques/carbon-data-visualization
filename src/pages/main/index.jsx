import React, { useContext, useEffect, useCallback } from 'react'
import { MainStyles } from './styles'

import Filters from '../../components/organisms/filter'
import Chart from '../../components/organisms/chart'

import Context from '../../state/Context'
import * as actions from '../../state/actions'
import { getEconomicActivity } from '../../services/economicActivity'
import { Loading, InlineNotification } from 'carbon-components-react'
import '@carbon/charts/styles.css'

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

  return (
    <MainStyles>
      <div className="visualization">
        <h1 className="visualization__heading">Data Visualization</h1>

        <div className="visualization__filters">
          <Filters
            value={[state.filters.startDate, state.filters.finalDate]}
            onChange={handleDatepickerChange}
          />
        </div>
        {state.request.loading && (
          <div className="visualization__chart">
            <Loading
              description="Active loading indicator"
              withOverlay={false}
              small={true}
            />
          </div>
        )}

        {state.request.error && (
          <div className="visualization__chart">
            <InlineNotification
              ariaLabel="closes notification"
              className="visualization__chart--error"
              hideCloseButton={true}
              kind="error"
              lowContrast={true}
              role="alert"
              statusIconDescription="notification"
              subtitle="Try another date interval."
              title="Ops, something went wrong!"
            />
          </div>
        )}

        {!state.request.loading && !state.request.error && (
          <div className="visualization__chart">
            <Chart data={state.request.data} />
          </div>
        )}
      </div>
    </MainStyles>
  )
}

export default Main
