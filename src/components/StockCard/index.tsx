import { Feather } from '@expo/vector-icons'
import { useTickerQuotes } from '../../services/api/tickerQuotes'

import * as S from './styles'
import theme from '../../styles/theme'
import { StockInfoWithLogo } from '../StockInfoWithLogo'

export type StockCardProps = {
  handleClick?: () => void
  full?: boolean
  performance?: 'up' | 'down' | 'equal'
  ticker: string
  companyName: string
}

export default function StockCard({
  full = false,
  performance,
  handleClick,
  ticker,
  companyName
}: StockCardProps) {
  const { data } = useTickerQuotes(ticker)

  return (
    <S.Wallet onPress={handleClick} full={full}>
      <S.Wrapper full={full}>
        <StockInfoWithLogo
          image={`https://storage.googleapis.com/avenue-symlogos/${ticker}.png`}
          stockCode={ticker}
          companyName={companyName}
        />

        <S.MiddleWrapper isUp={performance === 'up'} full={full}>
          <S.PerformanceAmount full={full}>R$ 121,00</S.PerformanceAmount>

          <S.PerformanceWrapper>
            <Feather
              name={performance === 'down' ? 'trending-down' : 'trending-up'}
              size={16}
              color={
                performance === 'down'
                  ? theme.colors.semantic.down
                  : theme.colors.primary.brand
              }
            />
            <S.PerformanceText>+22%</S.PerformanceText>
          </S.PerformanceWrapper>
        </S.MiddleWrapper>
      </S.Wrapper>

      <S.leftWrapper>
        <S.AmountWrapper full={full}>
          <S.Currency>{data?.currency}</S.Currency>
          <S.Amount>{data?.price.toFixed(2)}</S.Amount>
        </S.AmountWrapper>
        <S.StocksAmount full={full}>123 Ações</S.StocksAmount>
      </S.leftWrapper>
    </S.Wallet>
  )
}
