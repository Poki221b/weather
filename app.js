let result = document.getElementById('result');
let searchBtn = document.getElementById('search-btn');
let cityRef = document.getElementById('city');

// fetch info from api and display it
let getWeather = () => {
    let cityValue = cityRef.value;
    //if input is empty
    if(cityValue.length == 0){
        result.innerHTML=`<h3 class='msg'>Please enter a city...</h3>`
    }
    //if input not empty
    else {
        let url =  `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
        fetch(url)
            .then((resp) => resp.json())
            // valid city name
            .then((data) => {
                // console.log(data);
                
                result.innerHTML = `<h2>${data.name}</h2>
                <h4 class='weather'>${data.weather[0].main}</h4>
                <h4 class="desc">${data.weather[0].description}<h4>
                <img src='https://openweathermap.org/img/w/${data.weather[0].icon}.png'>
                <h1>${data.main.temp}&#176C</h1>
                <div class='temp-container'>
                <h3><span class='real-feel'>Feels like</span> ${data.main.feels_like}&#176C</h3>
                    <div class='more-info'>
                        <h4 class='wind'>Wind speed: ${data.wind.speed}km/h</h4>
                        <h4 class='wind'>Humidity: ${data.main.humidity}%</h4>
                        <h4 class='wind'>Percipitation: ${data.clouds.all}%</h4>
                    </div>
                </div>
                <div class='temp-container'>
                    <div>
                        <h4 class='title'>min</h4>
                        <h4 class='temp'>${data.main.temp_min}&#176C</h4>
                    </div>
                    <div>
                        <h4 class='title'>max</h4>
                        <h4 class='temp'>${data.main.temp_max}&#176C</h4>
                    </div>
                </div>
                `;
            })
            // invalid city name
            .catch(() =>{
                result.innerHTML = `<h3 class='msg'>City not found</h3>`;
            })
    }};
    searchBtn.addEventListener('click', getWeather);
    //window.addEventListener('load', getWeather);
