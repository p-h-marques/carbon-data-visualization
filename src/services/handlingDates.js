export function getPreviousYears(yearsToSubtract) {
  const today = new Date()
  today.setFullYear(today.getFullYear() - yearsToSubtract)
  return today
}

export function getFormattedDate(date) {
  return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
}
