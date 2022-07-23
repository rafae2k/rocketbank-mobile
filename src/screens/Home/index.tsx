import 'react-native-gesture-handler'
import { useMemo } from 'react'
import { FlatList, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import _ from 'lodash'

import { HomeHeader, SectionHeader, StockCard } from '../../components'
import * as S from './styles'
import theme from '../../styles/theme'
import { STOCKS } from '../../utils/constants/stocksCodes'

export type Item = {
  key: string
  render: () => JSX.Element
  isHeader?: boolean
}

export default function Home() {
  const navigation = useNavigation()

  const { sections, sectionIndexes } = useMemo(() => {
    const items: Item[] = [
      {
        key: 'STOCKS_HEADER',
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
        ),
        isHeader: true
      },
      {
        key: 'STOCKS_LIST',
        render: () => (
          <S.SectionWrapper>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
              data={_.shuffle(STOCKS)}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <StockCard
                  ticker={item.id}
                  companyName={item.name}
                  performance="up"
                  handleClick={() =>
                    // @ts-ignore
                    navigation.navigate('StockDetails', {
                      companyName: item.name,
                      ticker: item.id
                    })
                  }
                />
              )}
            />
          </S.SectionWrapper>
        )
      },
      {
        key: 'PORTFOLIO_HEADER',
        render: () => (
          <SectionHeader
            title="Minha Carteira"
            icon={{
              handleClick: () => {},
              type: 'feather',
              color: theme.colors.text.onBackground,
              size: 24,
              iconName: 'chevron-right'
            }}
          />
        ),
        isHeader: true
      },
      {
        key: 'PORTFOLIO_LIST',
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

    const sectionIndexes: number[] = []

    items.forEach((item, index) => item.isHeader && sectionIndexes.push(index))

    return {
      sections: items,
      sectionIndexes
    }
  }, [navigation])

  return (
    <View style={{ backgroundColor: 'white', overflow: 'visible' }}>
      <S.SectionWrapper>
        <HomeHeader />
      </S.SectionWrapper>

      <S.Container>
        <FlatList
          data={sections}
          renderItem={({ item }) => item.render()}
          keyExtractor={(item) => item.key}
          stickyHeaderIndices={sectionIndexes}
          onRefresh={() => {}}
          refreshing={false}
          showsVerticalScrollIndicator={false}
        />
      </S.Container>
    </View>
  )
}
