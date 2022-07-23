import { Text } from 'react-native'
import styled, { css } from 'styled-components/native'
import { StockInfoWithLogoProps } from '.'

export const Container = styled.View<Pick<StockInfoWithLogoProps, 'big'>>`
  ${({ big }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ${StockLogo} {
      width: ${big && '40px'};
      height: ${big && '40px'};
    }
  `}
`

export const StockLogo = styled.Image<Pick<StockInfoWithLogoProps, 'big'>>`
  ${({ theme, big }) => css`
    width: ${big ? '40px' : theme.space.lg};
    height: ${big ? '40px' : theme.space.lg};
    border-radius: ${theme.space.sm};
    margin-right: ${big ? theme.space.base : theme.space.base};
  `}
`

export const StockInfo = styled.View``

export const StockCode = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1
})<Pick<StockInfoWithLogoProps, 'big' | 'onDark'>>`
  ${({ theme, big, onDark }) => css`
    color: ${onDark ? theme.colors.neutral.white : theme.colors.neutral.black};
    font-size: ${big ? theme.fontSize.xl : theme.fontSize.sm};
    font-family: ${theme.fontWeight.bold};
    max-width: ${big ? '100px' : '70px'};
  `}
`

export const CompanyName = styled(Text).attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1
})<Pick<StockInfoWithLogoProps, 'big' | 'onDark'>>`
  ${({ theme, big, onDark }) => css`
    color: ${onDark ? theme.colors.neutral.white : theme.colors.neutral.black};
    font-size: ${big ? theme.fontSize.base : theme.fontSize.sm};
    font-family: ${theme.fontWeight.light};
    max-width: ${big ? '120px' : '70px'};
  `}
`
