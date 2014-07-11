/*global module*/
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    webfont: {
      icons: {
        src: 'images/*.svg',
        dest: 'fonts/',
        destCss: './',
        options: {
          font: 'gaia-icons',
          destHtml: 'examples/',
          embed: 'ttf',
          types: 'ttf',
          ligatures: true,
          template: 'template.css',
          htmlDemoTemplate: 'template.html',
          templateOptions: {
            baseClass: "gaia-icon",
            classPrefix: 'icon-',
            mixinPrefix: ""
          }
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
        src: 'examples/gaia-icons.html',
        dest: 'examples/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-rename');

  grunt.registerTask('default', ['webfont', 'rename']);
};
