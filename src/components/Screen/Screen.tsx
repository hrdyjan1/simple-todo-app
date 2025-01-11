import { YStack } from 'tamagui';

interface ScreenProps extends React.PropsWithChildren {}

function Screen(props: ScreenProps) {
  return (
    <YStack flex={1} bg="$background" px="$4" py="$2">
      {props.children}
    </YStack>
  );
}

export { Screen };
