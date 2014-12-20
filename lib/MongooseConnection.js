/**
 * MongooseConnection.js
 *
 * @description :: simple wrapper to connect to mongoose
 * @created     :: 12/20/14 - 12:19 PM
 * @author      :: jeremiahhall
 * 
 */

var mongoose = require('mongoose')
var _ = require('underscore')

function MongooseConnection(options) {
    this.options = options
    this.collections = {};
    
    this.connect = function(callback) {
 
        mongoose.connection.on('error', function(error) {
            callback(error)
        })
 
        mongoose.connection.on('connected', function() {
            callback(null)
        })
        
        mongoose.connect(this.options);
    }
    
    this.getCollection = function(name) {
        if (!this.collections[name]) {
            this.collections[name] = mongoose.model(name, new mongoose.Schema({}, {strict: false}))            
        }

        return this.collections[name] 
    }
    
    return this;
}

module.exports = MongooseConnection