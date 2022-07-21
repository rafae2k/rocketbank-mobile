import { ReactNode } from 'react'
import { Text } from 'react-native'

import { Container } from './styles'

interface SellProps {
  children: ReactNode
}

export default function Sell({ children }: SellProps) {
  return (
    <Container>
      <Text>Sell</Text>
      {children}
    </Container>
  )
}
