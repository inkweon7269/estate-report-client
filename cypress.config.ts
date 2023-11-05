import { defineConfig } from 'cypress';

export default defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    numTestsKeptInMemory: 1,
    experimentalMemoryManagement: true,
    e2e: {
        baseUrl: 'http://localhost:3000',
        experimentalStudio: true,
        chromeWebSecurity: false,
        specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
