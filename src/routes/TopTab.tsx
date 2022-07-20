import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Deposit, Withdraw } from '../screens'
import theme from '../styles/theme'

const Tab = createMaterialTopTabNavigator()

export default function TopTab() {
  return (
    <Tab.Navigator
      screenOptions={{
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
      }}
    >
      <Tab.Screen
        name="Deposit"
        component={Deposit}
        options={{
          tabBarLabel: 'Depositar'
        }}
      />
      <Tab.Screen name="Withdraw" component={Withdraw} />
    </Tab.Navigator>
  )
}
