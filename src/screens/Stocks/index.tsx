import { useNavigation } from '@react-navigation/native'
import { useCallback, useMemo, useRef, useState } from 'react'
import {
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Platform
} from 'react-native'
import {
  AutocompleteDropdown,
  TAutocompleteDropdownItem
} from 'react-native-autocomplete-dropdown'

import { SectionHeader, StockCard } from '../../components'
import theme from '../../styles/theme'
import * as S from './styles'
import { Item } from '../Home'
import { useTickerAutocomplete } from '../../services/api/tickerAutocomplete'
import { STOCKS } from '../../utils/constants/stocksCodes'

export default function Stocks() {
  const navigation = useNavigation()

  const [selectedItem, setSelectedItem] =
    useState<TAutocompleteDropdownItem | null>(null)
  const dropdownController = useRef(null)
  const searchRef = useRef(null)
  const [ticker, setTicker] = useState('')

  const { sections, sectionsIndexes } = useMemo(() => {
    let searchResult: Item[] = []

    if (selectedItem) {
      searchResult = [
        {
          key: 'SEARCH_RESULT',
          isHeader: true,
          render: () => <SectionHeader title="Resultado da pesquisa" />
        },
        {
          key: 'STOCK',
          isHeader: false,
          render: () => (
            <StockCard
              ticker={selectedItem.id}
              companyName={selectedItem?.title?.split('- ')[1] as string}
              full
              performance="up"
              handleClick={() =>
                // @ts-ignore
                navigation.navigate('StockDetails', {
                  ticker: selectedItem.id,
                  companyName: selectedItem?.title?.split('- ')[1] as string
                })
              }
            />
          )
        }
      ]
    }

    const items: Item[] = [
      ...searchResult,
      {
        key: 'STOCKS_HEADER',
        isHeader: true,
        render: () => (
          <SectionHeader
            title="Ações"
            icon={{
              handleClick: () => {},
              type: 'feather',
              color: theme.colors.neutral.black,
              size: 24,
              iconName: 'chevron-right'
            }}
          />
        )
      },
      {
        key: 'STOCKS_LIST',
        render: () => (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={STOCKS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <StockCard
                ticker={item.id}
                companyName={item.name}
                full
                performance="up"
                handleClick={() =>
                  // @ts-ignore
                  navigation.navigate('StockDetails', {
                    ticker: item.id,
                    companyName: item.name
                  })
                }
              />
            )}
          />
        )
      }
    ]

    const sectionsIndexes: number[] = []

    items.forEach((item, index) => item.isHeader && sectionsIndexes.push(index))

    return {
      sections: items,
      sectionsIndexes
    }
  }, [navigation, selectedItem])

  const { isLoading, data, refetch } = useTickerAutocomplete(ticker)

  const onClearPress = useCallback(() => {
    setSelectedItem(null)
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <AutocompleteDropdown
          // @ts-ignore
          ref={searchRef}
          controller={(controller) => {
            // @ts-ignore
            dropdownController.current = controller
          }}
          direction={Platform.select({ ios: 'down' })}
          dataSet={data}
          onChangeText={(e) => setTicker(e)}
          onSelectItem={(item) => setSelectedItem(item)}
          debounce={400}
          suggestionsListMaxHeight={400}
          onClear={onClearPress}
          onSubmit={() => void refetch()}
          loading={isLoading}
          useFilter={false}
          containerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.colors.neutral.grayLight,
            paddingHorizontal: 16,
            borderRadius: 4,
            height: 52,
            marginBottom: 16
          }}
          textInputProps={{
            placeholder: 'Pesquisar',
            placeholderTextColor: theme.colors.neutral.gray
          }}
          inputContainerStyle={{
            backgroundColor: theme.colors.neutral.grayLight
          }}
        />

        <S.SectionWrapper>
          <FlatList
            data={sections}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={sectionsIndexes}
            onRefresh={() => {}}
            refreshing={false}
            showsVerticalScrollIndicator={false}
          />
        </S.SectionWrapper>
      </S.Container>
    </TouchableWithoutFeedback>
  )
}
