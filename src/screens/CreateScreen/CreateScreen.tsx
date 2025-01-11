import { Text, View } from 'tamagui';

function CreateScreen() {
  return (
    <View flex={1} alignItems="center" justifyContent="center" bg="$background">
      <Text color="$blue10">Todo</Text>
    </View>
  );
}

export { CreateScreen };
