import { useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { View } from 'tamagui';

interface ModalContentProps extends React.PropsWithChildren {}

function ModalContent(props: ModalContentProps) {
  const router = useRouter();

  return (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center"
      backgroundColor="rgba(0, 0, 0, 0.5)">
      <Pressable style={StyleSheet.absoluteFill} onPressIn={router.back} />
      <View width="80%" p={20} backgroundColor="$background" borderRadius="$4">
        {props.children}
      </View>
    </View>
  );
}

export { ModalContent };
