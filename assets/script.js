var userInput;
var APIKey = "15bcd327b28cdd949d38c1ea8033b975";
var searchBtn = document.querySelector(".search-menu button");
var fiveDaysContainer = document.querySelector(".five-day");
var locationCotaniner = document.querySelector(".location");
var cityDateEl = document.querySelector(".city-date");
var inputEl = document.querySelector(".text");
var currentTemp = document.querySelector(".today-temp");
var currentWind = document.querySelector(".today-wind");
var currentHumidity = document.querySelector(".today-humidity");

var dayOneTemp = document.querySelector(".temp-1");
var dayOneWind = document.querySelector(".wind-1");
var dayOneHumidity = document.querySelector(".humidity-1");

var dayTwoTemp = document.querySelector(".temp-2");
var dayTwoWind = document.querySelector(".wind-2");
var dayTwoHumidity = document.querySelector(".humidity-2");

var dayThreeTemp = document.querySelector(".temp-3");
var dayThreeWind = document.querySelector(".wind-3");
var dayThreeHumidity = document.querySelector(".humidity-3");

var dayFourTemp = document.querySelector(".temp-4");
var dayFourWind = document.querySelector(".wind-4");
var dayFourHumidity = document.querySelector(".humidity-4");

var dayFiveTemp = document.querySelector(".temp-5");
var dayFiveWind = document.querySelector(".wind-5");
var dayFiveHumidity = document.querySelector(".humidity-5");

/* code to make the button work */
searchBtn.addEventListener("click", function(){

/* getting the city, lat, and lon from api*/
function getCity(userInput){
    var cityURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&limit=&appid=" + APIKey;
    fetch(cityURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
            var lat = data[0].lat;
            var lon = data[0].lon;
        console.log(lat + ", " + lon);
        getWeather(lat, lon);

        // create elements in here
        var cityName = document.createElement("h1")
        cityName.textContent = data[0].name;
        cityDateEl.innerHTML = "";
        cityDateEl.setAttribute("style", "font-size: 24px; padding-left: 10px; padding-top: 10px;")
        cityDateEl.append(cityName);
    })
}

function getWeather(lat, lon){
   var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
   fetch(weatherURL)
   .then(function(response){
    return response.json();
   })

   .then(function(dataTwo){
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

        // making an loop for the 5 day forecast

        /* ------------------------- day 1 ----------------------------- */
        var tempOne = document.createElement("li");
        tempOne.textContent = "Temperature: " + dataTwo.list[1].main.temp;
        dayOneTemp.innerHTML = "";
        dayOneTemp.append(tempOne);

        var windOne = document.createElement("li");
        windOne.textContent = "Wind Speed: " + dataTwo.list[1].wind.speed;
        dayOneWind.innerHTML = "";
        dayOneWind.append(windOne);

        var humidityOne = document.createElement("li");
        humidityOne.textContent = "Humidity: " + dataTwo.list[1].main.humidity;
        dayOneHumidity.innerHTML = "";
        dayOneHumidity.append(humidityOne);
        /* ------------------------- day 1 ----------------------------- */


        /* ------------------------- day 2 ----------------------------- */
        var tempTwo = document.createElement("li");
        tempTwo.textContent = "Temperature: " + dataTwo.list[2].main.temp;
        dayTwoTemp.innerHTML = "";
        dayTwoTemp.append(tempTwo);

        var windTwo = document.createElement("li");
        windTwo.textContent = "Wind Speed: " + dataTwo.list[2].wind.speed;
        dayTwoWind.innerHTML = "";
        dayTwoWind.append(windTwo);

        var humidityTwo = document.createElement("li");
        humidityTwo.textContent = "Humidity: " + dataTwo.list[2].main.humidity;
        dayTwoHumidity.innerHTML = "";
        dayTwoHumidity.append(humidityTwo);
        /* ------------------------- day 2 ----------------------------- */


        /* ------------------------- day 3 ----------------------------- */
        var tempThree = document.createElement("li");
        tempThree.textContent = "Temperature: " + dataTwo.list[3].main.temp;
        dayThreeTemp.innerHTML = "";
        dayThreeTemp.append(tempThree);

        var windThree = document.createElement("li");
        windThree.textContent = "Wind Speed: " + dataTwo.list[3].wind.speed;
        dayThreeWind.innerHTML = "";
        dayThreeWind.append(windThree);

        var humidityThree = document.createElement("li");
        humidityThree.textContent = "Humidity: " + dataTwo.list[3].main.humidity;
        dayThreeHumidity.innerHTML = "";
        dayThreeHumidity.append(humidityThree);
        /* ------------------------- day 3 ----------------------------- */


        /* ------------------------- day 4 ----------------------------- */
        var tempFour = document.createElement("li");
        tempFour.textContent = "Temperature: " + dataTwo.list[4].main.temp;
        dayFourTemp.innerHTML = "";
        dayFourTemp.append(tempFour);

        var windFour = document.createElement("li");
        windFour.textContent = "Wind Speed: " + dataTwo.list[4].wind.speed;
        dayFourWind.innerHTML = "";
        dayFourWind.append(windFour);

        var humidityFour = document.createElement("li");
        humidityFour.textContent = "Humidity: " + dataTwo.list[4].main.humidity;
        dayFourHumidity.innerHTML = "";
        dayFourHumidity.append(humidityFour);
        /* ------------------------- day 4 ----------------------------- */

        /* ------------------------- day 5 ----------------------------- */
        var tempFive = document.createElement("li");
        tempFive.textContent = "Temperature: " + dataTwo.list[5].main.temp;
        dayFiveTemp.innerHTML = "";
        dayFiveTemp.append(tempFive);

        var windFive = document.createElement("li");
        windFive.textContent = "Wind Speed: " + dataTwo.list[5].wind.speed;
        dayFiveWind.innerHTML = "";
        dayFiveWind.append(windFive);

        var humidityFive = document.createElement("li");
        humidityFive.textContent = "Humidity: " + dataTwo.list[5].main.humidity;
        dayFiveHumidity.innerHTML = "";
        dayFiveHumidity.append(humidityFive);
        /* ------------------------- day 5 ----------------------------- */
   })
}
var inputEl = document.querySelector(".text").value;
getCity(inputEl);
})