import { useState } from 'react'
import { LineChart, TLineChartDataProp } from 'react-native-wagmi-charts'
import * as haptic from 'expo-haptics'
import { DataRanges, useTickerQuotes } from '../../services/api/tickerQuotes'
import { Text } from 'react-native'

import theme from '../../styles/theme'
import * as S from './styles'

const periods: DataRanges[] = [
  '1d',
  '5d',
  '1mo',
  '6mo',
  '1y',
  '5y',
  'ytd',
  'max'
]

function invokeHaptic() {
  // eslint-disable-next-line
  void haptic.impactAsync(haptic.ImpactFeedbackStyle.Light)
}

type ChartProps = {
  ticker: string
}

export default function Chart({ ticker }: ChartProps) {
  const [periodSelected] = useState('1d')
  const [clicked, setClicked] = useState(false)
  const [range, setRange] = useState<DataRanges>('1d')

  const { isLoading, data } = useTickerQuotes(ticker, range)

  const handleClick = () => {
    setClicked(!clicked)
    invokeHaptic()
  }

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <S.Container>
      <LineChart.Provider data={data?.chartData as TLineChartDataProp}>
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
          >
            &nbsp; em &nbsp;
          </Text>
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
              onPress={() => setRange(period)}
              isSelected={period === range}
            >
              <S.ButtonText isSelected={period === range}>
                {period}
              </S.ButtonText>
            </S.Button>
          ))}
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Container>
  )
}
