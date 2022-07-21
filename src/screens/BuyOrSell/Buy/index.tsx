import { ReactNode } from 'react'
import { Text } from 'react-native'

import { Container } from './styles'

interface BuyProps {
  children: ReactNode
}

export default function Buy({ children }: BuyProps) {
  return (
    <Container>
      <Text>Buy</Text>
      {children}
    </Container>
  )
}
