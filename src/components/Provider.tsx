import { ToastProvider, ToastViewport } from '@tamagui/toast';
import { useColorScheme } from 'react-native';
import { TamaguiProvider, type TamaguiProviderProps } from 'tamagui';
import { config } from '../../tamagui.config';
import { CurrentToast } from './CurrentToast';

export function Provider({
  children,
  ...rest
}: Omit<TamaguiProviderProps, 'config'>) {
  const colorScheme = useColorScheme();

  return (
    <TamaguiProvider
      config={config}
      defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}
      {...rest}>
      <ToastProvider swipeDirection="horizontal" duration={6000}>
        {children}
        <CurrentToast />
        <ToastViewport top="$8" left={0} right={0} />
      </ToastProvider>
    </TamaguiProvider>
  );
}
