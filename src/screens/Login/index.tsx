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

import theme from '../../styles/theme'
import { Button, LoginForm } from '../../components'

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
                require('../../../assets/logo-black.png') as ImageSourcePropType
              }
              style={styles.logo}
              resizeMode="contain"
            />
            <View>
              <Text style={styles.header}>Login in to Rocket Bank</Text>
              <Text style={styles.subTitle}>Welcome</Text>
            </View>

            <LoginForm />

            <View style={{ height: 48 }}>
              <Button
                label={isBiometricSupported ? 'Login with Face ID' : 'Login'}
                handleClick={handleAuthenticate}
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
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    height: '100%',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 16
  },
  header: {
    fontFamily: theme.fontFamily,
    fontSize: 32,
    fontWeight: theme.fontWeight.light,
    width: 180,
    marginBottom: 4
  },
  subTitle: {
    fontFamily: theme.fontFamily,
    fontSize: 16,
    fontWeight: theme.fontWeight.medium,
    color: theme.colors.text.onDarkSubHeading,
    marginBottom: 32
  }
})
