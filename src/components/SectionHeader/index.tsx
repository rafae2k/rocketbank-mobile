import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed'
import { IconProps } from '../../types/IconTypes'

type SectionHeaderProps = {
  title: string
  icon?: IconProps
}

export default function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      {icon && (
        <TouchableOpacity onPress={icon.handleClick}>
          <Icon
            type={icon.type}
            name={icon.iconName}
            size={icon.size}
            color={icon.color}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    overflow: 'visible'
  },
  headerContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Urbanist_700Bold',
    marginBottom: 20
  }
})
