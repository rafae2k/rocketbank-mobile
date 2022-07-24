/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useForm } from 'react-hook-form'
import { View } from 'react-native'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import theme from '../../../styles/theme'
import { Button, Input } from '../..'
import { LoginFormData, LoginFormProps } from '../../../types'

const LoginSchema = yup.object({
  email: yup.string().email('E-mail inválido').required('Informe o e-mail'),
  password: yup
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .required()
})

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: yupResolver(LoginSchema)
  })

  return (
    <View>
      <Input
        name="email"
        label="E-mail"
        // @ts-ignore
        control={control}
        icon="user"
        placeholder="Patodasilva@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />

      <Input
        name="password"
        label="Senha"
        // @ts-ignore
        control={control}
        icon="mail"
        placeholder="Digite sua senha"
        autoCapitalize="none"
        password={true}
        error={errors.password}
      />

      <View style={{ height: 48, marginTop: 20 }}>
        <Button
          disabled={!!errors.email || !!errors.password}
          label="Login"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          handleClick={handleSubmit(onSubmit)}
          iconPosition="right"
          icon={{
            type: 'feather',
            iconName: 'arrow-right',
            size: 24,
            color: theme.colors.neutral.white
          }}
        />
      </View>
    </View>
  )
}
