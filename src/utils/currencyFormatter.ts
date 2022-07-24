export const formatToCurrency = (
  value: number,
  country = 'pt-BR',
  currency = 'USD'
) => {
  return new Intl.NumberFormat(country, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(value)
}
