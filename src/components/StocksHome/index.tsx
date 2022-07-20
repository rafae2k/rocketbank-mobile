import { View, StyleSheet, FlatList } from 'react-native'
import StockCard from '../StockCard'

export default function StocksHome() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        renderItem={() => <StockCard />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'visible'
  },
  list: {
    overflow: 'visible'
  }
})
