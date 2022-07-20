import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import theme from '../../styles/theme'
import Button from '../Button'

export default function HomeHeader() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Olá, Rafo!</Text>
          <Text style={styles.subTitle}>Onde vamos investir hoje?</Text>
        </View>

        <View style={styles.profile} />
      </View>

      <View style={styles.moneyContainer}>
        <View style={styles.moneyContainerLeft}>
          <Text style={styles.moneyTitle}>Saldo disponível</Text>
          <TouchableOpacity style={styles.moneyButton}>
            <Text style={styles.moneyAmount}>R$ 1.000,00</Text>
            <Icon type="feather" name="eye" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.performanceBadge}>
          <Icon type="feather" name="trending-up" size={20} color="#549B3B" />
          <Text style={styles.performanceBadgeText}>+10%</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Button
          // @ts-ignore
          handleClick={() => navigation.navigate('Deposit')}
          margin="right"
          label="Depositar"
          iconPosition="left"
          icon={{
            type: 'feather',
            iconName: 'plus',
            size: 20,
            color: '#fff'
          }}
        />
        <Button
          // @ts-ignore
          handleClick={() => navigation.navigate('Withdraw')}
          label="Saque"
          type="outlined"
        />
      </View>

      <View style={styles.tabPush} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 290,
    backgroundColor: '#1C1D23',
    borderBottomEndRadius: 24,
    borderBottomStartRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 50,
    alignItems: 'center',
    zIndex: 100
  },
  topContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  headerContainer: {
    display: 'flex'
  },
  header: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Urbanist_700Bold',
    marginBottom: 4
  },
  subTitle: {
    color: '#fff',
    opacity: 0.6,
    fontSize: 14,
    fontFamily: 'Urbanist_400Regular'
  },
  profile: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    backgroundColor: '#D9D9D9'
  },
  moneyContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30
  },
  moneyContainerLeft: {
    display: 'flex'
  },
  moneyTitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Urbanist_400Regular',
    opacity: 0.6,
    marginBottom: 8
  },
  moneyAmount: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Urbanist_700Bold',
    marginRight: 12
  },
  moneyButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  performanceBadge: {
    display: 'flex',
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)'
  },
  performanceBadgeText: {
    color: '#549B3B',
    fontSize: 14,
    fontFamily: 'Urbanist_700Bold',
    marginLeft: 4
  },
  bottomContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  deposit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingVertical: 8,
    marginRight: 16
  },
  depositText: {
    color: '#549B3B',
    fontSize: 16,
    fontFamily: 'Urbanist_700Bold',
    marginLeft: 8
  },
  withdraw: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderColor: '#549B3B',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 8
  },
  withdrawText: {
    color: '#549B3B',
    fontSize: 16,
    fontFamily: 'Urbanist_700Bold',
    marginLeft: 8
  },
  tabPush: {
    width: 30,
    height: 4,
    backgroundColor: theme.colors.neutral.grayLight,
    borderRadius: 999,
    marginBottom: 4
  }
})
