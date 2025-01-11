import { Stack } from 'expo-router';
import { useTheme } from 'tamagui';

function AppLayout() {
  const theme = useTheme();

  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        animation: 'fade',
        headerTintColor: theme.color.val,
        headerStyle: { backgroundColor: theme.background.val },
      }}>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen
        name="create"
        options={{
          title: 'Create',
          gestureEnabled: true,
          presentation: 'modal',
          gestureDirection: 'horizontal',
          contentStyle: {
            backgroundColor: theme.background.val,
          },
        }}
      />
    </Stack>
  );
}

export default AppLayout;
