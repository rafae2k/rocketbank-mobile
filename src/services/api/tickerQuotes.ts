import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const YAHOO_FINANCE_BASE_URL = 'https://query1.finance.yahoo.com/v7/finance'

const apiClient = axios.create({
  baseURL: YAHOO_FINANCE_BASE_URL
})

export type IYahooFinanceResponse = {
  spark: {
    result: {
      symbol: string
      response: {
        meta: {
          currency: string
          regularMarketPrice: number
        }
        timestamp: number[]
        indicators: {
          quote: {
            close: number[]
          }[]
        }
      }[]
    }[]
  }
  name: string
}

export type DataRanges =
  | '1d'
  | '5d'
  | '1mo'
  | '3mo'
  | '6mo'
  | '1y'
  | '2y'
  | '5y'
  | 'ytd'
  | 'max'

export type getTickerQuotesProps = {
  symbol: string
  range: DataRanges
}

export type GetTickerQuotesReturn = {
  symbol: string
  currency: string
  price: number
  chartData: {
    timestamp: number
    value: number
  }[]
}

const getTickerQuotes = async ({
  symbol,
  range
}: getTickerQuotesProps): Promise<GetTickerQuotesReturn> => {
  let t = '15m'

  if (range === '1d') t = '15m'
  if (range === '5d') t = '1h'
  if (range === '1mo') t = '1h'
  if (range === '6mo') t = '5d'
  if (range === '1y') t = '5d'
  if (range === '5y') t = '1wk'
  if (range === 'ytd') t = '5d'
  if (range === 'max') t = '1wk'

  const res = await apiClient
    .get<IYahooFinanceResponse>(
      `/spark?symbols=${symbol}&range=${range}&interval=${t}&indicators=close&includeTimestamps=true&includePrePost=false&corsDomain=finance.yahoo.com&.tsrc=finance`
    )
    .then((res) => res.data.spark.result)

  return {
    symbol: res[0].symbol,
    currency: res[0].response[0].meta.currency,
    price: res[0].response[0].meta.regularMarketPrice,
    chartData: res[0].response[0].timestamp.map((t, i) => ({
      timestamp: t,
      value: res[0].response[0].indicators.quote[0].close[i]
    }))
  }
}

export const useTickerQuotes = (ticker: string, range: DataRanges = '1d') => {
  const { isLoading, isError, data, error } = useQuery<GetTickerQuotesReturn>(
    ['ticker-quotes', ticker, range],
    async () => await getTickerQuotes({ symbol: ticker, range })
  )

  return { isLoading, isError, data, error }
}
