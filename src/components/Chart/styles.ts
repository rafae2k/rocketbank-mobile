import styled, { css, DefaultTheme } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    /* background-color: ${theme.colors.darkBackground}; */
    padding-bottom: ${theme.space.base};
  `}
`

export const Wrapper = styled.View`
  ${({ theme }) => css`
    padding: 0 ${theme.space.md};
    overflow: visible;
  `}
`
export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

type ButtonProps = {
  isSelected: boolean
}

const ButtonModifiers = {
  isSelected: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.neutral.white};
    color: ${theme.colors.neutral.black};
    font-family: ${theme.fontWeight.bold};
  `
}

export const ButtonText = styled.Text<ButtonProps>`
  ${({ theme, isSelected }) => css`
    color: ${theme.colors.neutral.white};
    font-size: 12px;
    font-family: ${theme.fontWeight.medium};

    ${isSelected && ButtonModifiers.isSelected(theme)}
  `}
`
export const Button = styled.TouchableOpacity<ButtonProps>`
  ${({ theme, isSelected }) => css`
    background-color: ${theme.colors.darkBackground};
    padding: 8px 10px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.3);
    border-radius: 8px;
    margin-right: 4px;

    ${isSelected && ButtonModifiers.isSelected(theme)}
  `}
`
