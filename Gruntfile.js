module.exports = function(grunt) {
  // grunt.registerTask('default', '', function(){
  //   grunt.log.writr("sumanta test");
  // });
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //
    cssmin: {
      combine: {
        files : {
          'app/assets/css/style.css': ['app/assets/css/header.css', 'app/assets/css/footer.css']
        }
      }
    },
    // uglify
    uglify: {
      dist: {
        files : {
          'app/assets/js/script.min.js': ['app/assets/js/script.js']
        }
      }
    },
    // sass
    sass: {
      dist: {
        files : {
          'app/assets/css/style.min.css': ['src/scss/style.scss']
        }
      }
    }
    // // watch
    // watch: {
		// 	css: {
		// 		files: '**/*.scss',
		// 		tasks: ['sass']
		// 	}
		// }

  });
  // Load Plugn-in
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // Task
  grunt.registerTask('default', ['cssmin', 'uglify', 'sass']);

};
