import { KeyboardView } from '@/src/components/KeyboardView/KeyboardView';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, H2, Input, ScrollView, Spacer, View, YStack } from 'tamagui';

function SignInScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    router.replace('/');
  };

  return (
    <View f={1} backgroundColor="$background">
      <KeyboardView>
        <ScrollView
          f={1}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.flexGrowOne}>
          <YStack f={1} padding={20} justifyContent="center" gap="$4">
            <H2 ta="center">Login</H2>

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

            <Button onPress={handleLogin}>Sign in</Button>
          </YStack>
        </ScrollView>
      </KeyboardView>
    </View>
  );
}

const styles = StyleSheet.create({ flexGrowOne: { flexGrow: 1 } });

export { SignInScreen };
