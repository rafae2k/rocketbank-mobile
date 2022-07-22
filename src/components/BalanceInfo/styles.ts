import styled, { css } from 'styled-components/native'

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
