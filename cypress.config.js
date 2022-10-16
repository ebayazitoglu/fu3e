const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://www.fu3e.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
