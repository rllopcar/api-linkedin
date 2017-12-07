'use strict' 

const express =  require('express')
const bodyParser = require('body-parser')
const app = express()
const route = require('./routes')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('', route)

app.set('view engine', 'ejs');

module.exports = app