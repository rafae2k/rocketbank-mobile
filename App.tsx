import { NavigationContainer } from '@react-navigation/native'
import * as Font from 'expo-font'
import {
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_700Bold
} from '@expo-google-fonts/urbanist'
import * as SplashScreen from 'expo-splash-screen'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Routes from './src/routes'
import { useCallback, useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import theme from './src/styles/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// @ts-ignore
import { connectToDevTools } from 'react-devtools-core'

void SplashScreen.preventAutoHideAsync()

export const queryClient = new QueryClient()

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  if (__DEV__) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    connectToDevTools({
      host: 'localhost',
      port: 8097
    })
  }

  useEffect(() => {
    void (async () => {
      try {
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({
          Urbanist_400Regular,
          Urbanist_500Medium,
          Urbanist_700Bold
        })
      } catch {
        console.error('Error loading fonts')
      } finally {
        setAppIsReady(true)
      }
    })()
  }, [])

  const onLayout = useCallback(() => {
    if (appIsReady) {
      void SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider onLayout={onLayout}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Routes />
            <StatusBar style="auto" />
          </ThemeProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
