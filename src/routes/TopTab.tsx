import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Deposit, Withdraw, Buy, Sell } from '../screens'
import theme from '../styles/theme'

const headerOptionsDark = {
  tabBarStyle: {
    backgroundColor: theme.colors.darkBackground
  },
  tabBarIndicatorStyle: {
    backgroundColor: theme.colors.primary.brand,
    height: 6
  },
  tabBarLabelStyle: {
    fontFamily: theme.fontWeight.bold,
    color: theme.colors.neutral.white,
    fontSize: 18,
    textTransform: 'capitalize'
  }
}

const TopTab = createMaterialTopTabNavigator()

export function Account() {
  return (
    // @ts-ignore
    <TopTab.Navigator screenOptions={headerOptionsDark}>
      <TopTab.Screen
        name="Deposit"
        component={Deposit}
        options={{
          tabBarLabel: 'Depositar'
        }}
      />
      <TopTab.Screen
        name="Withdraw"
        component={Withdraw}
        options={{
          tabBarLabel: 'Sacar'
        }}
      />
    </TopTab.Navigator>
  )
}

export function BuyOrSell() {
  return (
    // @ts-ignore
    <TopTab.Navigator screenOptions={headerOptionsDark}>
      <TopTab.Screen
        name="BUY"
        component={Buy}
        options={{
          tabBarLabel: 'Comprar'
        }}
      />
      <TopTab.Screen
        name="SELL"
        component={Sell}
        options={{
          tabBarLabel: 'Vender'
        }}
      />
    </TopTab.Navigator>
  )
}
