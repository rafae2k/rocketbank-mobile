import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    padding: 30px ${theme.space.md} 0;
  `}
`

export const LineWrapper = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: ${theme.space.md};
  `}
`

export const QrCodeWrapper = styled.View`
  ${({ theme }) => css`
    align-items: center;
    margin-bottom: ${theme.space.xl};
  `}
`

export const InfoWrapper = styled.View`
  ${({ theme }) => css`
    margin-bottom: ${theme.space.xl};
  `}
`

export const TextRight = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeight.medium};
    font-size: ${theme.fontSize.base};
  `}
`

export const TextLeft = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.md};
  `}
`
