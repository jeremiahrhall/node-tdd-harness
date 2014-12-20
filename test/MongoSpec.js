/**
 * Created by jeremiahhall on 3/8/14.
 */
var MongooseConnection = require('../lib/MongooseConnection.js')
var should = require('should')

var conn = new MongooseConnection(config.db)

describe('Mongo/Mongoose Scratchpad Test', function() {

  it('should connect to local MongoDB', function(done) {
    conn.connect(function(err) {
      if (err) {
        console.log(err)
        should(err).not.be.ok()
      }
      done()
    })
  })
  
  it('should be possible to insert a record into a collection and retrieve it', function(done) {
    conn.getCollection('test-insert').create({desc: "A new object"}, function(err) {
      if (err) {
        console.log(err)
        should(err).not.be.ok()
      }

      conn.getCollection('test-insert').findOne({desc: "A new object"}).exec(function(err, doc) {
        if (err) {
          console.log(err)
          should(err).not.be.ok()
        }

        var desc = doc.toObject().desc
        "A new object".should.eql(desc)
        done()
      })
    })
  })
  
})
