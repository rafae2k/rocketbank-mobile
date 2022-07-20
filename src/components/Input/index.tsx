import { Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import {
  TextInputProps,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native'
import theme from '../../styles/theme'

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name']
  value?: string
  label: string
  password?: boolean
}

export default function Input({
  icon,
  value,
  label,
  password,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.container, isFocused ? styles.focused : null]}>
        <View style={styles.iconContainer}>
          <Feather
            name={icon}
            size={24}
            color={
              isFocused || isFilled
                ? theme.colors.primary.brand
                : theme.colors.neutral.gray
            }
          />
        </View>

        <TextInput
          style={styles.input}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={value}
          secureTextEntry={!isPasswordVisible && password}
          {...rest}
        />

        {password && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Feather
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color={theme.colors.text.onBackground}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    backgroundColor: theme.colors.neutral.grayLight,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 52
  },
  iconContainer: {
    height: 24,
    width: 24
  },
  input: {
    flex: 1,
    marginLeft: 16,
    paddingVertical: 16,
    fontFamily: theme.fontWeight.medium,
    fontSize: 14
  },
  label: {
    fontFamily: theme.fontWeight.medium,
    fontSize: 16,
    color: theme.colors.text.onBackground,
    marginBottom: 8
  },
  focused: {
    borderColor: theme.colors.primary.brand,
    borderWidth: 2
  }
})
