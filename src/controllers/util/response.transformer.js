function transformResponse(response){
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

module.exports = transformResponse