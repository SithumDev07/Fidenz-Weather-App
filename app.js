const express = require('express')
const path = require('path')
const logger = require('morgan')
const cors = require('cors')
const { auth } = require('express-openid-connect')
require('dotenv').config()

const config = {
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
}

const app = express();

app.set("view engine", "ejs")

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(auth(config))

app.use(function(req, res, next) {
    if(req.oidc.isAuthenticated()) {
        return next()
    }
    res.redirect(401, '/login')
})

app.use('/', require('./src/routes'));

app.get('*', function(req, res) {
    res.redirect(200, '/weather')
})

module.exports = app;
