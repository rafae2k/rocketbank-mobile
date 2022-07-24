import { FieldError } from 'react-hook-form'
import styled, { css, DefaultTheme } from 'styled-components/native'

const inputModifiers = {
  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.semantic.down};
    border-width: 2px;
  `,
  isFocused: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.primary.brand};
    border-width: 2px;
  `
}

export const ControllerContainer = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.space.base};
  `}
`

export const Container = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.space.sm};
  `}
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.base};
    color: ${theme.colors.text.onBackground};
    margin-bottom: ${theme.space.base};
  `}
`

type InputProps = {
  isError?: FieldError
  isFocused?: boolean
}

export const InputWrapper = styled.View<InputProps>`
  ${({ theme, isError, isFocused }) => css`
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.neutral.grayLight};
    border-color: ${theme.colors.neutral.gray};
    border-width: 1px;
    border-radius: ${theme.borderRadius.sm};
    padding: 0 ${theme.space.base};

    ${isError && inputModifiers.error(theme)}
    ${isFocused && inputModifiers.isFocused(theme)}
  `}
`

export const IconWrapper = styled.View`
  ${({ theme }) => css`
    width: ${theme.space.lg};
    height: ${theme.space.lg};
  `}
`

export const Input = styled.TextInput`
  ${({ theme }) => css`
    width: 80%;
    padding: ${theme.space.md} 0;
    margin-left: ${theme.space.base};
    font-family: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.sm};
  `}
`

export const HidePassword = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: ${theme.space.lg};
    height: ${theme.space.lg};
  `}
`

export const Error = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.semantic.error};
    margin: ${theme.space.sm} 0 ${theme.space.md};
  `}
`
