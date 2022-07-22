import { useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import CurrencyInput from 'react-native-currency-input'

import * as S from './styles'
import { Button } from '../../../../components'
import { StatusBar } from 'expo-status-bar'
import { BalanceInfo } from '../../../../components/BalanceInfo'

const ACCOUNTS = [
  'Banco XP - CC 09123-4',
  'Nubank - CC 09123-4',
  'Inter - CC 09123-4',
  'Santander - CC 09123-4'
]

export default function Withdraw() {
  const [selectedAccount, setSelectedAccount] = useState('')
  const [value, setValue] = useState(null)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior="height">
        <StatusBar style="light" />
        <S.PickerWrapper>
          <Picker
            selectedValue={selectedAccount}
            onValueChange={(itemValue) => setSelectedAccount(itemValue)}
          >
            {ACCOUNTS.map((account) => (
              <Picker.Item key={account} label={account} value={account} />
            ))}
          </Picker>
        </S.PickerWrapper>
        <S.Container>
          <S.AmountWrapper>
            <S.Heading>Qual valor deseja sacar?</S.Heading>
            <S.InputWrapper>
              <CurrencyInput
                placeholder="R$ 100"
                keyboardType="numeric"
                prefix="R$"
                delimiter="."
                separator=","
                precision={2}
                minValue={0}
                value={value}
                // @ts-ignore
                onChangeValue={setValue}
                style={{
                  fontSize: 32
                }}
              />
              <S.Line />
            </S.InputWrapper>

            <BalanceInfo
              title="Saldo disponível"
              balanceFormatted="R$ 200.012,00"
            />
          </S.AmountWrapper>

          <S.ButtonWrapper>
            <Button
              label="Sacar"
              iconPosition="left"
              handleClick={() => {}}
              icon={{
                type: 'feather',
                iconName: 'dollar-sign',
                size: 24,
                color: '#fff'
              }}
            />
          </S.ButtonWrapper>
        </S.Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  )
}
