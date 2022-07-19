import 'react-native-gesture-handler'
import { setStatusBarStyle } from 'expo-status-bar'
import { HomeHeader, Portfolio, StocksHome } from '../../components'
import * as S from './styles'
import { ScrollView } from 'react-native-gesture-handler'

export default function Home() {
  setStatusBarStyle('light')

  return (
    <ScrollView>
      <S.SectionWrapper>
        <HomeHeader />
      </S.SectionWrapper>

      <S.Container>
        <S.SectionWrapper>
          <StocksHome />
        </S.SectionWrapper>

        <S.SectionWrapper>
          <Portfolio />
        </S.SectionWrapper>
      </S.Container>
    </ScrollView>
  )
}
