const baseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=52c2a5409957192df3dfe96db224a5c9&units=metric`

const inputCityElement = document.getElementById('weather-input')
const searchButton = document.querySelector('.search-area button')

const statusImageElement = document.querySelector('.status')
const tempreratuteElement = document.querySelector('.temp')
const cityElement = document.querySelector('.city')
const humidityElement = document.querySelector('.humidity')
const widnSpeedElement = document.querySelector('.wind')


searchButton.addEventListener('click', async () => {
    if (!inputCityElement.value) {
        return
    }

    const city = inputCityElement.value

    try {
        const response = await fetch(baseUrl + `&q=${city}`)
        const data = await response.json()

        if (!response.ok) {
            throw new Error("Please enter an existing city!")
        }

        // Get all the info from the response
        const status = data.weather[0].main
        const temp = data.main.temp.toFixed(1)
        const humidity = data.main.humidity
        const windSpeed = data.wind.speed

        // Set the weather status image
        const newStatusImage = document.createElement('img')

        switch (status) {
            case 'Clouds':
                newStatusImage.src = 'images/clouds.png'
                break;
            case 'Drizzle':
                newStatusImage.src = 'images/drizzle.png'
                break;
            case 'Mist':
                newStatusImage.src = 'images/mist.png'
                break;
            case 'Rain':
                newStatusImage.src = 'images/rain.png'
                break;
            case 'Snow':
                newStatusImage.src = 'images/snow.png'
                break;
            case 'Clear':
                newStatusImage.src = 'images/clear.png'
                break;
        }

        // Set the status image
        statusImageElement.innerHTML = '' 
        statusImageElement.append(newStatusImage)

        // Set the temperature
        tempreratuteElement.textContent = `${temp}°C`

        // Set the city
        cityElement.textContent = city

        // Set the humidity
        humidityElement.textContent = `${humidity}%`

        // Set the wind speed
        widnSpeedElement.textContent = `${windSpeed} km/h`

        inputCityElement.value = ''
    }
    catch (error) {
        const errorMessage = error.message
        const errorImage = document.createElement('img')
        errorImage.src = 'images/error.png'

        statusImageElement.innerHTML = '' 
        statusImageElement.append(errorImage)

        tempreratuteElement.textContent = ''
        cityElement.textContent = errorMessage
        humidityElement.textContent = 0
        widnSpeedElement.textContent = 0

        inputCityElement.value = ''
    }
})