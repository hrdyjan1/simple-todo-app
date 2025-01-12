import { ToastProvider, ToastViewport } from '@tamagui/toast';
import { useColorScheme } from 'react-native';
import { TamaguiProvider, type TamaguiProviderProps } from 'tamagui';
import { config } from '../../../tamagui.config';
import { Toast } from '../Toast/GeneralToast';

interface ProvidersProps extends React.PropsWithChildren {
  settings?: Omit<TamaguiProviderProps, 'config' | 'children'>;
}

function Providers(props: ProvidersProps) {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider
      config={config}
      defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}
      {...props.settings}>
      <ToastProvider swipeDirection="horizontal" duration={3_000}>
        {props.children}
        <Toast />
        <ToastViewport bottom="$4" left={0} right={0} />
      </ToastProvider>
    </TamaguiProvider>
  );
}

export { Providers };
