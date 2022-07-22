import { useState } from 'react'
import { LineChart } from 'react-native-wagmi-charts'
import * as haptic from 'expo-haptics'

import * as S from './styles'
import theme from '../../styles/theme'
import { Text } from 'react-native'

const data1 = [
  {
    timestamp: 1625945400000,
    value: 33575.25
  },
  {
    timestamp: 1625946300000,
    value: 42545.25
  },
  {
    timestamp: 1625947200000,
    value: 2310.25
  },
  {
    timestamp: 1625948100000,
    value: 15215.25
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
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
    invokeHaptic()
  }

  return (
    <S.Container>
      <LineChart.Provider data={periodSelected === '1d' ? data1 : data2}>
        <LineChart>
          <LineChart.Path color={periodSelected === '1d' ? 'red' : 'green'}>
            <LineChart.Gradient />
          </LineChart.Path>
          <LineChart.CursorCrosshair
            onActivated={handleClick}
            onEnded={handleClick}
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

        <S.ChartDetails isClicked={clicked}>
          <LineChart.PriceText
            format={({ value }) => {
              'worklet'
              return `R$ ${value}`
            }}
            style={{
              color: theme.colors.neutral.white,
              fontSize: 16,
              fontFamily: theme.fontWeight.medium
            }}
          />
          <Text
            style={{
              color: theme.colors.neutral.white,
              fontSize: 16,
              fontFamily: theme.fontWeight.medium
            }}
          >&nbsp; em &nbsp;</Text>
          <LineChart.DatetimeText
            style={{
              color: theme.colors.neutral.white,
              fontSize: 16,
              fontFamily: theme.fontWeight.medium
            }}
          />
        </S.ChartDetails>
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
