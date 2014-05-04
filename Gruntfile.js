'use strict';

module.exports = function (grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
 
    uglify: {
      min: {
        files: {
          'public/wp-content/themes/wpps-boilerplate/js/main.js': ['public/wp-content/themes/wpps-boilerplate/js/src/libs/*.js','public/wp-content/themes/wpps-boilerplate/js/src/*.js']
        }
      }
    },
 
    compass: {
      dist: {
        options: {
          config: 'public/wp-content/themes/wpps-boilerplate/css/config.rb',
          sassDir: 'public/wp-content/themes/wpps-boilerplate/css/sass',
          imagesDir: 'public/wp-content/themes/wpps-boilerplate/img',
          cssDir: 'public/wp-content/themes/wpps-boilerplate/css',
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
          cwd: 'public/wp-content/themes/wpps-boilerplate/img/src',
          src: ['*.{png,jpg,gif}'],
          dest: 'public/wp-content/themes/wpps-boilerplate/img/'
        }]
      }
    },

    browser_sync: {
      files: {
        src: 'public/wp-content/themes/wpps-boilerplate/css/screen.css'
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
        files: ['public/wp-content/themes/wpps-boilerplate/js/src/*.js','public/wp-content/themes/wpps-boilerplate/js/src/libs/*.js'],
        tasks: ['uglify']
      },
      styles: {
        files: ['public/wp-content/themes/wpps-boilerplate/css/**/*.{sass,scss}','public/wp-content/themes/wpps-boilerplate/img/ui/*.png'],
        tasks: ['compass']
      },
      images: {
        files: ['public/wp-content/themes/wpps-boilerplate/img/src/*.{png,jpg,gif}'],
        tasks: ['imagemin']
      }
    },
  });
 
  // Development task checks and concatenates JS, compiles SASS preserving comments and nesting, runs dev server, and starts watch
  grunt.registerTask('default', ['compass', 'uglify', 'imagemin', 'browser_sync', 'watch']);
 
 }
