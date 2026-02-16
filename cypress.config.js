// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     reporter: "mochawesome",
//     reporterOptions: {
//       reportDir: "cypress/reports/json",
//       reportFilename: "[name]",
//       overwrite: true,
//       html: true,
//       json: true,
//       video:true,
//       videoUploadOnPasses: true,
//       embeddedScreenshots: true,
//       inlineAssets: true
//     }
//   }
// });


// const { defineConfig } = require("cypress");

// module.exports = defineConfig({

//   // ✅ Automatically take screenshot on failure
//   screenshotOnRunFailure: true,

//   // ✅ Enable video recording
//   video: true,
//   videoUploadOnPasses: true,

//   e2e: {

//     // ✅ Mochawesome Reporter
//     reporter: "mochawesome",

//     reporterOptions: {
//       reportDir: "cypress/reports",
//       reportFilename: "[name]",
//       overwrite: true,
//       html: true,
//       json: true,
//       embeddedScreenshots: true,
//       inlineAssets: true
//     }

//   }

// });


const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  projectId: 'your_project_id',

  // Screenshot and video settings
  screenshotOnRunFailure: true,
  video: true,
  videoUploadOnPasses: false,
  videoCompression: 32,

  // Default timeout
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 10000,

  // Viewport
  viewportWidth: 1280,
  viewportHeight: 720,

  e2e: {
    baseUrl: 'https://demoqa.com',

    // Fixtures path
    specPattern: 'cypress/e2e/**/*.cy.js',

    setupNodeEvents(on, config) {
      // Mochawesome reporter plugin
      require('cypress-mochawesome-reporter/plugin')(on);

      // Load environment variables
      config.env = {
        ...config.env,
        ALISON_BASE_URL: process.env.ALISON_BASE_URL || 'https://alison.com',
        ALISON_USERNAME: process.env.ALISON_USERNAME,
        ALISON_PASSWORD: process.env.ALISON_PASSWORD,
        DEMOQA_BASE_URL: process.env.DEMOQA_BASE_URL || 'https://demoqa.com',
        DEMOQA_USERNAME: process.env.DEMOQA_USERNAME,
        DEMOQA_PASSWORD: process.env.DEMOQA_PASSWORD,
        TEST_ENV: process.env.TEST_ENV || 'development',
      };

      return config;
    },

    // Reporter configuration
    reporter: 'cypress-mochawesome-reporter',

    reporterOptions: {
      reportDir: 'cypress/reports/json',
      reportFilename: '[name].json',
      overwrite: false,
      html: true,
      json: true,
      // Embed screenshots into the HTML report and inline assets so the
      // generated HTML contains images and styles (self-contained)
      embeddedScreenshots: true,
      inlineAssets: true,
      // Hide the source code in the report
      // `enableCode: false` prevents showing the test/source code snippet in report
      enableCode: false,
      charts: true,
      timestamp: 'yyyy-mm-dd_HH-MM-ss'
    }
  }
});

