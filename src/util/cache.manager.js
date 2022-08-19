const redis = require('redis')

/* 
* Returns the instance of created redis client
* 
*/
exports.client = redis.createClient()

// Connect the local redis store
this.client.connect()

/* 
* Returns array of weather data after fetching from the cache, if requested item is not in the cache, returns null
* 
* @param { cityCodes } array of string
*/
exports.alreadyInCacheItems = async (cityCodes) => {
    let cachedWeatherData = []

    await Promise.all(cityCodes.map(async (item) => {
        const cacheItem = await this.getInCache(item)
        if(cacheItem != null) {
            cachedWeatherData.push(cacheItem)
        }
    }))

    return cachedWeatherData;
}

/* 
* Saves passed array objects in the cache by using the key as weather data id
* 
* @param { results } array of objects
*/
exports.saveInCache = async (results) => {
    
    results.map(async item => {
        await this.client.set(item.id.toString(), JSON.stringify(item))
        this.client.expire(item.id.toString(), 5000)
    })
}

/* 
* Returns requested cache item from the cache, if the item is not existing in the cache returns null
* 
* @param { cityCode } string
*/
exports.getInCache = async (cityCode) => {

    const cacheItem = await this.client.get(cityCode, function(err, data) {
        if(err) throw new Error(`Error occurred: ${err}`)

        if(data) {
            console.log("from cache: ", data);
        }
    })

    return JSON.parse(cacheItem);
}

/* 
* Remove requested item in the cache by using passed key, if the item is not existing in the cache returns an Error
* 
* @param { key } string
*/
exports.removeItemInCache = (key) => {
    
}

/* 
* Resets the cache
* 
*/
exports.resetCache = () => {

}