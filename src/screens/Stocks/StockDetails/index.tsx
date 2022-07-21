import { ImageSourcePropType } from 'react-native'
import { Chart } from '../../../components'

import * as S from './styles'

export default function StockDetails() {
  return (
    <S.Container>
      <S.PaddingWrapper>
        <S.StockHeader>
          <S.StockHeaderRight>
            <S.StockImage
              source={
                require('../../../../assets/stocks/apple.png') as ImageSourcePropType
              }
            />

            <S.StockHeaderWrapper>
              <S.StockHeaderTitle>AAPL</S.StockHeaderTitle>
              <S.StockHeaderSubtitle>Apple Inc.</S.StockHeaderSubtitle>
            </S.StockHeaderWrapper>
          </S.StockHeaderRight>

          <S.StockPriceWrapper>
            <S.StockPrice>R$ 1.232,00</S.StockPrice>
          </S.StockPriceWrapper>
        </S.StockHeader>
      </S.PaddingWrapper>
      <Chart />
    </S.Container>
  )
}
