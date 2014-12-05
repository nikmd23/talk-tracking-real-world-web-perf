module.exports = function(grunt) {

    grunt.initConfig({
      perfbudget: {
          default: {
              options: {
                  url: 'http://mascots-staging.azurewebsites.net/',
                  key: process.env.WPT_API_KEY,
                  budget: {
                      SpeedIndex: 1000,
                      bytesIn: 1000000, // 1 MB
                      render: 1000
                  }
              }
          }
      },

    phantomas: {
            gruntSite: {
                options: {
                    indexPath: './phantomas/',
                    options: {},
                    url: 'http://mascots-staging.azurewebsites.net/',
                    buildUi: true,
                    timeout: 1200,
                    assertions: {
                        biggestLatency: 3000
                    }
                }
            }
    },
    });

    grunt.loadNpmTasks('grunt-phantomas');
    grunt.loadNpmTasks('grunt-perfbudget');
};