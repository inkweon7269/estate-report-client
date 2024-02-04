import { defineConfig } from 'cypress';

export default defineConfig({
    viewportWidth: 1000,
    viewportHeight: 600,
    numTestsKeptInMemory: 1,
    experimentalMemoryManagement: true,
    defaultCommandTimeout: 6000,

    watchForFileChanges: false,
    waitForAnimations: true,
    animationDistanceThreshold: 20,
    execTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,

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
        testIsolation: false,
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
        setupNodeEvents(on, config) {
            // implement node event listeners here
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});
