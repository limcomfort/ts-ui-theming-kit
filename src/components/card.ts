import type { Card, ComponentStyle } from '../types/products';

/** Конкретная карточка; стиль приходит из фабрики. */
export class ThemedCard implements Card {
  readonly kind = 'card' as const;

  constructor(
    public title: string,
    public body: string,
    public readonly style: ComponentStyle,
  ) {}

  render(): string {
    const s = this.style;
    return (
      `<div style="background:${s.background};color:${s.foreground};` +
      `border:1px solid ${s.border};border-radius:${s.radius}px;` +
      `box-shadow:${s.shadow};padding:16px">` +
      `<h3 style="margin:0 0 8px">${this.title}</h3>` +
      `<p style="margin:0">${this.body}</p></div>`
    );
  }
}