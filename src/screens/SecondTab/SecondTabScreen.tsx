import { Text, View } from 'tamagui';

function SecondTabScreen() {
  return (
    <View flex={1} alignItems="center" justifyContent="center" bg="$background">
      <Text fontSize={20} color="$blue10">
        Tab Two
      </Text>
    </View>
  );
}

export { SecondTabScreen };
