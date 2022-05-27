'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const path=require('path')
const cors = require('cors')
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', hbs.engine({
    defaultLayout: 'default',
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
	res.render('product');
});

app.use('/api', api)
app.get('/login', (req, res) => {
    res.render('login')
})

module.exports = app
