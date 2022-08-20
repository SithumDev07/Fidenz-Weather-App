const router = require('express').Router()
const weatherController = require('../controllers/weather.controller')

router.get(
  '/',
  weatherController.navigateHome
)


module.exports = router