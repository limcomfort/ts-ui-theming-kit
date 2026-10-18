import { createThemeFactory } from './index';

for (const theme of ['light', 'dark'] as const) {
  const factory = createThemeFactory(theme);
  console.log(`\n=== ${theme.toUpperCase()} (${factory.theme}) ===`);

  const button = factory.createButton('Save');
  const input = factory.createInput('Email', 'me@example.com');
  const card = factory.createCard('Profile', 'Abstract Factory in action');

  button.onClick(() => console.log('clicked'));
  input.type('!');

  console.log(button.render());
  console.log(input.render());
  console.log(card.render());
}