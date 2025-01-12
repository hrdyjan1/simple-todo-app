import { isUserAuthAtom } from '@/src/atoms/UserAtom';
import { Menu } from '@tamagui/lucide-icons';
import { Redirect, router, Stack } from 'expo-router';
import { useAtom } from 'jotai';
import { Button, useTheme } from 'tamagui';

function AppLayout() {
  const theme = useTheme();
  const [isUserAuth] = useAtom(isUserAuthAtom);

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!isUserAuth) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        animation: 'fade',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerTintColor: theme.color.val,
        headerStyle: { backgroundColor: theme.background.val },
      }}>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerRight: () => (
            <Button
              p="$3"
              icon={<Menu size="$1" />}
              backgroundColor="$colorTransparent"
              onPressIn={() => router.navigate('/settings')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="create"
        options={{
          title: '',
          contentStyle: { backgroundColor: theme.background.val },
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          animation: 'fade',
          headerShown: false,
          presentation: 'transparentModal',
        }}
      />
    </Stack>
  );
}

export default AppLayout;
