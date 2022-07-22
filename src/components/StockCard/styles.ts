import styled, { css, DefaultTheme } from 'styled-components/native'
import { StockCardProps } from '.'

const walletModifiers = {
  hide: () => css`
    display: none;
  `,
  up: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary.brand};
  `,
  column: () => css`
    flex-direction: column;
  `,
  row: () => css`
    flex-direction: row;
  `,
  marginRight: (theme: DefaultTheme) => css`
    margin-right: ${theme.space.base};
  `,
  marginLeft: (theme: DefaultTheme) => css`
    margin-left: ${theme.space.base};
  `,
  marginBottom: (theme: DefaultTheme) => css`
    margin-bottom: ${theme.space.base};
  `
}

export const Wrapper = styled.View<StockCardProps>`
  ${({ full }) => css`
    flex-direction: row;
    justify-content: space-between;

    ${!full && walletModifiers.row()}
  `}
`

export const StocksAmount = styled.Text<StockCardProps>`
  ${({ theme, full }) => css`
    font-family: ${theme.fontWeight.light};
    ${!full && walletModifiers.hide()}
  `}
`

export const PerformanceAmount = styled.Text<StockCardProps>`
  ${({ theme, full, performance }) => css`
    font-family: ${theme.fontWeight.light};

    ${performance === 'up' && walletModifiers.up(theme)}

    ${!full && walletModifiers.hide()}
  `}
`

export const Wallet = styled.TouchableOpacity<StockCardProps>`
  ${({ theme, full }) => css`
    flex-grow: 1;
    flex-direction: row;
    align-items: ${full ? 'center' : 'flex-start'}
    justify-content: space-between;
    padding: ${theme.space.md};
    border-radius: ${theme.borderRadius.base};
    border-width: 1px;
    border-color: ${theme.colors.neutral.grayLight};

    ${full && walletModifiers.marginBottom(theme)}

    ${!full && walletModifiers.marginRight(theme)}
    ${!full && walletModifiers.column()}
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

type PerformanceProps = Pick<StockCardProps, 'full' | 'performance'> & {
  isUp?: boolean
}

export const MiddleWrapper = styled.View<PerformanceProps>`
  ${({ theme, full }) => css`
    margin-left: ${theme.space.md};
    ${!full && walletModifiers.marginLeft(theme)}
    ${!full && walletModifiers.row()}
  `}

  ${PerformanceAmount} {
    ${({ theme, isUp }) => css`
      font-family: ${theme.fontWeight.medium};
      color: ${isUp ? theme.colors.primary.brand : theme.colors.semantic.down};
    `}

    ${PerformanceText} {
      ${({ theme, isUp }) => css`
        font-family: ${theme.fontWeight.medium};
        color: ${isUp
    ? theme.colors.primary.brand
    : theme.colors.semantic.down};
      `}
    }
  }
`
export const leftWrapper = styled.View`
  ${() => css`
    align-items: flex-end;
  `}
`

export const AmountWrapper = styled.View<
  Pick<StockCardProps, 'full' | 'performance'>
>`
  ${({ theme, full }) => css`
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: ${full ? theme.space.base : 0};
    margin-top: ${!full ? theme.space.base : 0};
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
