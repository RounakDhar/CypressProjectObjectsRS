const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/integration/examples/*.js',
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 30000,
    watchForFileChanges: false,
    env: {
      url: "https://rahulshettyacademy.com/angularpractice/"
    },
    projectId: "a5zbka",
    reporter: "mochawesome"
  },
  retries: {
    runMode: 1
  },
  db: {
    userName: "",
    password: "",
    server: "",
    options: {
        database: "",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
}
});
