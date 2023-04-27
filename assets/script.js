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
var currentDateEl = document.querySelector(".currentd-date");
var cityList = document.querySelector("#city-list")
var date = dayjs();

var dateOne = document.querySelector(".date-1");
var dayOneTemp = document.querySelector(".temp-1");
var dayOneWind = document.querySelector(".wind-1");
var dayOneHumidity = document.querySelector(".humidity-1");

var dateTwo = document.querySelector(".date-2");
var dayTwoTemp = document.querySelector(".temp-2");
var dayTwoWind = document.querySelector(".wind-2");
var dayTwoHumidity = document.querySelector(".humidity-2");

var dateThree = document.querySelector(".date-3");
var dayThreeTemp = document.querySelector(".temp-3");
var dayThreeWind = document.querySelector(".wind-3");
var dayThreeHumidity = document.querySelector(".humidity-3");

var dateFour = document.querySelector(".date-4")
var dayFourTemp = document.querySelector(".temp-4");
var dayFourWind = document.querySelector(".wind-4");
var dayFourHumidity = document.querySelector(".humidity-4");

var dateFive = document.querySelector(".date-5");
var dayFiveTemp = document.querySelector(".temp-5");
var dayFiveWind = document.querySelector(".wind-5");
var dayFiveHumidity = document.querySelector(".humidity-5");

/* getting search history of cities */
function searchHistory() {
    var history = JSON.parse(localStorage.getItem("city"));
    cityList.innerHTML = "";
    
    if(history !== null){
    for(var i = 0; i < history.length; i++){
        var button = document.createElement("button");
        button.textContent = history[i];
        cityList.append(button);
        }
    }
}

searchHistory();
/* code to make the button work */
searchBtn.addEventListener("click", function () {

    /* getting the city, lat, and lon from api*/

    var inputEl = document.querySelector(".text").value;
    getCity(inputEl);
})

function getCity(userInput) {
    var cityURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&limit=&appid=" + APIKey;
    fetch(cityURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
            console.log(lat + ", " + lon);
            getWeather(lat, lon);
            var searchCity = JSON.parse(localStorage.getItem("city")) || [];
            searchCity.push(userInput);
            localStorage.setItem("city", JSON.stringify(searchCity));
            searchHistory();



            // create elements in here
            var cityName = document.createElement("h1")
            cityName.textContent = data[0].name + date.format(" (M/DD/YYYY)");
            cityNameEl.innerHTML = "";
            cityNameEl.setAttribute("style", "font-size: 24px; padding-left: 10px; padding-top: 10px;")
            cityNameEl.append(cityName);
        })
}

function renderForecastCard(forecastData){
    var forecastCard = document.createElement("div");
    var heading = document.createElement("h2");
    heading.textContent = forecastData.dt_txt;
    forecastCard.append(heading);
    fiveDaysContainer.append(forecastCard);

    var forecastInfo = document.createElement("section");
    var section = document.createElement("p");
    section.textContent = "Temperature: " + forecastData.main.temp + "Wind Speed: " + forecastData.wind.speed + " Humidity: " + forecastData.main.humidity;;
    forecastCard.append(section);
    fiveDaysContainer.append(forecastInfo); 

    // var forecastWind = document.createElement("section");
    // var section2 = document.createElement("p");
    // section2.textContent = "Wind Speed: " + forecastData.wind.speed;
    // forecastWind.append(section2);
    // fiveDaysContainer.append(forecastWind);

    // var forecastHumidity = document.createElement("section");
    // var section3 = document.createElement("p");
    // section3.textContent = "Humidity: " + forecastData.main.humidity;
    // section3.setAttribute("style", )
    // forecastHumidity.append(section3);
    // fiveDaysContainer.append(forecastHumidity);
}



function getWeather(lat, lon) {
    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
    fetch(weatherURL)
        .then(function (response) {
            return response.json();
        })

        .then(function (dataTwo) {
            console.log(dataTwo.list)
            var temp = document.createElement("li");
            temp.textContent = "Temperature: " + dataTwo.list[0].main.temp;
            currentTemp.innerHTML = "";
            currentTemp.append(temp);

            var windSpeed = document.createElement("li");
            windSpeed.textContent = "Wind Speed: " + dataTwo.list[0].wind.speed;
            currentWind.innerHTML = "";
            currentWind.append(windSpeed);

            var humidity = document.createElement("li");
            humidity.textContent = "Humidity: " + dataTwo.list[0].main.humidity;
            currentHumidity.innerHTML = "";
            currentHumidity.append(humidity);

            for(var i = 6; i < dataTwo.list.length; i+= 6){
                renderForecastCard(dataTwo.list[i]);
            }
        })
}