import 'react-native-gesture-handler'
import { FlatList, View } from 'react-native'
import { setStatusBarStyle, StatusBar } from 'expo-status-bar'
import {
  HomeHeader,
  Portfolio,
  SectionHeader,
  StocksHome
} from '../../components'
import * as S from './styles'
import { useMemo } from 'react'
import theme from '../../styles/theme'

type Item = {
  key: string
  render: () => JSX.Element
  isHeader?: boolean
}

export default function Home() {
  setStatusBarStyle('light')

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
            <StocksHome />
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
          <S.SectionWrapper>
            <Portfolio />
          </S.SectionWrapper>
        )
      }
    ]

    const sectionIndexes: number[] = []

    items.forEach((item, index) => item.isHeader && sectionIndexes.push(index))

    return {
      sections: items,
      sectionIndexes
    }
  }, [])

  return (
    <View style={{ backgroundColor: 'white', overflow: 'visible' }}>
      <StatusBar style="light" />
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
