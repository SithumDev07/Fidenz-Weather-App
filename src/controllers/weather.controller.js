const axios = require('axios')
const transform = require('./util/response.transformer')

exports.getAll = async (req, res, next) => {
    const transformedCityCodes = [
        '2988507',
        '1248991',
        '2644210',
      ]
    const response = await axios({
      url: `http://api.openweathermap.org/data/2.5/group?id=${transformedCityCodes}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`,
      method: 'get'
    })
    
    res.status(200).json(transform(response.data));
}