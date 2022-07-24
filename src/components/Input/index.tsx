import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { Control, Controller, FieldError } from 'react-hook-form'
import { TextInputProps } from 'react-native'
import theme from '../../styles/theme'
import * as S from './styles'

export type InputProps = TextInputProps & {
  icon: React.ComponentProps<typeof Feather>['name']
  value?: string | number
  label: string
  password?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>
  name: string
  error?: FieldError
}

export default function Input({
  name,
  control,
  error,
  icon,
  value,
  label,
  password,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  return (
    <S.ControllerContainer>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <S.Container>
            <S.Label>{label}</S.Label>
            <S.InputWrapper isFocused={isFocused} isError={error}>
              <S.IconWrapper>
                <Feather
                  name={icon}
                  size={24}
                  color={
                    isFocused || isFilled
                      ? theme.colors.primary.brand
                      : error
                        ? theme.colors.semantic.error
                        : theme.colors.neutral.gray
                  }
                />
              </S.IconWrapper>

              {/* @ts-ignore */}
              <S.Input
                style={{ flexDirection: 'row' }}
                onChangeText={onChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                value={value}
                secureTextEntry={!isPasswordVisible && password}
                {...rest}
              />

              {password && (
                <S.HidePassword
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  <Feather
                    name={isPasswordVisible ? 'eye-off' : 'eye'}
                    size={24}
                    color={theme.colors.neutral.black}
                  />
                </S.HidePassword>
              )}
            </S.InputWrapper>
          </S.Container>
        )}
      />
      {error && <S.Error>{error.message}</S.Error>}
    </S.ControllerContainer>
  )
}
