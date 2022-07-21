import { useNavigation } from '@react-navigation/native'
import { ImageSourcePropType } from 'react-native'
import { Button, Chart } from '../../../components'

import * as S from './styles'

export default function StockDetails() {
  const navigation = useNavigation()

  return (
    <S.Container>
      <S.Content>
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
      </S.Content>
      <Chart />
      <S.ButtonsWrapper>
        <Button
          label="Comprar"
          margin="right"
          handleClick={() =>
            // @ts-ignore
            navigation.navigate('BuyOrSell', {
              stockId: 'AAPL',
              screen: 'BUY'
            })
          }
        />
        <Button
          label="Vender"
          operation="buy"
          handleClick={() =>
            // @ts-ignore
            navigation.navigate('BuyOrSell', {
              stockId: 'AAPL',
              screen: 'SELL'
            })
          }
        />
      </S.ButtonsWrapper>
    </S.Container>
  )
}
