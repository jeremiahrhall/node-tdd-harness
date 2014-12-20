module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch:{
      test: {
        files: [
          'test/**/*Spec.js',
          'lib/***/*.js',
          'lib/*.js'
        ],
        tasks: 'test',
        options: {
          spawn: true
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: 'test/testIncludes.js'
        },
        timeout: 5000,
        src: ['test/**/*Spec.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('default', ['watch']);

};