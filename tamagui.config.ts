import { config as configBase, themes } from '@tamagui/config/v3';
import { createTamagui } from 'tamagui';
import Colors from './src/styles/Colors';

const config = createTamagui({
  ...configBase,
  themes: {
    ...themes,
    light: { ...themes.light, ...Colors.light },
    dark: { ...themes.dark, ...Colors.dark },
  },
});

type Conf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
export { config, type Conf };
