import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed'
import theme from '../../styles/theme'
import * as S from './styles'
import { Feather } from '@expo/vector-icons'

type StockCardProps = {
  full?: boolean
  performance?: 'up' | 'down' | 'equal'
  handleClick?: () => void
}

export default function StockCard({
  full,
  performance,
  handleClick
}: StockCardProps) {
  if (full) {
    return (
      <S.Wallet onPress={handleClick}>
        <View>
          <Feather
            name="plus"
            size={24}
            color={theme.colors.text.onBackground}
          />
        </View>

        <View>
          <Text>AAPL</Text>
          <Text>Apple Inc.</Text>
        </View>

        <S.MiddleWrapper
          isDown={performance === 'down'}
          isUp={performance === 'up'}
        >
          <S.PerformanceAmount>R$ 121,00</S.PerformanceAmount>

          <S.PerformanceWrapper>
            <Feather
              name={performance === 'down' ? 'trending-down' : 'trending-up'}
              size={16}
              color={
                performance === 'down'
                  ? theme.colors.semantic.down
                  : performance === 'up'
                    ? theme.colors.primary.brand
                    : theme.colors.neutral.grayLight
              }
            />
            <S.PerformanceText>+22%</S.PerformanceText>
          </S.PerformanceWrapper>
        </S.MiddleWrapper>

        <S.leftWrapper>
          <S.AmountWrapper>
            <S.Currency>R$</S.Currency>
            <S.Amount>121.000,00</S.Amount>
          </S.AmountWrapper>
          <Text>123 Ações</Text>
        </S.leftWrapper>
      </S.Wallet>
    )
  } else {
    return (
      <TouchableOpacity style={styles.container} onPress={handleClick}>
        <View style={styles.headerContainer}>
          <View style={styles.leftContainer}>
            <View style={styles.iconContainer}>
              <Icon type="feather" name="smile" size={24} color="#000" />
            </View>

            <View style={styles.stockNameContainer}>
              <Text style={styles.stockCode}>{'AAPL'.toUpperCase()}</Text>
              <Text style={styles.stockName}>{'Apple Inc.'}</Text>
            </View>
          </View>

          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>+2,2%</Text>
          </View>
        </View>

        <View style={styles.price}>
          <Text style={styles.currency}>R$</Text>
          <Text style={styles.priceText}>1.000,00</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginRight: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff'
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1E1E1',
    padding: 4,
    borderRadius: 9999
  },
  stockCode: {
    fontSize: 14,
    fontFamily: 'Urbanist_700Bold'
  },
  stockName: {
    fontSize: 14,
    fontFamily: theme.fontWeight.medium,
    color: theme.colors.neutral.gray
  },
  stockNameContainer: {
    flexDirection: 'column',
    marginLeft: 8,
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  leftContainer: {
    flexDirection: 'row',
    alignContent: 'center'
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Urbanist_700Bold',
    color: '#549B3B',
    marginLeft: 4
  },
  price: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  priceText: {
    fontSize: 22,
    fontFamily: 'Urbanist_700Bold'
  },
  currency: {
    fontSize: 12,
    lineHeight: 22,
    marginRight: 4
  }
})
