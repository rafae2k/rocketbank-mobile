import StockCard from '../StockCard'
import * as S from './styles'

export default function Portfolio() {
  const stocks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 6, 7, 8, 9, 10]

  return (
    <S.Container>
      {stocks.map((stock, i) => (
        <S.StockWrapper key={i}>
          <StockCard full performance="up" />
        </S.StockWrapper>
      ))}
    </S.Container>
  )
}
