import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  ${({ theme }) => css`
    /* flex: 1; */
    padding: ${theme.space.md} 0 0;
    height: 100%;
    overflow: visible;
    background-color: ${theme.colors.darkBackground};
  `}
`

export const PaddingWrapper = styled.View`
  ${({ theme }) => css`
    padding: ${theme.space.md} ${theme.space.md} 0;
    overflow: visible;
    background-color: ${theme.colors.darkBackground};
  `}
`

export const ButtonWrapper = styled.View`
  ${({ theme }) => css`
    width: 100px;
    margin-left: ${theme.space.base};
  `}
`

export const StockHeader = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `}
`

export const StockHeaderRight = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
  `}
`

export const StockHeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xl};
    color: ${theme.colors.neutral.white};
    font-family: ${theme.fontWeight.bold};
  `}
`
export const StockImage = styled.Image`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border-radius: 4px;
    margin-right: ${theme.space.md};
  `}
`
export const StockHeaderWrapper = styled.View``

export const StockHeaderSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md};
    color: ${theme.colors.neutral.white};
  `}
`

export const StockPriceWrapper = styled.View``

export const StockPrice = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xxl};
    color: ${theme.colors.neutral.white};
    font-family: ${theme.fontWeight.bold};
  `}
`
