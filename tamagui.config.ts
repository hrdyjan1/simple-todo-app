import { config as configBase, themes } from '@tamagui/config/v3';
import { createTamagui } from 'tamagui';
import Colors from './src/constants/Colors';

export const config = createTamagui({
  ...configBase,
  themes: {
    ...themes,
    light: { ...themes.light, ...Colors.light },
    dark: { ...themes.dark, ...Colors.dark },
  },
});

export default config;

export type Conf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
