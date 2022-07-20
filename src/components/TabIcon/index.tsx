import { Feather } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import theme from '../../styles/theme'

type TabBarIconProps = {
  focused: boolean
  icon: React.ComponentProps<typeof Feather>['name']
  label: string
}

export default function TabIcon({ focused, icon, label }: TabBarIconProps) {
  return (
    <View style={styles.container}>
      {!focused && <View style={styles.dot} />}

      {focused && (
        <View
          style={[
            styles.dot,
            focused
              ? { backgroundColor: theme.colors.primary.brand }
              : { backgroundColor: theme.colors.neutral.gray }
          ]}
        />
      )}
      <Feather
        name={icon}
        size={20}
        color={focused ? theme.colors.primary.brand : theme.colors.neutral.gray}
        style={styles.icon}
      />
      <Text style={focused ? styles.focused : styles.label}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  dot: {
    top: 0,
    left: 0,
    width: 6,
    height: 4,
    borderBottomLeftRadius: 999,
    borderBottomRightRadius: 999,
    marginBottom: 4
  },
  icon: {
    marginBottom: 4
  },
  label: {
    color: theme.colors.neutral.gray,
    fontFamily: theme.fontWeight.light
  },
  focused: {
    color: theme.colors.primary.brand,
    fontFamily: theme.fontWeight.medium
  }
})
