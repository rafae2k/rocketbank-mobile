import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Icon } from '@rneui/themed'
import theme from '../../styles/theme'
import { IconProps } from '../../types/IconTypes'

type ButtonProps = {
  handleClick?: () => void
  label: string
  icon?: IconProps
}

export default function Button({ label, icon, handleClick }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={handleClick}>
      <Text style={styles.buttonText}>{label}</Text>
      {icon && (
        <Icon
          type={icon.type}
          name={icon.iconName}
          size={icon.size}
          color={icon.color}
        />
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.space.md,
    backgroundColor: theme.colors.primary.brand,
    borderRadius: theme.borderRadius.full
  },
  buttonText: {
    fontSize: theme.fontSize.base,
    fontFamily: theme.fontFamily,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.neutral.white
  }
})
