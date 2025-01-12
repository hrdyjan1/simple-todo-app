import { ModalContent } from '@/src/components/ModalContent/ModalContent';
import { router } from 'expo-router';
import { Button, H3, Spacer } from 'tamagui';

function SettingsScreen() {
  const goToSignIn = () => router.dismissTo('/sign-in');

  return (
    <ModalContent>
      <H3>Settings</H3>
      <Spacer size="$6" />
      <Button onPress={goToSignIn} size="$4" theme="light">
        Log Out
      </Button>
    </ModalContent>
  );
}

export { SettingsScreen };
