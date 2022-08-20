const axios = require('axios')
const fs = require('fs')
const path = require('path');
const { transformResponse, weatherDataTransformer, citiesJsonTransformer } = require('../util/transformers')
const { saveInCache, alreadyInCacheItems } = require('../util/cache.manager')

/* 
* 
* Returns all weather data as array of JSON Objects
*/
exports.getAll = async (req, res) => {

  const currentPath = path.resolve(__dirname)

  const rawData = fs.readFileSync(path.join(currentPath, '../db/cities.json'))

    const cityCodes = citiesJsonTransformer(JSON.parse(rawData).List)

    const availableCachedItems = weatherDataTransformer(await alreadyInCacheItems(cityCodes));

    if(availableCachedItems.length > 0) {
      // res.status(200).json(availableCachedItems)
      res.status(200)

      res.render('pages/index', {
        weatherData: availableCachedItems
      })
    } else {
      const response = await axios({
        url: `http://api.openweathermap.org/data/2.5/group?id=${cityCodes}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`,
        method: 'get'
      })
  
      await saveInCache(transformResponse(response.data))
  
      // res.status(200).json(transformResponse(response.data));
      res.status(200)

      res.render('pages/index', {
        weatherData: transformResponse(response.data)
      })
    }
}

exports.navigateHome = async (req, res) => {
  res.render('pages/index', {
    title: "Auth0 Secured"
  });
  // res.send(req.oidc.isAuthenticated() ? "Logged In" : "Logged Out")
}