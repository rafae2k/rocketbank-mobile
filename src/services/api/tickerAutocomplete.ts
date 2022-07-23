import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { TAutocompleteDropdownItem } from 'react-native-autocomplete-dropdown'

const AUTOCOMPLETE_BASE_URL = 'https://ticker-2e1ica8b9.now.sh/keyword'

const apiClient = axios.create({
  baseURL: AUTOCOMPLETE_BASE_URL
})

export type AutocompleteResponse = {
  symbol: string
  name: string
}

const getAutocomplete = async (keyword: string) => {
  const response = await apiClient.get<AutocompleteResponse[]>(`/${keyword}`)
  return response.data
}

export const useTickerAutocomplete = (ticker: string) => {
  const { isLoading, data, error, refetch } = useQuery<
    TAutocompleteDropdownItem[],
    Error
  >(
    ['get-autocomplete', ticker],
    async () => {
      const res = await getAutocomplete(ticker)
      return res.map((item) => ({
        id: item.symbol,
        title: `${item.symbol} - ${item.name}`
      }))
    },
    {
      enabled: !!ticker,
      retry: false
    }
  )

  return { isLoading, data, refetch, error }
}
