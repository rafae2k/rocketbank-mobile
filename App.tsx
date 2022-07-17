import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Urbanist_400Regular, Urbanist_500Medium, Urbanist_700Bold } from '@expo-google-fonts/urbanist';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './src/routes';
import { useCallback, useEffect, useState } from 'react';

void SplashScreen.preventAutoHideAsync();

export default function App() {

  const [isReady, setIsReady] = useState(false)
  const [fontsLoaded] = useFonts({
    Urbanist_500Medium,
    Urbanist_400Regular,
    Urbanist_700Bold,
  });

  const onFinish = useCallback( async () => {
    await SplashScreen.preventAutoHideAsync();
    setIsReady(true);
  }, []);

  useEffect(() => {
    void onFinish()
  }, [onFinish]);

  const handleLoading = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (fontsLoaded && isReady) void handleLoading();
  }, [fontsLoaded, handleLoading, isReady])
  
  if (!isReady) return null;


  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
