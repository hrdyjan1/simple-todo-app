import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

interface KeyboardViewProps extends React.PropsWithChildren {}

function KeyboardView(props: KeyboardViewProps) {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {props.children}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({ container: { flex: 1 } });

export { KeyboardView };
