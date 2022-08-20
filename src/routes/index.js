var router = require('express').Router()
const weatherController = require('../controllers/weather.controller')

router.get('/', weatherController.getAll)

module.exports = router;