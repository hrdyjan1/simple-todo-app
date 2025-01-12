import { globalStyles } from '@/src/styles/globalStyles';
import { KeyboardAvoidingView, Platform } from 'react-native';

interface KeyboardViewProps extends React.PropsWithChildren {}

function KeyboardView(props: KeyboardViewProps) {
  return (
    <KeyboardAvoidingView
      style={globalStyles.flexOne}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {props.children}
    </KeyboardAvoidingView>
  );
}

export { KeyboardView };
