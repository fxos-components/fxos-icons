/*global module*/
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('bower.json'),

    webfont: {

      // Creates a stylesheet with embedded font
      embedded: {
        src: 'images/*.svg',
        dest: './',
        options: {
          font: 'gaia-icons',
          types: 'ttf',
          ligatures: true,
          hashes: false,
          template: 'templates/style.css',
          htmlDemoTemplate: 'templates/index.html',
          templateOptions: {
            baseClass: '',
            classPrefix: 'icon-',
            mixinPrefix: "",
          }
        }
      },

      // Creates font files
      files: {
        src: 'images/*.svg',
        dest: 'fonts/',
        options: {
          font: 'gaia-icons',
          types: 'woff,ttf,eot',
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
            },
            {
              match: 'application/x-font-ttf;charset=utf-8;',
              replacement: 'font/opentype;'
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

    clean: [
      'fonts/gaia-icons.css',
      'fonts/gaia-icons.html'
    ]
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-rename');

  grunt.registerTask('default', [
    'webfont:files',
    'webfont:embedded',
    'rename',
    'replace',
    'clean'
  ]);
};
