import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as LocalAuthentication from 'expo-local-authentication'
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

import theme from '../styles/theme'
import { Button, LoginForm } from '../components'

export default function Login() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    void (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync()
      setIsBiometricSupported(compatible)
    })()
  })

  const handleAuthenticate = () => {
    void (async () => {
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
    })()
  }

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" enabled>
          <View style={styles.container}>
            <Image
              source={
                require('../../assets/logo-black.png') as ImageSourcePropType
              }
              style={styles.logo}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.header}>Login in to Rocket Bank</Text>
              <Text style={styles.subTitle}>Welcome</Text>
            </View>

            <LoginForm />

            <Button
              label={isBiometricSupported ? 'Login with Face ID' : 'Login'}
              handleClick={handleAuthenticate}
              icon={{
                type: 'feather',
                iconName: 'arrow-right',
                size: 24,
                color: theme.colors.neutral.white
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.space.md,
    height: '100%',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: theme.space.md
  },
  header: {
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize.xxl,
    fontWeight: theme.fontWeight.light,
    width: 180,
    marginBottom: theme.space.sm
  },
  subTitle: {
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSize.base,
    fontWeight: theme.fontWeight.medium,
    color: theme.colors.text.onDarkSubHeading,
    marginBottom: theme.space.xl
  }
})
