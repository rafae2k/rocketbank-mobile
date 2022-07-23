import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: ${theme.space.md} ${theme.space.md} 0;
  `}
`

export const InputWrapper = styled.View`
  ${() => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`

export const ButtonWrapper = styled.View`
  ${({ theme }) => css`
    width: 100px;
    margin-left: ${theme.space.base};
  `}
`
