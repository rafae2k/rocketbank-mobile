import { useState } from 'react'
import {
  TouchableWithoutFeedback,
  Keyboard,
  NativeSyntheticEvent,
  TextInputChangeEventData
} from 'react-native'
import { Button, Input } from '../../components'
import * as S from './styles'

const Portfolio = () => {
  const [, setTicker] = useState('')

  const handleSearchTicker = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setTicker(e.nativeEvent.text)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.InputWrapper>
          <Input
            placeholder="Pesquisar"
            icon="search"
            label=""
            onChange={handleSearchTicker}
          />
          <S.ButtonWrapper>
            <Button label="Pesquisar" handleClick={void handleSearchTicker} />
          </S.ButtonWrapper>
        </S.InputWrapper>
      </S.Container>
    </TouchableWithoutFeedback>
  )
}

export default Portfolio
