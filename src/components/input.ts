import type { ComponentStyle, Input } from '../types/products';

/** Конкретный инпут; стиль приходит из фабрики. */
export class ThemedInput implements Input {
  readonly kind = 'input' as const;
  value: string;

  constructor(
    public placeholder: string,
    initialValue: string,
    public readonly style: ComponentStyle,
  ) {
    this.value = initialValue;
  }

  type(char: string): void {
    this.value += char;
  }

  render(): string {
    const s = this.style;
    return (
      `<input placeholder="${this.placeholder}" value="${this.value}" ` +
      `style="background:${s.background};color:${s.foreground};` +
      `border:1px solid ${s.border};border-radius:${s.radius}px;` +
      `padding:8px 12px;outline-color:${s.accent}" />`
    );
  }
}