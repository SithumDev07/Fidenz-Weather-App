
/* 
* 
* Returns array of objects after modifying the original array
*
* @param { response } array of objects: response from the request call to the REST API
*/
exports.transformResponse = (response) => {
    let result = []
    response?.list.map((item) => {
        result.push({
            id: item.id,
            name: item.name,
            temp: item.main.temp,
            description: item.weather.map((w) => w.description)
        })
    })
    return result
}

/* 
* Returns null items removed array
* 
* @param { weatherData } array of objects
*/
exports.weatherDataTransformer = (weatherData) => {
    weatherData.splice().reverse().map((item, index) => {
        if(item == null || item == undefined) {
            weatherData.splice(index, 1)
        }
    })

    return weatherData
}

/* 
* Returns city codes as a string array extracted from the cities.json
* 
* @param { cities } array of objects
*/
exports.citiesJsonTransformer = (cities) => {
    let cityCodes = []
    cities.map(item => {
        cityCodes.push(item.CityCode)
    })

    return cityCodes
}