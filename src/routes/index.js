var router = require('express').Router()
const weatherController = require('../controllers/weather.controller')

router.get('/weather', weatherController.getAll)

module.exports = router;