import { getFormattedDate } from './handlingDates'

const url =
  'https://api.bcb.gov.br/dados/serie/bcdata.sgs.24363/dados?formato=json'

const defaultReturn = {
  data: [],
  loading: false,
  error: false,
}

export async function getEconomicActivity(filters) {
  const start = getFormattedDate(filters.startDate)
  const final = getFormattedDate(filters.finalDate)

  try {
    const request = await fetch(
      url + `&dataInicial=${start}&dataFinal=${final}`,
    )
    const response = await request.json()

    return { ...defaultReturn, data: response }
  } catch (error) {
    return { ...defaultReturn, error: true }
  }
}
