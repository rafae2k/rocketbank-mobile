import { useNavigation } from '@react-navigation/native'
import { useMemo, useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native'
import {
  AutocompleteDropdown,
  TAutocompleteDropdownItem
} from 'react-native-autocomplete-dropdown'

import { SectionHeader, StockCard } from '../../components'
import theme from '../../styles/theme'
import * as S from './styles'
import { Item } from '../Home'

const data = [
  {
    id: 'APPL',
    title: 'APPL - Apple Inc'
  },
  {
    id: 'PETR4',
    title: 'PETR4 - Petrobras '
  },
  {
    id: 'VVAR3',
    title: 'VVAR3 - Viavarejo'
  }
]

const stocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

export default function Stocks() {
  const [selectedItem, setSelectedItem] =
    useState<TAutocompleteDropdownItem | null>(null)

  const navigation = useNavigation()

  const { sections, sectionsIndexes } = useMemo(() => {
    let searchResult: Item[] = []

    if (selectedItem) {
      searchResult = [
        {
          key: 'SEARCH_RESULT',
          isHeader: true,
          render: () => <SectionHeader title="Resultados" />
        },
        {
          key: 'STOCK',
          isHeader: false,
          render: () => (
            <S.Margin>
              <StockCard
                full
                performance="up"
                handleClick={() =>
                  // @ts-ignore
                  navigation.navigate('StockDetails', {
                    stockId: 'AAPL'
                  })
                }
              />
            </S.Margin>
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
          <S.Margin>
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
          </S.Margin>
        )
      },
      {
        key: 'STOCKS_LIST',
        render: () => (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={stocks}
            keyExtractor={(item) => String(item)}
            renderItem={() => (
              <S.Margin>
                <StockCard
                  full
                  performance="up"
                  handleClick={() =>
                    // @ts-ignore
                    navigation.navigate('StockDetails', {
                      stockId: 'AAPL'
                    })
                  }
                />
              </S.Margin>
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

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          closeOnSubmit={false}
          initialValue={{ id: '2' }} // or just '2'
          onSelectItem={(item) => setSelectedItem(item)}
          dataSet={data}
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
