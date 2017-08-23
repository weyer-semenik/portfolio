module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'css/style.css': 'style.sass'
  			}
  		}
  	},

  	imagemin: {
  		dynamic: {
  			files: [{
  				expand: true,
  				cwd: 'img/',
  				src: ['**/*.{png,jpg,jpeg,gif}'],
  				dest: 'img/build/'
  			}]
  		}
  	},

    watch: {
    	scripts: {
	    	files: ['*.sass'],
	    	tasks: ['sass'],
	    	option: {
	    		spawn: false,
	    	},
    	},

    	imageopti: {
        files: ['img/*.*'],
        tasks: ['imagemin']
    	}
    },

    browserSync: {
            default_options: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                    	baseDir: './'
                    }
                }
            }
    }

  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  // Default task(s).

  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'watch']);
};