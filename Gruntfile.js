/*global module*/
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),

    webfont: {
      // Creates a stylesheet with embedded font
      embedded: {
        src: 'images/gaia-icons/*.svg',
        dest: 'output/embedded/',
        options: {
          font: 'gaia-icons',
          types: 'ttf',
          embed: 'ttf',
          ligatures: true,
          hashes: false,
          template: 'templates/gaia-icons/gaia-icons.css',
          htmlDemoTemplate: 'templates/gaia-icons/index.html'
        }
      },

      'gaia-tv-icons-embedded': {
        src: 'images/gaia-tv-icons/*.svg',
        dest: 'output/embedded/',
        options: {
          font: 'gaia-tv-icons',
          types: 'ttf',
          embed: 'ttf',
          ligatures: true,
          hashes: false,
          template: 'templates/gaia-tv-icons/gaia-tv-icons.css',
          htmlDemoTemplate: 'templates/gaia-tv-icons/index.html'
        }
      },

      // Creates font files
      files: {
        src: 'images/gaia-icons/*.svg',
        dest: 'output/files/fonts/',
        destCss: 'output/files/',
        destHtml: 'output/files/',
        options: {
          font: 'gaia-icons',
          types: 'ttf',
          template: 'templates/gaia-icons/gaia-icons.css',
          htmlDemoTemplate: 'templates/gaia-icons/index.html',
          ligatures: true,
          hashes: false,
          templateOptions: {
            baseClass: '',
            classPrefix: '',
            mixinPrefix: ''
          }
        }
      },

      'gaia-tv-icons-files': {
        src: 'images/gaia-tv-icons/*.svg',
        dest: 'output/files/fonts/',
        destCss: 'output/files/',
        destHtml: 'output/files/',
        options: {
          font: 'gaia-tv-icons',
          types: 'ttf',
          template: 'templates/gaia-tv-icons/gaia-tv-icons.css',
          htmlDemoTemplate: 'templates/gaia-tv-icons/index.html',
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
        src: 'output/embedded/gaia-icons.css',
        dest: 'gaia-icons-embedded.css',
      },

      css: {
        src: 'output/files/gaia-icons.css',
        dest: 'gaia-icons.css',
      },

      'gaia-tv-icons-css-embedded': {
        src: 'output/embedded/gaia-tv-icons.css',
        dest: 'gaia-tv-icons-embedded.css'
      },

      'gaia-tv-icons-css': {
        src: 'output/files/gaia-tv-icons.css',
        dest: 'gaia-tv-icons.css'
      },

      'gaia-icons-fonts': {
        src: 'output/files/fonts/gaia-icons.ttf',
        dest: 'fonts/gaia-icons.ttf'
      },

      'gaia-tv-icons-fonts': {
        src: 'output/files/fonts/gaia-tv-icons.ttf',
        dest: 'fonts/gaia-tv-icons.ttf'
      },

      fonts: {
        src: 'output/files/fonts',
        dest: 'fonts'
      },

      example: {
        src: 'output/files/gaia-icons.html',
        dest: 'index.html'
      },

      'gaia-tv-icons-example': {
        src: 'output/files/gaia-tv-icons.html',
        dest: 'index-gaia-tv-icons.html'
      }
    },

    clean: {
      fonts: 'fonts',
      'gaia-icons-font': 'fonts/gaia-icons.ttf',
      'gaia-tv-icons-font': 'fonts/gaia-tv-icons.ttf',
      output: 'output'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-rename');

  grunt.registerTask('default', [
    'clean:fonts',
    'webfont:files',
    'webfont:embedded',
    'webfont:gaia-tv-icons-files',
    'webfont:gaia-tv-icons-embedded',
    'rename:css-embedded',
    'rename:css',
    'rename:gaia-tv-icons-css-embedded',
    'rename:gaia-tv-icons-css',
    'rename:fonts',
    'rename:example',
    'rename:gaia-tv-icons-example',
    'clean:output'
  ]);

  grunt.registerTask('gaia-icons', [
    'clean:gaia-icons-font',
    'webfont:files',
    'webfont:embedded',
    'rename:css-embedded',
    'rename:css',
    'rename:gaia-icons-fonts',
    'rename:example',
    'clean:output'
  ]);

  grunt.registerTask('gaia-tv-icons', [
    'clean:gaia-tv-icons-font',
    'webfont:gaia-tv-icons-files',
    'webfont:gaia-tv-icons-embedded',
    'rename:gaia-tv-icons-css-embedded',
    'rename:gaia-tv-icons-css',
    'rename:gaia-tv-icons-fonts',
    'rename:gaia-tv-icons-example',
    'clean:output'
  ]);
};
