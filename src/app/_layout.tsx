/* eslint-disable @typescript-eslint/no-require-imports */
import '../../tamagui-web.css';

import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { Providers } from '../components/Providers/Providers';
import { RootLayoutNavigation } from '../components/RootLayoutNavigation/RootLayoutNavigation';
export { ErrorBoundary } from 'expo-router';

// FIXME: This is a workaround for a bug in the current version of `expo-router`.
const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(app)',
};

SplashScreen.preventAutoHideAsync();

function RootLayout() {
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
      <RootLayoutNavigation />
    </Providers>
  );
}

export { unstable_settings };
export default RootLayout;
