import styled, { css } from 'styled-components/native'

export const Wallet = styled.TouchableOpacity`
  ${({ theme }) => css`
    flex-grow: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.space.md};
    border-radius: ${theme.borderRadius.base};
    border-width: 1px;
    border-color: ${theme.colors.neutral.grayLight};
  `}
`
export const PerformanceWrapper = styled.View`
  ${() => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`

export const PerformanceText = styled.Text``

export const PerformanceAmount = styled.Text``

type PerformanceProps = { isUp?: boolean; isDown?: boolean }

export const MiddleWrapper = styled.View<PerformanceProps>`
  ${() => css`
    justify-content: center;
  `}

  ${PerformanceAmount} {
    ${({ theme, isUp, isDown }) => css`
      font-family: ${theme.fontWeight.medium};
      color: ${isUp
    ? theme.colors.primary.brand
    : isDown
      ? theme.colors.semantic.down
      : theme.colors.neutral.gray};
    `}

    ${PerformanceText} {
      ${({ theme, isUp, isDown }) => css`
        font-family: ${theme.fontWeight.medium};
        color: ${isUp
    ? theme.colors.primary.brand
    : isDown
      ? theme.colors.semantic.down
      : theme.colors.neutral.gray};
      `}
    }
  }
`
export const leftWrapper = styled.View`
  ${() => css`
    align-items: flex-end;
  `}
`

export const AmountWrapper = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: ${theme.space.base};
  `}
`
export const Currency = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.xs};
    line-height: ${theme.fontSize.lg};
    color: ${theme.colors.text.onBackground};
    margin-left: ${theme.space.xs};
  `}
`

export const Amount = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.lg};
    font-family: ${theme.fontWeight.bold};
  `}
`
