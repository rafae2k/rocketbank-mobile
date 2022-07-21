import { NavigatorScreenParams } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens'
import Tabs, { BottomTabsParamList } from './Tabs'

export type RootRoutesStackParamList = {
  Login: undefined
  HomeTabs: NavigatorScreenParams<BottomTabsParamList>
}

const Stack = createStackNavigator<RootRoutesStackParamList>()

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name="HomeTabs" component={Tabs} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}
