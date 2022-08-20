var router = require('express').Router()
const weatherController = require('../controllers/weather.controller')


// router.use('/weather', require('./weather'))
router.get('/', weatherController.getAll)

module.exports = router;