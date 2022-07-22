import styled, { css } from 'styled-components/native'

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

export const ButtonWrapper = styled.View`
  width: 100%;
  height: 48px;
`
