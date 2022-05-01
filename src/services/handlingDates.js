export function getPreviousYears(yearsToSubtract) {
  const today = new Date()
  today.setFullYear(today.getFullYear() - yearsToSubtract)
  return today
}

export function getFormattedDate(date) {
  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
}

export function transformBrToInternationalDate(brDate) {
  const splitted = brDate.split('/')
  const converted = `${splitted[1]}/${splitted[0]}/${splitted[2]}`
  return new Date(converted)
}
