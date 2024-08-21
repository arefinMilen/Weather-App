const apiKey ="202cb055712cae2522047d77ffe0333c";

// const apiKey = "";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=Dhaka";

const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else {

        var data = await response.json();
     
    document.querySelector(".weather-city").innerHTML= data.name;
    document.querySelector(".weather-temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity;
    document.querySelector(".wind").innerHTML= data.wind.speed + " Km/h";
    if(data.weather[0].main =="clouds")
    {
        weatherIcon.src = "photo/clouds.png"
    }
    else if(data.weather[0].main =="Clear")
    {
        weatherIcon.src="photo/clear.png";
    }
    else if(data.weather[0].main =="Drizzle")
    {
        weatherIcon.src="photo/drizzle.png";
    }
    else if(data.weather[0].main =="Humidity")
    {
        weatherIcon.src="photo/humidity.png";
    }
    else if(data.weather[0].main =="Rain")
    {
        weatherIcon.src="photo/rain.png";
    }
    else if(data.weather[0].main =="Snow")
    {
        weatherIcon.src="photo/snow.png";
    }
    else if(data.weather[0].main =="Wind")
    {
        weatherIcon.src="photo/wind.png";
    }
    else if(data.weather[0].main =="Mist")
    {
        weatherIcon.src="photo/mist.png";
    }
    else if(data.weather[0].main =="Mist")
    {
        weatherIcon.src="photo/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"
    }

    
}

searchButton.addEventListener("click",()=>
{
    checkWeather(searchBox.value)
})

