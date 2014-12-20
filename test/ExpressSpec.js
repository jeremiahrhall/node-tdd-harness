/**
 * ExpressSpec.js
 *
 * @description :: supertest testing of express app exported in lib/express 
 * @created     :: 12/20/14 - 2:47 PM
 * @author      :: jeremiahhall
 */

var ExpressApp = require('../lib/ExpressApp.js')
var supertest = require('supertest')
var app = supertest(ExpressApp)

describe('Express App', function() {
    
    it('responds to requests at root url "/"', function(done) {
        app
            .get('/')
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    console.log(err)
                    should(err).not.be.ok()
                }

                console.log("Response Body:", res.body)
                done()
            })
    })
})