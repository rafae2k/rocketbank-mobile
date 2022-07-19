import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Deposit } from '../screens/Account/Stacks/Deposit'
import { Withdraw } from '../screens/Account/Stacks/Withdraw'
import theme from '../styles/theme'

const Tab = createMaterialTopTabNavigator()

export default function TopTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.darkBackground
        },
        tabBarLabelStyle: {
          color: theme.colors.neutral.white,
          fontFamily: theme.fontFamily,
          fontWeight: theme.fontWeight.medium
        },
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary.brand,
          height: 6
        }
      }}
    >
      <Tab.Screen name="Deposit" component={Deposit} />
      <Tab.Screen name="WithDraw" component={Withdraw} />
    </Tab.Navigator>
  )
}
