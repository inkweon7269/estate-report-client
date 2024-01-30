import { defineConfig } from 'cypress';

export default defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    numTestsKeptInMemory: 1,
    experimentalMemoryManagement: true,
    defaultCommandTimeout: 6000,
    env: {
        url: 'https://rahulshettyacademy.com',
    },
    retries: {
        runMode: 1,
    },

    reporter: 'cypress-mochawesome-reporter',
    e2e: {
        baseUrl: 'http://localhost:3000',
        experimentalStudio: true,
        chromeWebSecurity: false,
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});
