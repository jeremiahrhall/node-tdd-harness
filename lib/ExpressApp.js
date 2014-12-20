var express = require('express')

var app = express()

// logger
app.use(
    function(req, res, next) {
        console.log(req.method + " - " + res.statusCode + " - " + req.path);
        return next()
    }
)

// route
app.get(
    '/', 
    function (req, res) {
        return res.send({message: "Hello World!"})
    }
)

module.exports = app;