import { Screen } from '@/src/components/Screen/Screen';
import { Link, Stack } from 'expo-router';
import { Spacer, Text, View } from 'tamagui';

function NotFoundScreen() {
  return (
    <Screen>
      <Stack.Screen options={{ title: 'Oops!' }} />

      <View flex={1} justifyContent="center" alignItems="center">
        <Text>This screen doesn&apos;t exist.</Text>
        <Spacer size="$2" />
        <Link href="/" replace>
          <Text color="$accent" textAlign="center">
            Go to home screen!
          </Text>
        </Link>
      </View>
    </Screen>
  );
}

export { NotFoundScreen };
