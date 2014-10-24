'use strict';

module.exports = function (grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),
 
    uglify: {
      min: {
        files: {
          'public/assets/themes/wordplate/js/main.js': 
            [
              'public/assets/themes/wordplate/js/src/bootstrap/affix.js',
              'public/assets/themes/wordplate/js/src/bootstrap/alert.js',
              'public/assets/themes/wordplate/js/src/bootstrap/button.js',
              'public/assets/themes/wordplate/js/src/bootstrap/carousel.js',
              'public/assets/themes/wordplate/js/src/bootstrap/collapse.js',
              'public/assets/themes/wordplate/js/src/bootstrap/dropdown.js',
              'public/assets/themes/wordplate/js/src/bootstrap/modal.js',
              'public/assets/themes/wordplate/js/src/bootstrap/tooltip.js',
              'public/assets/themes/wordplate/js/src/bootstrap/popover.js',
              'public/assets/themes/wordplate/js/src/bootstrap/scrollspy.js',
              'public/assets/themes/wordplate/js/src/bootstrap/tab.js',
              'public/assets/themes/wordplate/js/src/bootstrap/transition.js',
              'public/assets/themes/wordplate/js/src/libs/*.js',
              'public/assets/themes/wordplate/js/src/*.js'
            ]
        }
      }
    },

    concat: {
      min: {
        files: {
          'public/assets/themes/wordplate/js/main.js': 
            [
              'public/assets/themes/wordplate/js/src/bootstrap/affix.js',
              'public/assets/themes/wordplate/js/src/bootstrap/alert.js',
              'public/assets/themes/wordplate/js/src/bootstrap/button.js',
              'public/assets/themes/wordplate/js/src/bootstrap/carousel.js',
              'public/assets/themes/wordplate/js/src/bootstrap/collapse.js',
              'public/assets/themes/wordplate/js/src/bootstrap/dropdown.js',
              'public/assets/themes/wordplate/js/src/bootstrap/modal.js',
              'public/assets/themes/wordplate/js/src/bootstrap/tooltip.js',
              'public/assets/themes/wordplate/js/src/bootstrap/popover.js',
              'public/assets/themes/wordplate/js/src/bootstrap/scrollspy.js',
              'public/assets/themes/wordplate/js/src/bootstrap/tab.js',
              'public/assets/themes/wordplate/js/src/bootstrap/transition.js',
              'public/assets/themes/wordplate/js/src/libs/*.js',
              'public/assets/themes/wordplate/js/src/*.js'
            ]
        }
      }
    },
 
    compass: {
      dist: {
        options: {
          config: 'public/assets/themes/wordplate/css/config.rb',
          sassDir: 'public/assets/themes/wordplate/css/sass',
          imagesDir: 'public/assets/themes/wordplate/img',
          cssDir: 'public/assets/themes/wordplate/css',
          environment: 'production',
          outputStyle: 'compressed',
          force: true
        }
      }
    },

    browserSync: {
      files: {
        src: 'public/assets/themes/wordplate/css/screen.css'
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
        files: ['public/assets/themes/wordplate/js/src/*.js','public/assets/themes/wordplate/js/src/libs/*.js'],
        tasks: ['uglify']
      },
      styles: {
        files: ['public/assets/themes/wordplate/css/**/*.{sass,scss}','public/assets/themes/wordplate/img/ui/*.png'],
        tasks: ['compass']
      }
    },
  });
 
  // Default builds for production, run dev for unminified js
  grunt.registerTask('dev', ['compass', 'concat']);
  grunt.registerTask('default', ['compass', 'uglify', 'browserSync', 'watch']);
 
 }
