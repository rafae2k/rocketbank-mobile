import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Button, Input } from '../../components'
import * as S from './styles'

export default function Stocks() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.InputWrapper>
          <Input placeholder="Pesquisar" icon="search" label="" />
          <S.ButtonWrapper>
            <Button label="Pesquisar" />
          </S.ButtonWrapper>
        </S.InputWrapper>
      </S.Container>
    </TouchableWithoutFeedback>
  )
}
