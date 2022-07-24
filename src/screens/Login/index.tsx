/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as LocalAuthentication from 'expo-local-authentication'
import * as SecureStore from 'expo-secure-store'
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  Alert
} from 'react-native'

import theme from '../../styles/theme'
import { LoginFormData } from '../../types'
import LoginForm from '../../components/Form/Login'

export default function Login() {
  const [, setIsBiometricSupported] = useState(false)

  const navigation = useNavigation()

  const save = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value)
  }

  const getUserInfo = async () => {
    return await SecureStore.getItemAsync('email')
  }

  useEffect(() => {
    void (async () => {
      // await SecureStore.deleteItemAsync('email')
      const isCompatible = await LocalAuthentication.hasHardwareAsync()
      setIsBiometricSupported(isCompatible)
      const user = await getUserInfo()
      if (user) {
        try {
          const result = await LocalAuthentication.authenticateAsync()
          if (result.success) {
            // TODO need to type useNavigation()
            // @ts-ignore
            navigation.navigate('HomeTabs')
          }
        } catch (e) {
          Alert.alert('Authentication failed')
        }
      }
    })()
  })

  const handleAuthenticate = async (data: LoginFormData) => {
    await save('email', data.email)
    // @ts-ignore
    navigation.navigate('HomeTabs')
  }

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <View style={styles.container}>
            <Image
              source={
                require('../../../assets/logo-black.png') as ImageSourcePropType
              }
              style={styles.logo}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.header}>Faça login Rocket Bank</Text>
              <Text style={styles.subTitle}>Bem vindo</Text>
            </View>

            <LoginForm onSubmit={handleAuthenticate} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingHorizontal: 16
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16
  },
  header: {
    fontFamily: theme.fontWeight.light,
    fontSize: 32,
    width: 180,
    marginBottom: 4
  },
  subTitle: {
    fontFamily: theme.fontWeight.medium,
    fontSize: 16,
    color: theme.colors.text.onDarkSubHeading,
    marginBottom: 32
  }
})
