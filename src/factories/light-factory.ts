import { ThemedButton } from '../components/button';
import { ThemedCard } from '../components/card';
import { ThemedInput } from '../components/input';
import type { Button, Card, ComponentStyle, Input, ThemeName } from '../types/products';
import type { ThemeFactory } from './abstract-factory';

/**
 * Светлая тема.
 *
 * Влияние темы на значения {@link ComponentStyle}:
 *  - `background` — светлые поверхности (`#ffffff`, `#f5f7fa`);
 *  - `foreground` — тёмный текст (`#1f2937`) для контраста;
 *  - `border`     — мягкий серый (`#d1d5db`);
 *  - `accent`     — насыщенный синий (`#2563eb`) для CTA и focus;
 *  - `radius`     — 8px (умеренные скругления);
 *  - `shadow`     — светлая многослойная тень для «парящих» элементов.
 */
export class LightThemeFactory implements ThemeFactory {
  readonly theme: ThemeName = 'light';

  /** Базовый стиль поверхностей светлой темы. */
  private readonly surface: ComponentStyle = {
    background: '#ffffff',
    foreground: '#1f2937',
    border: '#d1d5db',
    accent: '#2563eb',
    radius: 8,
    shadow: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
  };

  /** Кнопка: акцентный фон + белый текст. */
  createButton(label: string): Button {
    return new ThemedButton(label, {
      ...this.surface,
      background: this.surface.accent,
      foreground: '#ffffff',
      border: this.surface.accent,
    });
  }

  /** Инпут: белая поверхность, серый бордер, синий focus. */
  createInput(placeholder: string, initialValue = ''): Input {
    return new ThemedInput(placeholder, initialValue, {
      ...this.surface,
      background: '#f9fafb',
    });
  }

  /** Карточка: белая поверхность с лёгкой тенью. */
  createCard(title: string, body: string): Card {
    return new ThemedCard(title, body, this.surface);
  }
}