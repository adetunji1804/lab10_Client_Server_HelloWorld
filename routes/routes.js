var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
    res.json({'message': 'Hello every one, this is nodemon running!!!!..... !'})
})

module.exports= router