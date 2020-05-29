import { html, fixture, expect } from '@open-wc/testing';

import '../src/app-babel-formation.js';

describe('ComponentExample', () => {
  it('here case test', async () => {
    const el = await fixture(html`
        <app-babel-formation></app-babel-formation>
    `);
  });
});
