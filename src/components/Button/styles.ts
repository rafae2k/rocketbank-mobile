import styled, { css, DefaultTheme } from 'styled-components/native'
import { ButtonProps } from '.'

const buttonModifiers = {
  left: (theme: DefaultTheme) => css`
    margin-left: ${theme.space.base};
  `,
  right: (theme: DefaultTheme) => css`
    margin-right: ${theme.space.base};
  `,

  disabled: (theme: DefaultTheme) => css`
    opacity: 0.5;
  `,

  filled: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary.brand};
    color: ${theme.colors.neutral.white};
  `,
  outlined: (theme: DefaultTheme) => css`
    background-color: transparent;
    border-width: 2px;
    border-color: ${theme.colors.primary.brand};
    box-sizing: border-box;
  `,
  outlinedLabel: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary.brand};
  `,
  fullRadius: (theme: DefaultTheme) => css`
    border-radius: ${theme.borderRadius.full};
  `,
  noneRadius: () => css`
    border-radius: 0;
  `,
  halfRadius: (theme: DefaultTheme) => css`
    border-radius: ${theme.borderRadius.base};
  `,
  sell: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.semantic.down};
  `
}

export const Container = styled.TouchableOpacity<
  Omit<ButtonProps, 'label' | 'handleClick' | 'icon'>
>`
  ${({ theme, type, radius, margin, operation, disabled }) => css`
    flex-direction: row;
    height: ${theme.space.xxl};
    flex: 1;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    padding: ${theme.space.base} 0;
    border-radius: ${theme.borderRadius.full};

    ${type === 'filled' && buttonModifiers.filled(theme)}
    ${type === 'outlined' && buttonModifiers.outlined(theme)}
    
    ${radius === 'half' && buttonModifiers.halfRadius(theme)}
    ${radius === 'none' && buttonModifiers.noneRadius()}
    ${radius === 'full' && buttonModifiers.fullRadius(theme)}
    
    ${margin === 'left' && buttonModifiers.left(theme)}
    ${margin === 'right' && buttonModifiers.right(theme)}
    
    ${disabled && buttonModifiers.disabled(theme)}
    ${operation === 'sell' && buttonModifiers.sell(theme)}
  `}
`

export const Label = styled.Text<
  Pick<ButtonProps, 'iconPosition' | 'type' | 'operation'>
>`
  ${({ theme, iconPosition, type, operation }) => css`
    font-size: ${theme.fontSize.base};
    font-family: ${theme.fontWeight.bold};

    ${iconPosition === 'left' && buttonModifiers.left(theme)}
    ${iconPosition === 'right' && buttonModifiers.right(theme)}

    ${type === 'filled' && buttonModifiers.filled(theme)}
    ${type === 'outlined' && buttonModifiers.outlinedLabel(theme)}

    ${operation === 'sell' && buttonModifiers.sell(theme)}
  `}
`
