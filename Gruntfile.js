'use strict';

module.exports = function (grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
 
    uglify: {
      min: {
        files: {
          'public/wp-content/themes/wordplate/js/main.js': 
            [
              'public/wp-content/themes/wordplate/js/src/bootstrap/affix.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/alert.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/button.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/carousel.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/collapse.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/dropdown.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/modal.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/tooltip.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/popover.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/scrollspy.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/tab.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/transition.js',
              'public/wp-content/themes/wordplate/js/src/libs/*.js',
              'public/wp-content/themes/wordplate/js/src/*.js'
            ]
        }
      }
    },

    concat: {
      min: {
        files: {
          'public/wp-content/themes/wordplate/js/main.js': 
            [
              'public/wp-content/themes/wordplate/js/src/bootstrap/affix.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/alert.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/button.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/carousel.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/collapse.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/dropdown.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/modal.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/tooltip.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/popover.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/scrollspy.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/tab.js',
              'public/wp-content/themes/wordplate/js/src/bootstrap/transition.js',
              'public/wp-content/themes/wordplate/js/src/libs/*.js',
              'public/wp-content/themes/wordplate/js/src/*.js'
            ]
        }
      }
    },
 
    compass: {
      dist: {
        options: {
          config: 'public/wp-content/themes/wordplate/css/config.rb',
          sassDir: 'public/wp-content/themes/wordplate/css/sass',
          imagesDir: 'public/wp-content/themes/wordplate/img',
          cssDir: 'public/wp-content/themes/wordplate/css',
          environment: 'production',
          outputStyle: 'compressed',
          force: true
        }
      }
    },

    browserSync: {
      files: {
        src: 'public/wp-content/themes/wordplate/css/screen.css'
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
        files: ['public/wp-content/themes/wordplate/js/src/*.js','public/wp-content/themes/wordplate/js/src/libs/*.js'],
        tasks: ['uglify']
      },
      styles: {
        files: ['public/wp-content/themes/wordplate/css/**/*.{sass,scss}','public/wp-content/themes/wordplate/img/ui/*.png'],
        tasks: ['compass']
      }
    },
  });
 
  // Default builds for production, run dev for unminified js
  grunt.registerTask('dev', ['compass', 'concat']);
  grunt.registerTask('default', ['compass', 'uglify', 'browserSync', 'watch']);
 
 }
