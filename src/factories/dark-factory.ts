import { ThemedButton } from '../components/button';
import { ThemedCard } from '../components/card';
import { ThemedInput } from '../components/input';
import type { Button, Card, ComponentStyle, Input, ThemeName } from '../types/products';
import type { ThemeFactory } from './abstract-factory';

/**
 * Тёмная тема.
 *
 * Влияние темы на значения {@link ComponentStyle}:
 *  - `background` — тёмные поверхности (`#111827`, `#1f2937`);
 *  - `foreground` — светлый текст (`#f9fafb`) для контраста;
 *  - `border`     — приглушённый серый (`#374151`), чтобы границы
 *                   не «резали глаз» на тёмном фоне;
 *  - `accent`     — более яркий синий (`#60a5fa`), т.к. насыщенные
 *                   цвета на тёмном фоне выглядят темнее;
 *  - `radius`     — 10px (чуть мягче, чем в светлой теме);
 *  - `shadow`     — глубокая тёмная тень (`rgba(0,0,0,0.5)`) —
 *                   на тёмном фоне нужна сильнее для читаемости слоёв.
 */
export class DarkThemeFactory implements ThemeFactory {
  readonly theme: ThemeName = 'dark';

  /** Базовый стиль поверхностей тёмной темы. */
  private readonly surface: ComponentStyle = {
    background: '#1f2937',
    foreground: '#f9fafb',
    border: '#374151',
    accent: '#60a5fa',
    radius: 10,
    shadow: '0 4px 12px rgba(0,0,0,0.5)',
  };

  /** Кнопка: акцентный фон, тёмный текст для контраста. */
  createButton(label: string): Button {
    return new ThemedButton(label, {
      ...this.surface,
      background: this.surface.accent,
      foreground: '#0b1220',
      border: this.surface.accent,
    });
  }

  /** Инпут: чуть темнее поверхности, приглушённый бордер. */
  createInput(placeholder: string, initialValue = ''): Input {
    return new ThemedInput(placeholder, initialValue, {
      ...this.surface,
      background: '#111827',
    });
  }

  /** Карточка: тёмная поверхность с глубокой тенью. */
  createCard(title: string, body: string): Card {
    return new ThemedCard(title, body, this.surface);
  }
}