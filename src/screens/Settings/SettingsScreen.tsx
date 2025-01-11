import { ModalContent } from '@/src/components/ModalContent/ModalContent';
import { router } from 'expo-router';
import React from 'react';
import { Button, H3, Label, Separator, Spacer, Switch, XStack } from 'tamagui';

function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const goToSignIn = () => router.dismissTo('/sign-in');

  return (
    <ModalContent>
      <H3>Settings</H3>
      <Spacer size="$8" />

      <XStack alignItems="center" gap="$4" jc="center">
        <Label>Dark mode</Label>
        <Separator minHeight={20} vertical />
        <Switch defaultChecked={isDarkMode} onCheckedChange={setIsDarkMode}>
          <Switch.Thumb animation="quicker" />
        </Switch>
      </XStack>

      <Spacer size="$6" />

      <Button onPress={goToSignIn} size="$4" theme="light">
        Log Out
      </Button>
    </ModalContent>
  );
}

export { SettingsScreen };
