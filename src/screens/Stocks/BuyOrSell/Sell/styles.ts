import styled, { css } from 'styled-components/native'
import CurrencyInput from 'react-native-currency-input'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: ${theme.space.xl} ${theme.space.md} 0;
  `}
`

export const TopContainer = styled.View`
  ${() => css``}
`

export const ItemWrapper = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.space.md};
  `}
`

export const BalanceWrapper = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.space.md};
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

type BalanceProps = {
  isAbove: boolean
}

export const Balance = styled.Text<BalanceProps>`
  ${({ theme, isAbove }) => css`
    font-size: ${theme.fontSize.lg};
    font-family: ${theme.fontWeight.bold};
    color: ${isAbove ? theme.colors.semantic.down : theme.colors.neutral.black};
    opacity: 0.6;
  `}
`

export const Right = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontWeight.light};
    color: ${theme.colors.text.onBackground};
  `}
`

export const Left = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.lg};
    font-family: ${theme.fontWeight.bold};
  `}
`

export const InputWrapper = styled.View`
  ${({ theme }) => css`
    height: ${theme.space.xxl};
    padding: ${theme.space.base};
    justify-content: center;
    align-items: center;
  `}
`

export const Line = styled.View`
  ${({ theme }) => css`
    height: 2px;
    min-width: 100px;
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

export const RecipeContainer = styled.View`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.neutral.grayLight};
    border-radius: ${theme.space.base};
    padding: ${theme.space.md};
    margin-bottom: ${theme.space.md};
  `}
`

export const CenterHeader = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontWeight.bold};
    text-align: center;
    margin-bottom: ${theme.space.lg};
  `}
`

export const TotalWrapper = styled.View`
  ${() => css`
    align-items: flex-end;
  `}
`

export const TotalHeader = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.base};
    font-family: ${theme.fontWeight.light};
    margin-bottom: ${theme.space.sm};
  `}
`

export const TotalAmount = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.lg};
    font-family: ${theme.fontWeight.bold};
  `}
`

export const ButtonWrapper = styled.View`
  ${({ theme }) => css`
    height: ${theme.space.xxl};
  `}
`
