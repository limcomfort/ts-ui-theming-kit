import type { Button, ComponentStyle } from '../types/products';

/** Конкретная кнопка; стиль приходит из фабрики. */
export class ThemedButton implements Button {
  readonly kind = 'button' as const;
  private clickHandler: (() => void) | null = null;

  constructor(
    public label: string,
    public readonly style: ComponentStyle,
  ) {}

  onClick(handler: () => void): void {
    this.clickHandler = handler;
  }

  /** Рендер в HTML (демонстрация того, как тема влияет на вёрстку). */
  render(): string {
    const s = this.style;
    return (
      `<button style="background:${s.background};color:${s.foreground};` +
      `border:1px solid ${s.border};border-radius:${s.radius}px;` +
      `box-shadow:${s.shadow};padding:8px 16px;cursor:pointer">` +
      `${this.label}</button>`
    );
  }
}