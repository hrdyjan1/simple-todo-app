import React from 'react';
import { YStack } from 'tamagui';

interface ScreenProps extends React.ComponentProps<typeof YStack> {}

function Screen(props: ScreenProps) {
  return (
    <YStack flex={1} bg="$background" px="$4" py="$2" {...props}>
      {props.children}
    </YStack>
  );
}

export { Screen };
