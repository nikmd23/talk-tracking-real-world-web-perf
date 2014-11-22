module.exports = function(grunt) {

    grunt.initConfig({
      wpt: {
          mascots: {
              options: {
                  url: [
                    'http://mascots.azurewebsites.net/',
                    'http://mascots-staging.azurewebsites.net/',
                    'http://mascots.azurewebsites.net/home/league/all',
                    'http://mascots-staging.azurewebsites.net/home/league/all'
                  ]
              },
              dest: 'report/wpt/'
          }
      },

    phantomas: {
                gruntSite: {
                    options: {
                        indexPath: './phantomas/',
                        options: {},
                        url: 'http://mascots-staging.azurewebsites.net/',
                        buildUi: true,
                        assertions: {
                            gzipRequests: 2
                        }
                    }
                }
            }
        });

    grunt.loadNpmTasks('grunt-wpt');
    grunt.loadNpmTasks('grunt-phantomas');
};