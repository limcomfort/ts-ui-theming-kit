import type { Button, Card, Input, ThemeName } from '../types/products';

/**
 * Абстрактная фабрика UI-компонентов.
 *
 * Каждая конкретная реализация возвращает **согласованное семейство**
 * из трёх продуктов:
 *
 *  - {@link Button} — кнопка (фон = accent, текст = foreground, hover-состояние);
 *  - {@link Input}  — текстовое поле (фон = surface, граница = border,
 *                     focus-подсветка = accent);
 *  - {@link Card}   — карточка-контейнер (фон = surface, тень = shadow).
 *
 * Клиентский код работает только с этим интерфейсом и не знает,
 * какая именно тема выбрана. Достаточно один раз получить фабрику
 * через {@link createThemeFactory} и вызвать её методы.
 *
 * @example
 * ```ts
 * const factory = createThemeFactory('dark');
 * const button = factory.createButton('Save');
 * const input  = factory.createInput('Email');
 * const card   = factory.createCard('Profile', 'Details...');
 * ```
 */
export interface ThemeFactory {
  /** Имя темы, которую реализует фабрика. */
  readonly theme: ThemeName;

  /**
   * Создаёт кнопку в стиле текущей темы.
   * @param label Текст на кнопке.
   */
  createButton(label: string): Button;

  /**
   * Создаёт текстовый инпут в стиле текущей темы.
   * @param placeholder Плейсхолдер поля.
   * @param initialValue Начальное значение (по умолчанию пусто).
   */
  createInput(placeholder: string, initialValue?: string): Input;

  /**
   * Создаёт карточку в стиле текущей темы.
   * @param title Заголовок карточки.
   * @param body  Основной текст.
   */
  createCard(title: string, body: string): Card;
}
