import { userAtom } from '@/src/atoms/UserAtom';
import { ModalContent } from '@/src/components/ModalContent/ModalContent';
import { useAtom } from 'jotai';
import { Button, H3, Spacer } from 'tamagui';

function SettingsScreen() {
  const [, setUser] = useAtom(userAtom);
  const clearUserSession = () => setUser(null);

  return (
    <ModalContent>
      <H3>Settings</H3>
      <Spacer size="$6" />
      <Button onPress={clearUserSession} size="$4" theme="light">
        Log Out
      </Button>
    </ModalContent>
  );
}

export { SettingsScreen };
