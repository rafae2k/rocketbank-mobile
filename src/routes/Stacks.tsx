import { createStackNavigator } from '@react-navigation/stack'
import { Home, Portfolio, Stocks } from '../screens'
import theme from '../styles/theme'
import TopTab from './TopTab'

export type StacksParamList = {
  Home: undefined
  Portfolio: undefined
  Stocks: undefined
  Account: undefined
  Deposit: undefined
  Withdraw: undefined
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
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.darkBackground
        },
        headerTintColor: theme.colors.neutral.white
      }}
    >
      <Stack.Screen name="Account" component={TopTab} />
    </Stack.Navigator>
  )
}

export const PortfolioStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Portfolio" component={Portfolio} />
    </Stack.Navigator>
  )
}

export const StocksStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stocks" component={Stocks} />
    </Stack.Navigator>
  )
}
