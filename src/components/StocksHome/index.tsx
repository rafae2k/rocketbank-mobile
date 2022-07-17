import { View, StyleSheet, FlatList } from 'react-native';
import { StockCard } from '../StockCard';
import { SectionHeader } from '../SectionHeader';
import theme from '../../styles/theme'


export function StocksHome() {
  return (
    <View style={ styles.container }>
      <SectionHeader title='Ações' icon={{
        handleClick: () => {},
        type: 'feather',
        color: theme.colors.neutral.black,
        size: 24,
        iconName: 'chevron-right'
      }}/>
      <FlatList 
        data={[1,2,3,4,5,6,7,8,9,10]}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={ styles.list }
        renderItem={() => <StockCard />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    overflow: 'visible'
  },
  list: {
    overflow: 'visible',
  }
});
