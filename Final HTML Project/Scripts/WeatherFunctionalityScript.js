//weather functionality
applyWeatherToHTML();
setInterval(applyWeatherToHTML,300000); //updates weather every 5 minutes.

function mapWeatherCodeToDescription(code) {
    // Object to map weather codes to descriptive strings
    const weatherDescriptions = {
        0: 'clear sky',
        1: 'mainly clear',
        2: 'partly cloudy',
        3: 'overcast',
        45: 'fog',
        48: 'depositing rime fog',
        51: 'light drizzle',
        53: 'moderate drizzle',
        55: 'dense drizzle',
        56: 'light freezing drizzle',
        57: 'dense freezing drizzle',
        61: 'slight rain',
        63: 'moderate rain',
        65: 'heavy rain',
        66: 'light freezing rain',
        67: 'heavy freezing rain',
        71: 'slight snow fall',
        73: 'moderate snowfall',
        75: 'heavy snowfall',
        77: 'snow grains',
        80: 'slight rain shower',
        81: 'moderate rain shower',
        82: 'violent rain shower',
        85: 'slight snow shower',
        86: 'heavy snow shower',
        95: 'slight or moderate thunderstorm',
        96: 'thunderstorm with slight hail',
        99: 'thunderstorm with heavy hail'
    };

    return weatherDescriptions[code] || 'unknown';
}
    
async function fetchWeather() {
    try {	
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=42.3314&longitude=-83.0458&current_weather=true');
        const data = await response.json(); // Parse the response as JSON
        const weatherDescription = mapWeatherCodeToDescription(data.current_weather.weathercode);
        return weatherDescription;
    } catch (e) {
        console.log(e)
    }
}

function applyWeatherToHTML() {
    let weatherDescriptionPromise = fetchWeather();  
    weatherDescriptionPromise.then((result) => {
    document.getElementById("currentWeather").innerHTML = result;
    });
}
