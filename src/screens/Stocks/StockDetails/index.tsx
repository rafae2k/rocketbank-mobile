import { useNavigation } from '@react-navigation/native'
import type { RouteProp } from '@react-navigation/native'
import { Button, Chart } from '../../../components'
import { StockInfoWithLogo } from '../../../components/StockInfoWithLogo'
import { StacksParamList } from '../../../routes/Stacks'

import * as S from './styles'
import { useTickerQuotes } from '../../../services/api/tickerQuotes'
import { formatToCurrency } from '../../../utils/currencyFormatter'

type StockDetailsProps = {
  route: RouteProp<StacksParamList, 'StockDetails'>
}

export default function StockDetails({ route }: StockDetailsProps) {
  const navigation = useNavigation()

  const { ticker, companyName } = route.params

  const { data } = useTickerQuotes(ticker)

  return (
    <S.Container>
      <S.Content>
        <S.StockHeader>
          <S.StockHeaderRight>
            <StockInfoWithLogo
              image={`https://storage.googleapis.com/avenue-symlogos/${ticker}.png`}
              stockCode={ticker}
              companyName={companyName}
              big
              onDark
            />
          </S.StockHeaderRight>

          <S.StockPriceWrapper>
            <S.StockPrice>
              {formatToCurrency(
                data?.price || 0,
                'pt-BR',
                data?.currency || 'BRL'
              )}
            </S.StockPrice>
          </S.StockPriceWrapper>
        </S.StockHeader>
      </S.Content>
      <Chart ticker={ticker} />
      <S.ButtonsWrapper>
        <Button
          label="Comprar"
          margin="right"
          handleClick={() =>
            // @ts-ignore
            navigation.navigate('BuyOrSell', {
              screen: 'BUY',
              params: { ticker }
            })
          }
        />
        <Button
          label="Vender"
          operation="sell"
          handleClick={() =>
            // @ts-ignore
            navigation.navigate('BuyOrSell', {
              screen: 'SELL',
              params: { ticker }
            })
          }
        />
      </S.ButtonsWrapper>
    </S.Container>
  )
}
