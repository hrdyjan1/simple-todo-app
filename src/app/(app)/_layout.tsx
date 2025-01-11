import { Menu } from '@tamagui/lucide-icons';
import { router, Stack } from 'expo-router';
import { Button, useTheme } from 'tamagui';

function AppLayout() {
  const theme = useTheme();

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
              icon={<Menu />}
              onPressIn={() => router.navigate('/settings')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="create"
        options={{
          title: '',
          presentation: 'modal',
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
