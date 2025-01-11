import { Anchor, Text, View, XStack } from 'tamagui';

function ModalScreen() {
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <XStack gap="$2">
        <Text ta="center">Made by</Text>
        <Anchor
          col="$blue10"
          href="https://twitter.com/natebirdman"
          target="_blank">
          @natebirdman,
        </Anchor>
        <Anchor
          color="$purple10"
          href="https://github.com/tamagui/tamagui"
          target="_blank"
          rel="noreferrer">
          give it a ⭐️
        </Anchor>
      </XStack>
    </View>
  );
}

export { ModalScreen };
