/*global module*/
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),

    webfont: {

      // Creates a stylesheet with embedded font
      embedded: {
        src: 'images/*.svg',
        dest: 'fonts/',
        destCss: './',
        destHtml: './',
        options: {
          font: 'gaia-icons',
          types: 'woff',
          embed: 'woff',
          ligatures: true,
          hashes: false,
          template: 'templates/style.css',
          htmlDemoTemplate: 'templates/index.html'
        }
      },

      // Creates font files
      files: {
        src: 'images/*.svg',
        dest: 'fonts/',
        destCss: './',
        destHtml: './',
        options: {
          font: 'gaia-icons',
          types: 'ttf,woff,eot',
          template: 'templates/style.css',
          htmlDemoTemplate: 'templates/index.html',
          ligatures: true,
          hashes: false,
          templateOptions: {
            baseClass: '',
            classPrefix: '',
            mixinPrefix: ''
          }
        }
      }
    },

    // Make sure that structure conforms to
    // other shared components (grunt-webfont
    // doesn't let us specify filenames).
    rename: {
      'css-embedded': {
        src: 'gaia-icons.css',
        dest: 'style-embedded.css',
      },

      example: {
        src: 'gaia-icons.html',
        dest: 'index.html'
      }
    },

    clean: [
      'fonts/gaia-icons.css',
      'fonts/gaia-icons.html',
      'gaia-icons.html',
      'gaia-icons.css'
    ]
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-rename');

  grunt.registerTask('default', [
    'webfont:embedded',
    'rename:css-embedded',
    'webfont:files',
    'rename:example',
    'clean'
  ]);
};
