import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigatorScreenParams } from '@react-navigation/native'
import {
  AccountStack,
  HomeStack,
  PortfolioStack,
  StacksParamList,
  StocksStack
} from './Stacks'

import { TabIcon } from '../components'
import theme from '../styles/theme'
import { StyleSheet } from 'react-native'

export type BottomTabsParamList = {
  HomeStack: NavigatorScreenParams<StacksParamList>
  PortfolioStack: NavigatorScreenParams<StacksParamList>
  StocksStack: NavigatorScreenParams<StacksParamList>
  AccountStack: NavigatorScreenParams<StacksParamList>
}

const Tabs = () => {
  const Tab = createBottomTabNavigator<BottomTabsParamList>()

  return (
    <Tab.Navigator
      screenOptions={{
        unmountOnBlur: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tabBar }
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="home" label="Home" />
          )
        }}
      />
      <Tab.Screen
        name="PortfolioStack"
        component={PortfolioStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="bar-chart" label="Portfolio" />
          )
        }}
      />
      <Tab.Screen
        name="StocksStack"
        component={StocksStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="trending-up" label="Market" />
          )
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon="dollar-sign" label="Account" />
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    backgroundColor: theme.colors.darkBackground,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    marginTop: 2,
    position: 'relative',
    overflow: 'hidden'
  }
})

export default Tabs
