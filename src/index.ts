import type { ThemeFactory } from './factories/abstract-factory';
import { DarkThemeFactory } from './factories/dark-factory';
import { LightThemeFactory } from './factories/light-factory';
import type { ThemeName } from './types/products';

export * from './types/products';
export type { ThemeFactory } from './factories/abstract-factory';
export { LightThemeFactory } from './factories/light-factory';
export { DarkThemeFactory } from './factories/dark-factory';
export { ThemedButton } from './components/button';
export { ThemedInput } from './components/input';
export { ThemedCard } from './components/card';

/** Готовые фабрики по имени темы. */
const factories: Record<ThemeName, () => ThemeFactory> = {
  light: () => new LightThemeFactory(),
  dark: () => new DarkThemeFactory(),
};

/**
 * Фабрика-создатель: возвращает конкретную {@link ThemeFactory}
 * по имени темы. Клиент дальше работает только с абстракцией.
 *
 * @param theme 'light' | 'dark'
 * @throws если имя темы неизвестно.
 */
export function createThemeFactory(theme: ThemeName): ThemeFactory {
  const make = factories[theme];
  if (!make) {
    throw new Error(`Unknown theme: ${theme}`);
  }
  return make();
}