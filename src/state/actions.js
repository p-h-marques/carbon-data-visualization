import * as types from './types'

/**
 * Action para update do datepicker
 *
 * @param {boolean} data
 * @returns
 */
export function updateDatepicker(data) {
  return {
    type: types.UPDATE_DATEPICKER,
    payload: data,
  }
}

export function updateRequest(data) {
  return {
    type: types.UPDATE_REQUEST,
    payload: data,
  }
}
