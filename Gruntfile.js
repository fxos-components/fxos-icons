/*global module*/
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    webfont: {

      // Creates an stylesheet with embedded font
      embedded: {
        src: 'images/*.svg',
        dest: './',
        options: {
          font: 'gaia-icons',
          embed: 'woff',
          types: 'woff',
          ligatures: true,
          template: 'templates/style.css',
          htmlDemoTemplate: 'templates/index.html',
          templateOptions: {
            baseClass: '',
            classPrefix: 'icon-',
            mixinPrefix: ""
          }
        }
      },

      // Creates
      woff: {
        src: 'images/*.svg',
        dest: 'fonts/',
        options: {
          font: 'gaia-icons',
          types: 'woff',
          ligatures: true,
          hashes: false
        }
      }
    },

    // Make sure that structure conforms to
    // other shared components (grunt-webfont
    // doesn't let us specify filenames).
    rename: {
      css: {
        src: 'gaia-icons.css',
        dest: 'style.css'
      },

      example: {
        src: 'gaia-icons.html',
        dest: 'index.html'
      },

      font: {
        src: 'fonts/gaia-icons.woff',
        dest: './gaia-icons.woff'
      }
    },

    // Corrects the mime-type for the embedded
    // font to match what Gecko requires. This
    // is slow as we have to run the whole
    // conversion process again, but meh!
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: 'application/x-font-woff;charset=utf-8;',
              replacement: 'font/woff;'
            }
          ],
          usePrefix: false
        },

        files: [
          {
            src: ['style.css'],
            dest: './',
            flatten: true,
            expand: true,
          }
        ]
      }
    },

    // Removes unwanted files
    // created by grunt-webfont
    clean: ['fonts']
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-rename');

  grunt.registerTask('default', [
    'webfont:woff',
    'webfont:embedded',
    'rename',
    'replace',
    'clean'
  ]);
};
