import { Link } from 'expo-router';
import { Button, H3, Spacer, YStack } from 'tamagui';

function HomeScreen() {
  return (
    <YStack
      flex={1}
      bg="$background"
      alignItems="center"
      justifyContent="center">
      <H3 color="$blue10">TODO: List of all tasks</H3>
      <Spacer />
      <Link href="/create" asChild>
        <Button mr="$4" bg="$purple8" color="$purple12">
          Create!
        </Button>
      </Link>
      <Link href="/sign-in" asChild replace>
        <Button mr="$4" bg="$red8" color="$red12">
          Sign out!
        </Button>
      </Link>
    </YStack>
  );
}

export { HomeScreen };
