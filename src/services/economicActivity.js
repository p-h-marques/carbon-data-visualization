import {
  getFormattedDate,
  transformBrToInternationalDate,
} from './handlingDates'

const url =
  'https://api.bcb.gov.br/dados/serie/bcdata.sgs.24363/dados?formato=json'

const defaultReturn = {
  data: [],
  loading: false,
  error: false,
}

function mapResponse(response) {
  return response.map(obj => {
    return {
      ...obj,
      group: 'main',
      data: transformBrToInternationalDate(obj.data),
    }
  })
}

export async function getEconomicActivity(filters) {
  const start = getFormattedDate(filters.startDate)
  const final = getFormattedDate(filters.finalDate)

  try {
    const request = await fetch(
      url + `&dataInicial=${start}&dataFinal=${final}`,
    )
    const response = await request.json()

    return { ...defaultReturn, data: mapResponse(response) }
  } catch (error) {
    return { ...defaultReturn, error: true }
  }
}
