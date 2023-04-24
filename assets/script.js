var city;
var APIKey = "15bcd327b28cdd949d38c1ea8033b975";
var searchBtn = document.querySelector(".search-menu button");

var cityURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=&appid=" + APIKey;

searchBtn.addEventListener("click", function(){
    console.log("click me");
})