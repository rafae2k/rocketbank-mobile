import { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import RNPickerSelects from 'react-native-picker-select'
import { NavigationProp, RouteProp } from '@react-navigation/native'

import * as S from './styles'
import CurrencyInput from 'react-native-currency-input'
import { useTickerQuotes } from '../../../../services/api/tickerQuotes'
import { formatToCurrency } from '../../../../utils/currencyFormatter'
import { BalanceInfo } from '../../../../components/BalanceInfo'
import { Button } from '../../../../components'
import theme from '../../../../styles/theme'
import { TopTabBuyOrSellParamList } from '../../../../routes/TopTab'

type BuyProps = {
  route: RouteProp<TopTabBuyOrSellParamList, 'Buy'>
  navigation: NavigationProp<TopTabBuyOrSellParamList, 'Buy'>
}

export default function Buy({ route, navigation }: BuyProps) {
  const BALANCE = 43123.12
  const ticker = 'AAPL'

  console.log('Buy route', route)

  // const { ticker } = route.params

  const { data } = useTickerQuotes(ticker)

  const [state, setState] = useState({
    quantity: 0,
    total: 0,
    buyerPower: BALANCE - (data?.price || 0),
    isAboveLimit: BALANCE < (data?.price || 0)
  })

  const [, setOrderType] = useState('')
  const [orderFocus, setOrderFocus] = useState(false)

  const handleChangeQuantity = (value: number) => {
    setState({
      ...state,
      quantity: value,
      total: value * (data?.price || 0),
      buyerPower: BALANCE - value * (data?.price || 0),
      isAboveLimit: BALANCE < value * (data?.price || 0)
    })
  }

  const totalFormatted = formatToCurrency(state.total, 'pt-BR', data?.currency)
  const priceFormatted = formatToCurrency(
    data?.price || 0,
    'pt-BR',
    data?.currency
  )
  const balanceFormatted = formatToCurrency(
    state.buyerPower,
    'pt-BR',
    data?.currency
  )
  const stockPriceFormatted = formatToCurrency(
    data?.price || 0,
    'pt-BR',
    data?.currency
  )

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

          <BalanceInfo
            title="Poder de Compra"
            balanceFormatted={balanceFormatted}
            isAboveLimit={state.isAboveLimit}
          />
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
            label="Comprar"
            disabled={state.isAboveLimit}
            // @ts-ignore
            handleClick={() => navigation.navigate('Home')}
          />
        </S.ButtonWrapper>
      </S.Container>
    </TouchableWithoutFeedback>
  )
}
