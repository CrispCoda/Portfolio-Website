const apiKey = "7816e3640bcf575ac3bef0600670a454";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Leeds";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json()

    console.log(data)
}
checkWeather()
