import { userAtom } from '@/src/atoms/UserAtom';
import { KeyboardView } from '@/src/components/KeyboardView/KeyboardView';
import { Screen } from '@/src/components/Screen/Screen';
import { globalStyles } from '@/src/styles/globalStyles';
import { useToastController } from '@tamagui/toast';
import { router } from 'expo-router';
import { useAtom } from 'jotai';
import React from 'react';
import { Button, H2, Input, ScrollView, Spacer, YStack } from 'tamagui';

function SignInScreen() {
  const toast = useToastController();
  const [user, setUser] = useAtom(userAtom);
  console.log('🚀 ~ SignInScreen ~ user:', user);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = () => {
    if (username !== 'admin' || password !== 'admin') {
      return toast.show('Sign in error', { message: 'Wrong credentials' });
    }
    setUser({ accessToken: 'todo', username }).then(() => router.replace('/'));
  };

  return (
    <Screen>
      <KeyboardView>
        <ScrollView
          f={1}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={globalStyles.flexOne}>
          <YStack f={1} padding={20} justifyContent="center" gap="$4">
            <H2 ta="center">Welcome</H2>

            <Spacer size="$2" />

            <Input
              value={username}
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={setUsername}
            />

            <Input
              value={password}
              autoCapitalize="none"
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry
            />

            <Spacer size="$2" />

            <Button onPress={handleSignIn}>Sign in</Button>
          </YStack>
        </ScrollView>
      </KeyboardView>
    </Screen>
  );
}

export { SignInScreen };
