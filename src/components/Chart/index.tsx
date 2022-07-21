import { useState } from 'react'
import { LineChart } from 'react-native-wagmi-charts'
import * as haptic from 'expo-haptics'

import * as S from './styles'
import theme from '../../styles/theme'

const data1 = [
  {
    timestamp: 1625945400000,
    value: 33575.25
  },
  {
    timestamp: 1625946300000,
    value: 33545.25
  },
  {
    timestamp: 1625947200000,
    value: 33510.25
  },
  {
    timestamp: 1625948100000,
    value: 33215.25
  }
]

const data2 = [
  {
    timestamp: 162945400000,
    value: 1
  },
  {
    timestamp: 1625946300000,
    value: 2
  },
  {
    timestamp: 1625947200000,
    value: 5
  },
  {
    timestamp: 1625948100000,
    value: 20
  }
]

const periods = ['1d', '5d', '1M', '6M', 'YTD', '1Y', '5Y', 'MAX']

function invokeHaptic() {
  // eslint-disable-next-line
  void haptic.impactAsync(haptic.ImpactFeedbackStyle.Light)
}

export default function Chart() {
  const [periodSelected, setPeriodSelected] = useState('1d')

  return (
    <S.Container>
      <LineChart.Provider data={periodSelected === '1d' ? data1 : data2}>
        <LineChart>
          <LineChart.Path color={periodSelected === '1d' ? 'red' : 'green'}>
            <LineChart.Gradient />
          </LineChart.Path>
          <LineChart.CursorCrosshair
            onActivated={invokeHaptic}
            onEnded={invokeHaptic}
            color={periodSelected === '1d' ? 'red' : 'green'}
          >
            <LineChart.Tooltip
              style={{
                backgroundColor: theme.colors.neutral.grayLight,
                borderRadius: 4
              }}
            />
          </LineChart.CursorCrosshair>
        </LineChart>
        <LineChart.PriceText />
        <LineChart.DatetimeText />
      </LineChart.Provider>
      <S.Wrapper>
        <S.ButtonWrapper>
          {periods.map((period) => (
            <S.Button
              key={period}
              onPress={() => setPeriodSelected(period)}
              isSelected={period === periodSelected}
            >
              <S.ButtonText isSelected={period === periodSelected}>
                {period}
              </S.ButtonText>
            </S.Button>
          ))}
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
