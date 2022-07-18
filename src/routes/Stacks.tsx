import { createStackNavigator } from '@react-navigation/stack'
import { Account, Home, Portfolio, Stocks } from '../screens'

export type StacksParamList = {
  Home: undefined
  Portfolio: undefined
  Stocks: undefined
  Account: undefined
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
        headerShown: false
      }}
    >
      <Stack.Screen name="Account" component={Account} />
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
