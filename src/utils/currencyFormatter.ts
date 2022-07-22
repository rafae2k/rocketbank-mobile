export const formatToCurrency = (
  value: number,
  country: string,
  currency: string
) => {
  return new Intl.NumberFormat(country, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(value)
}
