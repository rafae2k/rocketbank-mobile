import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: ${theme.space.md} ${theme.space.md} 0px;
    overflow: hidden;
  `}
`

export const Margin = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.space.base};
  `}
`

export const SectionWrapper = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.space.md};
  `}
`
