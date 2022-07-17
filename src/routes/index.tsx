import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Account from '../screens/Account'
import Portfolio from '../screens/Portfolio'
import Stocks from '../screens/Stocks'

const Routes = () => {
  const Tab = createBottomTabNavigator()

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Tab.Navigator screenOptions={{
      unmountOnBlur: false,
      headerShown: false,
    }}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Portfolio" component={Portfolio}/>
      <Tab.Screen name="Stocks" component={Stocks} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  )
}

export default Routes