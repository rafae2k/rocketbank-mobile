import theme from '../../styles/theme'
import * as S from './styles'
import { Feather } from '@expo/vector-icons'
import { StockInfoWithLogo } from '../StockInfoWithLogo'

export type StockCardProps = {
  full?: boolean
  performance?: 'up' | 'down' | 'equal'
  handleClick?: () => void
}

export default function StockCard({
  full = false,
  performance,
  handleClick
}: StockCardProps) {
  return (
    <S.Wallet onPress={handleClick} full={full}>
      <S.Wrapper full={full}>
        <StockInfoWithLogo
          image="https://storage.googleapis.com/avenue-symlogos/AAPL.png"
          stockCode="AAPL"
          companyName="XP Investimentos"
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
          <S.Currency>R$</S.Currency>
          <S.Amount>121.000,00</S.Amount>
        </S.AmountWrapper>
        <S.StocksAmount full={full}>123 Ações</S.StocksAmount>
      </S.leftWrapper>
    </S.Wallet>
  )
}
