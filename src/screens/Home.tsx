import { View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HomeHeader } from '../components/HomeHeader'
import { StocksHome } from '../components/StocksHome'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HomeHeader/>
        <StocksHome />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Home