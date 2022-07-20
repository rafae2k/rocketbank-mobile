import styled, { css } from 'styled-components/native'

export const Container = styled.View``

export const SectionWrapper = styled.View``

export const StockWrapper = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.space.base};
  `}
`
