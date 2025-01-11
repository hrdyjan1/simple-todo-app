/* eslint-disable @typescript-eslint/no-require-imports */
import '../../tamagui-web.css';

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Providers } from '../components/Providers/Providers';
export { ErrorBoundary } from 'expo-router';
export { unstable_settings };

// FIXME: This is a workaround for a bug in the current version of `expo-router`.
// Ensure that reloading on `/modal` keeps a back button present.
const unstable_settings = { initialRouteName: '(app)' };

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const colorScheme = useColorScheme();

  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (interLoaded || interError) {
      SplashScreen.hideAsync();
    }
  }, [interLoaded, interError]);

  if (!interLoaded && !interError) {
    return null;
  }

  return (
    <Providers>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <StatusBar
          barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </Providers>
  );
}
export default RootLayout;
