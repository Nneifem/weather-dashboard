var userInput;
var APIKey = "15bcd327b28cdd949d38c1ea8033b975";
var searchBtn = document.querySelector(".search-menu button");
var fiveDaysContainer = document.querySelector(".five-day");
var locationCotaniner = document.querySelector(".location");
var cityNameEl = document.querySelector(".city");
var inputEl = document.querySelector(".text");
var currentTemp = document.querySelector(".today-temp");
var currentWind = document.querySelector(".today-wind");
var currentHumidity = document.querySelector(".today-humidity");
var currentDateEl = document.querySelector(".current-date");
var iconImage = document.querySelector(".icon-image");
var cityList = document.querySelector("#city-list");
var forecastTitle = document.querySelector(".title");
var date = dayjs();
var latitude;
var longitude;

/* getting the previous cities search through local storage */
function searchHistory() {
    var history = JSON.parse(localStorage.getItem("city"));
    cityList.innerHTML = "";
    
    if(history !== null){
    for(var i = 0; i < history.length; i++){
        var button = document.createElement("button");
        button.textContent = history[i];
        button.setAttribute("style", "margin-top: 10px;");
        button.addEventListener("click", function(){
            console.log(this.innerHTML);
            getCity(this.innerHTML);
        })
        cityList.append(button);
        }
    }
}
searchHistory();

/* having hte search button worked when clicked which will get the data for today and the next 5 day forecast */
searchBtn.addEventListener("click", function () {
    var inputEl = document.querySelector(".text").value;
    getCity(inputEl);
})

/* getting the user input of a city and having it displayed on the screen */
function getCity(userInput) {
    var cityURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&limit=&appid=" + APIKey;
    fetch(cityURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
            latitude = lat;
            longitude = lon;
            console.log(lat + ", " + lon);
            getWeather(lat, lon);
            var searchCity = JSON.parse(localStorage.getItem("city")) || [];
            searchCity.push(userInput);
            localStorage.setItem("city", JSON.stringify(searchCity));
            searchHistory();

            /* current date displaying day and the city the user input */
            var cityName = document.createElement("h1");
            cityName.textContent = data[0].name + date.format(" (M/DD/YYYY)");
            cityNameEl.innerHTML = "";
            cityNameEl.setAttribute("style", "font-size: 24px; padding-left: 10px; padding-top: 10px;", "class", "location");
            cityNameEl.append(cityName);
        })
}

/* where the loop will go to get the data that's needed for each day */
function renderForecastCard(forecastData){
    /* the date for each day */
    var forecastCard = document.createElement("div");
    forecastCard.setAttribute("style", "border: solid black 2px; margin: 10px; padding: 15px; background-color: grey; color: white;");
    var heading = document.createElement("h2");
    heading.textContent = forecastData.dt_txt;
    forecastCard.append(heading);
    fiveDaysContainer.append(forecastCard);

    /* the icon for each day */
    var forecastImage = document.createElement("section");
    var source = document.createElement("img");
    source.src = "https://openweathermap.org/img/wn/" + forecastData.weather[0].icon + "@2x.png";
    forecastCard.append(source);
    fiveDaysContainer.append(forecastImage);

    /* the temp, wind speed, and humidity for each day */
    var forecastTemp = document.createElement("section");
    var section = document.createElement("p");
    section.textContent = "Temperature: " + forecastData.main.temp;
    forecastCard.append(section);
    fiveDaysContainer.append(forecastTemp); 

    var forecastWind = document.createElement("section");
    var section2 = document.createElement("p");
    section2.textContent = "\nWind Speed: " + forecastData.wind.speed + " MPH";
    forecastCard.append(section2);
    fiveDaysContainer.append(forecastWind); 

    var forecastHumidity = document.createElement("section");
    var section3 = document.createElement("p");
    section3.textContent = "\nHumidity: " + forecastData.main.humidity + "%";
    forecastCard.append(section3);
    fiveDaysContainer.append(forecastHumidity);
}


/* getting the temperature, icon, lat, and lon for the current and next 5 days for eac city */
function getWeather(latitude, longitude) {
    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIKey + "&units=imperial";

    fetch(weatherURL)
        .then(function (response) {
            return response.json();
        })

        /* current date information */
        .then(function (dataTwo) {
            iconImage.src = "https://openweathermap.org/img/wn/" + dataTwo.list[0].weather[0].icon + "@2x.png";
            var temp = document.createElement("li");
            temp.textContent = "Temperature: " + dataTwo.list[0].main.temp;
            currentTemp.innerHTML = "";
            currentTemp.append(temp);

            var windSpeed = document.createElement("li");
            windSpeed.textContent = "Wind Speed: " + dataTwo.list[0].wind.speed + " MPH";
            currentWind.innerHTML = "";
            currentWind.append(windSpeed);

            var humidity = document.createElement("li");
            humidity.textContent = "Humidity: " + dataTwo.list[0].main.humidity + " %";
            currentHumidity.innerHTML = "";
            currentHumidity.append(humidity);

            var fiveForecastTitle = document.createElement("main");
            var title = document.createElement("h2");
            title.textContent = "5 Day Forecast";
            fiveForecastTitle.append(title);
            forecastTitle.append(fiveForecastTitle);

            /* looping through the 5 day forecast to get the data */
            fiveDaysContainer.innerHTML = "";
            for(var i = 1; i < dataTwo.list.length; i+= 8){
                renderForecastCard(dataTwo.list[i]);
            }
        })
}