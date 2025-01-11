import { KeyboardView } from '@/src/components/KeyboardView/KeyboardView';
import { Screen } from '@/src/components/Screen/Screen';
import { globalStyles } from '@/src/styles/globalStyles';
import { router } from 'expo-router';
import React from 'react';
import { Button, H2, Input, ScrollView, Spacer, YStack } from 'tamagui';

function SignInScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = () => {
    router.replace('/');
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
              value={email}
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            <Input
              value={password}
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
