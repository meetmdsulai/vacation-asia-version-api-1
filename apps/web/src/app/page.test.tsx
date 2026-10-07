import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { expect, it } from 'vitest';
import homePage from './page';
it('renders the public landing page without infrastructure details', () => {
  const html = renderToStaticMarkup(createElement(homePage));
  expect(html).toContain('Vacation Asia');
  expect(html).toContain('<h1>');
  expect(html).not.toContain('DATABASE_URL');
});
