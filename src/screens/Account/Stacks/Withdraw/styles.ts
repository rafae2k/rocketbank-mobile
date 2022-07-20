import styled, { css } from 'styled-components/native'
import CurrencyInput from 'react-native-currency-input'

export const Container = styled.View`
  ${({ theme }) => css`
    padding: 0 ${theme.space.md};
    align-items: center;
    justify-content: center;
  `}
`

export const PickerWrapper = styled.View`
  ${() => css`
    overflow: hidden;
  `}
`

export const AmountWrapper = styled.View`
  ${({ theme }) => css`
    align-items: center;
    margin-bottom: ${theme.space.xxl};
  `}
`

export const Heading = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.md};
    color: ${theme.colors.text.onBackground};
    margin-bottom: ${theme.space.md};
  `}
`

export const InputWrapper = styled.View`
  ${({ theme }) => css`
    height: ${theme.space.xxl};
    padding: ${theme.space.base};
    justify-content: center;
    align-items: center;
    margin-bottom: ${theme.space.xl};
  `}
`

export const Line = styled.View`
  ${({ theme }) => css`
    height: 3px;
    min-width: 200px;
    background-color: ${theme.colors.neutral.black};
    justify-content: center;
    margin-top: ${theme.space.base};
  `}
`

export const Input = styled(CurrencyInput)`
  ${({ theme }) => css`
    width: 200px;
    font-size: ${theme.fontSize.xxl};
    font-family: ${theme.fontWeight.bold};
  `}
`

export const BalanceWrapper = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`

export const BalanceText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.base};
    font-family: ${theme.fontWeight.medium};
    color: ${theme.colors.neutral.black};
    opacity: 0.6;
    margin-right: ${theme.space.base};
  `}
`

export const Balance = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.lg};
    font-family: ${theme.fontWeight.bold};
    color: ${theme.colors.neutral.black};
    opacity: 0.6;
  `}
`

export const ButtonWrapper = styled.View`
  width: 100%;
  height: 48px;
`
