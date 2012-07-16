// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps: ["main"],

  baseUrl: "js",

  paths: {
    // Libraries
    jquery: "libs/jquery.min",
    lodash: "libs/lodash.min",
    backbone: "libs/backbone.min"
  },

  shim: {
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },
  }
});
