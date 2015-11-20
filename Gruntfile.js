'use strict';
module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      target: ['*.js']
    },
    mochacli: {
      options: {
        reporter: 'nyan',
        bail: true
      },
      all: ['test/*.js']
    }
  });

  grunt.registerTask('default', ['eslint', 'mochacli']);
};
