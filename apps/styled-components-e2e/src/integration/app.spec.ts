import { getGreeting } from '../support/app.po';

describe('styled-components', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to styled-components!');
  });
});
