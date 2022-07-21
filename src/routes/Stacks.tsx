import { createStackNavigator } from '@react-navigation/stack'
import { Home, Portfolio, StockDetails, Stocks } from '../screens'
import theme from '../styles/theme'
import { Account as AccountTopTab, BuyOrSell } from './TopTab'

export type StacksParamList = {
  Home: undefined
  Portfolio: undefined
  Stocks: undefined
  AccountTopTab: undefined
  Deposit: undefined
  Withdraw: undefined
  StockDetails: {
    stockId: string
  }
  BuyOrSell: {
    stockId: string
  }
}

const headerOptionsDark = {
  headerStyle: {
    backgroundColor: theme.colors.darkBackground
  },
  headerTintColor: theme.colors.neutral.white,
  headerTitleStyle: {
    fontFamily: theme.fontWeight.bold,
    fontSize: 20
  }
}

const Stack = createStackNavigator<StacksParamList>()

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export const AccountStack = () => {
  return (
    <Stack.Navigator screenOptions={headerOptionsDark}>
      <Stack.Screen
        name="AccountTopTab"
        component={AccountTopTab}
        options={{
          headerTitle: 'Conta'
        }}
      />
    </Stack.Navigator>
  )
}

export const PortfolioStack = () => {
  return (
    <Stack.Navigator screenOptions={headerOptionsDark}>
      <Stack.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerTitle: 'Portfolio'
        }}
      />
    </Stack.Navigator>
  )
}

export const StocksStack = () => {
  return (
    <Stack.Navigator screenOptions={headerOptionsDark}>
      <Stack.Screen
        name="Stocks"
        component={Stocks}
        options={{
          headerTitle: 'Mercado'
        }}
      />
      <Stack.Screen
        name="StockDetails"
        component={StockDetails}
        options={({ route }) => ({ title: route.params.stockId })}
      />

      <Stack.Screen
        name="BuyOrSell"
        component={BuyOrSell}
        options={({ route }) => ({ title: route.params.stockId })}
      />
    </Stack.Navigator>
  )
}
