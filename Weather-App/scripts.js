const baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=52c2a5409957192df3dfe96db224a5c9&units=metric&q=Sofia`

async function weather() {
    const response = await fetch(baseUrl)
    const weatherData = await response.json()

    console.log(weatherData);
}

weather()