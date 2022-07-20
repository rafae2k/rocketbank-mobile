import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${() => css`
    background-color: white;
    height: 100%;
    margin: 0 16px;
    overflow: visible;
  `}
`

export const SectionWrapper = styled.View`
  margin-bottom: 24px;
  overflow: visible;
`
