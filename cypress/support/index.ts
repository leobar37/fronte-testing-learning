// load type definitions that come with Cypress module
/// <reference types="cypress" />
export {};
declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example
       *    cy.dataCy('greeting')
       */
      dataCy(value: string): Chainable<JQuery>;
    }
  }
}
