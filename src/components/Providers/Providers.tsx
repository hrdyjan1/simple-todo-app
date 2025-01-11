import { ToastProvider, ToastViewport } from '@tamagui/toast';
import { useColorScheme } from 'react-native';
import { TamaguiProvider, type TamaguiProviderProps } from 'tamagui';
import { config } from '../../../tamagui.config';
import { GeneralToast } from '../Toast/GeneralToast';

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
      <ToastProvider swipeDirection="horizontal" duration={6000}>
        {props.children}
        <GeneralToast />
        <ToastViewport top="$8" left={0} right={0} />
      </ToastProvider>
    </TamaguiProvider>
  );
}

export { Providers };
