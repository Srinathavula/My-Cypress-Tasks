/**
 * Environment Configuration
 * Loads environment variables from .env file
 */

const config = {
  getAlisonConfig: () => ({
    baseUrl: Cypress.env('ALISON_BASE_URL') || 'https://alison.com',
    username: Cypress.env('ALISON_USERNAME'),
    password: Cypress.env('ALISON_PASSWORD'),
  }),

  getDemoQAConfig: () => ({
    baseUrl: Cypress.env('DEMOQA_BASE_URL') || 'https://demoqa.com',
    username: Cypress.env('DEMOQA_USERNAME'),
    password: Cypress.env('DEMOQA_PASSWORD'),
  }),

  getTestEnv: () => Cypress.env('TEST_ENV') || 'development',
  defaultTimeout: 10000,
};

export default config;

