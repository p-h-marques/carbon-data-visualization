import React from 'react'
import { DatePicker, DatePickerInput } from 'carbon-components-react'

const Filters = ({ value, onChange }) => {
  return (
    <DatePicker
      datePickerType="range"
      size="md"
      value={value}
      onChange={onChange}
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
  )
}

export default Filters
