import * as S from './styles'

export type StockInfoWithLogoProps = {
  image: string
  stockCode: string
  companyName: string
  big?: boolean
  onDark?: boolean
}

export function StockInfoWithLogo({
  image = 'https://storage.googleapis.com/avenue-symlogos/AAPL.png',
  stockCode = 'AAPL',
  companyName = 'Apple Inc.',
  big = false,
  onDark = false
}: StockInfoWithLogoProps) {
  return (
    <S.Container>
      <S.StockLogo
        big={big}
        source={{
          uri: image
        }}
      />
      <S.StockInfo>
        <S.StockCode onDark={onDark} big={big}>
          {stockCode}
        </S.StockCode>
        <S.CompanyName onDark={onDark} big={big}>
          {companyName}
        </S.CompanyName>
      </S.StockInfo>
    </S.Container>
  )
}
