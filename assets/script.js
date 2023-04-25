var userInput;
var APIKey = "15bcd327b28cdd949d38c1ea8033b975";
var searchBtn = document.querySelector(".search-menu button");
var fiveDaysContainer = document.querySelector(".five-day");
var locationCotaniner = document.querySelector(".location");
var cityDateEl = document.querySelector(".city-date");
var inputEl = document.querySelector(".text");

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
        data = [{"name":"Chicago","local_names":{"zu":"Chicago","fa":"شیکاگو","eu":"Chicago","vi":"Chicago","fj":"Chicago","ms":"Chicago","jv":"Chicago","ht":"Chikago","it":"Chicago","sw":"Chicago","zh":"芝加哥","az":"Çikaqo","sc":"Chicago","so":"Chicago","gl":"Chicago","cy":"Chicago","ta":"சிகாகோ","mn":"Чикаго","tl":"Chicago","hu":"Chicago","uk":"Чикаго","bn":"শিকাগো","kn":"ಶಿಕಾಗೊ","bm":"Chicago","sg":"Chicago","ug":"Chikago","la":"Sicagum","sl":"Chicago","tk":"Chicago","fy":"Chicago","ne":"शिकागो","ie":"Chicago","ca":"Chicago","hi":"शिकागो","am":"ሺካጎ","pa":"ਸ਼ਿਕਾਗੋ","ar":"شيكاغو","ig":"Chicago","lb":"Chicago","nn":"Chicago","ce":"Чикаго","ha":"Chicago","sr":"Чикаго","ak":"Chicago","pl":"Chicago","io":"Chicago","ps":"شیکاګو","lt":"Čikaga","yi":"שיקאגא","eo":"Ĉikago","kl":"Chicago","ko":"시카고","wa":"Tchicago","fr":"Chicago","vo":"Chicago","tr":"Şikago","af":"Chicago","ga":"Chicago","ka":"ჩიკაგო","tt":"Çikago","ja":"シカゴ","oc":"Chicago","bs":"Chicago","os":"Чикаго","ro":"Chicago","be":"Чыкага","sq":"Çikago","sn":"Chicago","pt":"Chicago","co":"Chicago","br":"Chicago","kw":"Chicago","ki":"Chicago","rn":"Chicago","is":"Chicago","he":"שיקגו","et":"Chicago","se":"Chicago","fo":"Chicago","nl":"Chicago","mi":"Chicago","yo":"Ṣìkágò","ml":"ഷിക്കാഗോ","ky":"Чикаго","hr":"Chicago","mg":"Chicago","no":"Chicago","gd":"Chicago","sv":"Chicago","an":"Chicago","xh":"E-Chicago","bg":"Чикаго","bh":"शिकागो","da":"Chicago","te":"చికాగో","iu":"ᓰᖄᑯ","mk":"Чикаго","el":"Σικάγο","li":"Chicago","gv":"Chicago","rm":"Chicago","mr":"शिकागो","my":"ရှီကာဂိုမြို့","nv":"Shikááʼgóó","gn":"Chikago","lv":"Čikāga","cs":"Chicago","es":"Chicago","sk":"Chicago","uz":"Chicago","qu":"Chicago","tw":"Kyekago","hy":"Չիկագո","ia":"Chicago","tg":"Чикаго","na":"Chicago","kk":"Чикаго","ku":"Chicago","sh":"Chicago","fi":"Chicago","ru":"Чикаго","id":"Chicago","en":"Chicago","bi":"Chicago","th":"ชิคาโก","de":"Chicago","ur":"شکاگو، الینوائے","st":"Chicago"},"lat":41.8755616,"lon":-87.6244212,"country":"US","state":"Illinois"}];
            var lat = data[0].lat;
            var lon = data[0].lon;
        console.log(lat + ", " + lon);
        getWeather(lat, lon);

        // create elements in here
        var cityName = document.createElement("h1")
        cityName.textContent = data[0].name;
        cityDateEl.setAttribute("style", "font-size: 24px; padding-left: 10px; padding-top: 10px;")
        cityDateEl.append(cityName);
    })
}

function getWeather(lat, lon){
   console.log("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey);
}
getCity("chicago");
})