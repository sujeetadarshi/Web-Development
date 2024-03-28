const API_KEY = `5eca673d9986c90f7cf9d41bb0703e23`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
    return showWeather(data)
}


const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2>${data.message}<h2>`
        return;
    }
    weather.innerHTML = `
       <h3>${search.value}</h3>
        <div class="details">
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event) {
        
       
            getWeather(search.value)
            event.preventDefault();
        
        
    }
)

// getWeather("Patna")