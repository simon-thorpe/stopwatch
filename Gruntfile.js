/*global module:false*/
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    esformatter: {
      src: 'js/jq.stopwatch.js'
    },
    uglify: {
      dist: {
        src: 'js/jq.stopwatch.js',
        dest: 'js/jq.stopwatch.min.js'
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-esformatter');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['esformatter', 'uglify']);

};
