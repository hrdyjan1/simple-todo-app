import { Link, Stack } from 'expo-router';
import React from 'react';
import { Spacer, Text, View } from 'tamagui';

function NotFoundScreen() {
  return (
    <React.Fragment>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View flex={1} justifyContent="center" alignItems="center">
        <Text>This screen doesn&apos;t exist.</Text>
        <Spacer size="$2" />
        <Link href="/" replace>
          <Text fontSize={18} color="$accent" textAlign="center">
            Go to home screen!
          </Text>
        </Link>
      </View>
    </React.Fragment>
  );
}

export { NotFoundScreen };
