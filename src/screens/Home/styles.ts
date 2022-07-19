import styled, { css } from 'styled-components/native'

export const Container = styled.ScrollView`
  ${() => css`
    background-color: 'red';
    height: 100%;
    margin: 0 16px;
    overflow: visible;
  `}
`

export const SectionWrapper = styled.View`
  margin-bottom: 24px;
`
