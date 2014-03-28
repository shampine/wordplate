'use strict';

module.exports = function (grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
 
    uglify: {
      min: {
        files: {
          'public/content/themes/wpps-boilerplate/js/main.js': ['public/content/themes/wpps-boilerplate/js/src/libs/*.js','public/content/themes/wpps-boilerplate/js/src/*.js']
        }
      }
    },
 
    compass: {
      dist: {
        options: {
          config: 'public/content/themes/wpps-boilerplate/css/config.rb',
          sassDir: 'public/content/themes/wpps-boilerplate/css/sass',
          imagesDir: 'public/content/themes/wpps-boilerplate/img',
          cssDir: 'public/content/themes/wpps-boilerplate/css',
          environment: 'production',
          outputStyle: 'compressed',
          force: true
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'public/content/themes/wpps-boilerplate/img/src',
          src: ['*.{png,jpg,gif}'],
          dest: 'public/content/themes/wpps-boilerplate/img/'
        }]
      }
    },

    browser_sync: {
      files: {
        src: 'public/content/themes/wpps-boilerplate/css/screen.css'
      },
      options: {
          host: "localhost",
          watchTask: true
      }
    },

    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['public/content/themes/wpps-boilerplate/js/src/*.js','public/content/themes/wpps-boilerplate/js/src/libs/*.js'],
        tasks: ['uglify']
      },
      styles: {
        files: ['public/content/themes/wpps-boilerplate/css/**/*.{sass,scss}','public/content/themes/wpps-boilerplate/img/ui/*.png'],
        tasks: ['compass']
      },
      images: {
        files: ['public/content/themes/wpps-boilerplate/img/src/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      }
    },
  });
 
  // Development task checks and concatenates JS, compiles SASS preserving comments and nesting, runs dev server, and starts watch
  grunt.registerTask('default', ['compass', 'uglify', 'imagemin', 'browser_sync', 'watch']);
 
 }
