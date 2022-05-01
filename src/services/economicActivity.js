import { getFormattedDate } from './handlingDates'

const url =
  'https://api.bcb.gov.br/dados/serie/bcdata.sgs.24363/dados?formato=json'

export async function getEconomicActivity(filters) {
  const start = getFormattedDate(filters.startDate)
  const final = getFormattedDate(filters.finalDate)

  console.log(start, final)

  const request = await fetch(url + `&dataInicial=${start}&dataFinal=${final}`)
  const response = await request.json()

  console.log(response)
}
