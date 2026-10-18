/**
 * Продукты абстрактной фабрики — семейство UI-компонентов.
 * Все компоненты одного семейства (темы) гарантированно совместимы
 * друг с другом по цветовой палитре, типографике и радиусам скругления.
 */

/** Описание визуального стиля, который несёт каждый компонент. */
export interface ComponentStyle {
  /** Цвет фона компонента (hex/rgba). */
  background: string;
  /** Цвет текста / иконок. */
  foreground: string;
  /** Цвет границы (для инпутов, карточек). */
  border: string;
  /** Цвет акцента (hover, focus, primary-кнопка). */
  accent: string;
  /** Радиус скругления в px. */
  radius: number;
  /** Тень (CSS box-shadow) — в тёмной теме обычно мягче/темнее. */
  shadow: string;
}

/** Кнопка. */
export interface Button {
  /** Уникальный тип продукта — помогает различать семейства в рантайме. */
  readonly kind: 'button';
  /** Метка на кнопке. */
  label: string;
  /** Стиль, вычисленный фабрикой под конкретную тему. */
  readonly style: ComponentStyle;
  /** Обработчик клика. */
  onClick(handler: () => void): void;
  /** Вернуть HTML-разметку (для SSR / демо). */
  render(): string;
}

/** Текстовый инпут. */
export interface Input {
  readonly kind: 'input';
  placeholder: string;
  value: string;
  readonly style: ComponentStyle;
  /** Ввод символа. */
  type(char: string): void;
  render(): string;
}

/** Карточка-контейнер. */
export interface Card {
  readonly kind: 'card';
  title: string;
  body: string;
  readonly style: ComponentStyle;
  render(): string;
}

/** Имя темы, поддерживаемой фабриками. */
export type ThemeName = 'light' | 'dark';
