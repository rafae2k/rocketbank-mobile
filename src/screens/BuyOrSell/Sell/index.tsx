import { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import RNPickerSelects from 'react-native-picker-select'

import * as S from './styles'
import CurrencyInput from 'react-native-currency-input'
import theme from '../../../styles/theme'
import { Button } from '../../../components'
import { formatToCurrency } from '../../../utils/currencyFormatter'

export default function Buy() {
  const STOCK_PRICE = 10
  const BALANCE = 100
  const type = 'venda'

  const [state, setState] = useState({
    quantity: 0,
    total: 0,
    buyerPower: BALANCE - STOCK_PRICE,
    isAboveLimit: BALANCE < STOCK_PRICE
  })

  const [, setOrderType] = useState('')
  const [orderFocus, setOrderFocus] = useState(false)

  const handleChangeQuantity = (value: number) => {
    setState({
      ...state,
      quantity: value,
      total: value * STOCK_PRICE,
      buyerPower: BALANCE - value * STOCK_PRICE,
      isAboveLimit: BALANCE < value * STOCK_PRICE
    })
  }

  const totalFormatted = formatToCurrency(state.total, 'pt-BR', 'BRL')
  const priceFormatted = formatToCurrency(STOCK_PRICE, 'pt-BR', 'BRL')
  const balanceFormatted = formatToCurrency(state.buyerPower, 'pt-BR', 'BRL')
  const stockPriceFormatted = formatToCurrency(STOCK_PRICE, 'pt-BR', 'BRL')

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.TopContainer>
          <S.ItemWrapper>
            <S.Right>Tipo de ordem</S.Right>
            <RNPickerSelects
              onValueChange={(value: string) => setOrderType(value)}
              items={[
                { label: 'Limitada', value: 'limitada' },
                { label: 'a mercado', value: 'a-mercado' },
                { label: 'Stop Loss', value: 'hockey' }
              ]}
              placeholder={{
                label: 'Selecione o tipo de ordem'
              }}
              onOpen={() => setOrderFocus(!orderFocus)}
              onClose={() => setOrderFocus(!orderFocus)}
              style={{
                placeholder: {
                  color: orderFocus
                    ? theme.colors.primary.brand
                    : theme.colors.neutral.gray,
                  fontSize: 14,
                  fontFamily: theme.fontWeight.medium
                },
                viewContainer: {
                  borderWidth: 1,
                  borderColor: orderFocus
                    ? theme.colors.primary.brand
                    : theme.colors.neutral.gray,
                  padding: 8,
                  borderRadius: 4
                }
              }}
            />
          </S.ItemWrapper>

          <S.ItemWrapper>
            <S.Right>Preço Atual</S.Right>
            <S.Left>{priceFormatted}</S.Left>
          </S.ItemWrapper>

          <S.ItemWrapper>
            <S.Right>Quantidade</S.Right>
            <S.InputWrapper>
              <CurrencyInput
                placeholder="100"
                keyboardType="numeric"
                prefix=""
                delimiter="."
                separator=""
                precision={0}
                minValue={0}
                value={state.quantity}
                // @ts-ignore
                onChangeValue={(value) => handleChangeQuantity(value)}
                style={{
                  fontSize: 22
                }}
              />
              <S.Line />
            </S.InputWrapper>
          </S.ItemWrapper>

          <S.BalanceWrapper>
            <S.BalanceText>{`Poder de ${type}`}</S.BalanceText>
            <S.Balance isAbove={state.isAboveLimit}>
              {balanceFormatted}
            </S.Balance>
          </S.BalanceWrapper>
        </S.TopContainer>

        <S.CenterHeader>Detalhes</S.CenterHeader>
        <S.RecipeContainer>
          <S.ItemWrapper>
            <S.Right>Taxas</S.Right>
            <S.Right>R$ 12,99</S.Right>
          </S.ItemWrapper>

          <S.ItemWrapper>
            <S.Right>Preço de compra</S.Right>
            <S.Right>{stockPriceFormatted}</S.Right>
          </S.ItemWrapper>

          <S.ItemWrapper>
            <S.Right>Quantidade</S.Right>
            <S.Right>{state.quantity}</S.Right>
          </S.ItemWrapper>

          <S.TotalWrapper>
            <S.TotalHeader>Total</S.TotalHeader>
            <S.TotalAmount>{totalFormatted}</S.TotalAmount>
          </S.TotalWrapper>
        </S.RecipeContainer>

        <S.ButtonWrapper>
          <Button
            label="Vender"
            disabled={state.isAboveLimit}
            operation="sell"
          />
        </S.ButtonWrapper>
      </S.Container>
    </TouchableWithoutFeedback>
  )
}
