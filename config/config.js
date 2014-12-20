/**
 * Created by jeremiahhall on 3/8/14.
 */

var env = process.env.NODE_ENV || 'development'

var config = {

  development: {
    db: 'mongodb://localhost/node-tdd-harness',
    root_uri: process.env.NODE_ROOT_URI || 'http://localhost:3000',
    fileDir: "/tmp"
  },

  test: {
    db: 'mongodb://localhost/node-tdd-harness',
    root_uri: process.env.NODE_ROOT_URI || 'http://localhost:3010',
    fileDir: "/tmp"
  }

}

var getConfig = function() {
  return config[env]
}

module.exports = getConfig()
