import * as S from './styles'

interface BalanceInfoProps {
  title: string
  balanceFormatted: string
  isAboveLimit?: boolean
}

export function BalanceInfo({
  title,
  balanceFormatted,
  isAboveLimit = false
}: BalanceInfoProps) {
  return (
    <S.BalanceWrapper>
      <S.BalanceText>{title}</S.BalanceText>
      <S.Balance isAbove={isAboveLimit}>{balanceFormatted}</S.Balance>
    </S.BalanceWrapper>
  )
}
