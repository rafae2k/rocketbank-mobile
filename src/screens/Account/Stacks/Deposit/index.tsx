import { Image, ImageSourcePropType, View } from 'react-native'
import { Button } from '../../../../components'

import * as S from './styles'

export default function Deposit() {
  return (
    <S.Container>
      <S.InfoWrapper>
        <S.LineWrapper>
          <S.TextRight>Banco</S.TextRight>
          <S.TextLeft>102 - SC XP Investimentos</S.TextLeft>
        </S.LineWrapper>

        <S.LineWrapper>
          <S.TextRight>Numero da conta</S.TextRight>
          <S.TextLeft>9148877</S.TextLeft>
        </S.LineWrapper>

        <S.LineWrapper>
          <S.TextRight>Agência</S.TextRight>
          <S.TextLeft>0001</S.TextLeft>
        </S.LineWrapper>
      </S.InfoWrapper>

      <S.QrCodeWrapper>
        <Image
          source={
            require('../../../../../assets/qrcode.png') as ImageSourcePropType
          }
          style={{
            width: 150,
            height: 150
          }}
        />
      </S.QrCodeWrapper>

      <View style={{ height: 48 }}>
        <Button
          label="Copiar dados da conta"
          iconPosition="left"
          icon={{
            type: 'feather',
            iconName: 'clipboard',
            size: 20,
            color: '#fff'
          }}
        />
      </View>
    </S.Container>
  )
}
