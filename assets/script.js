var APIKey = "15bcd327b28cdd949d38c1ea8033b975";
var searchBtn = document.querySelector(".search-menu button");
var fiveDaysContainer = document.querySelector("five-day");

/* code to make the button work */
searchBtn.addEventListener("click", function(){
    console.log("click me");
})

/* getting the city, lat, and lon from api*/
function getCity(userInput){
    var cityURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&limit=&appid=" + APIKey;
    fetch(cityURL)
    .then(function(response){
        return response.json();
    })

    .then(function(data){
        data = [{"name":"Chicago","local_names":{"mk":"Чикаго","el":"Σικάγο","mn":"Чикаго","br":"Chicago","uk":"Чикаго","bi":"Chicago","iu":"ᓰᖄᑯ","th":"ชิคาโก","jv":"Chicago","az":"Çikaqo","kw":"Chicago","so":"Chicago","nl":"Chicago","af":"Chicago","hi":"शिकागो","sc":"Chicago","sl":"Chicago","yo":"Ṣìkágò","ms":"Chicago","bn":"শিকাগো","cs":"Chicago","eu":"Chicago","ml":"ഷിക്കാഗോ","ar":"شيكاغو","eo":"Ĉikago","rm":"Chicago","da":"Chicago","sk":"Chicago","te":"చికాగో","ur":"شکاگو، الینوائے","sq":"Çikago","xh":"E-Chicago","no":"Chicago","ce":"Чикаго","hu":"Chicago","zh":"芝加哥","se":"Chicago","sg":"Chicago","ca":"Chicago","yi":"שיקאגא","id":"Chicago","it":"Chicago","sh":"Chicago","ta":"சிகாகோ","ki":"Chicago","sn":"Chicago","an":"Chicago","kn":"ಶಿಕಾಗೊ","pa":"ਸ਼ਿਕਾਗੋ","fo":"Chicago","tt":"Çikago","be":"Чыкага","fj":"Chicago","cy":"Chicago","vo":"Chicago","ha":"Chicago","mi":"Chicago","ka":"ჩიკაგო","de":"Chicago","nn":"Chicago","is":"Chicago","li":"Chicago","qu":"Chicago","en":"Chicago","gl":"Chicago","rn":"Chicago","sw":"Chicago","fi":"Chicago","gn":"Chikago","lb":"Chicago","nv":"Shikááʼgóó","bs":"Chicago","bm":"Chicago","mg":"Chicago","tr":"Şikago","co":"Chicago","kk":"Чикаго","mr":"शिकागो","fr":"Chicago","uz":"Chicago","ak":"Chicago","pt":"Chicago","ne":"शिकागो","vi":"Chicago","hr":"Chicago","ro":"Chicago","tl":"Chicago","st":"Chicago","es":"Chicago","io":"Chicago","ig":"Chicago","ru":"Чикаго","ie":"Chicago","gd":"Chicago","na":"Chicago","bh":"शिकागो","wa":"Tchicago","ps":"شیکاګو","ia":"Chicago","he":"שיקגו","am":"ሺካጎ","ug":"Chikago","hy":"Չիկագո","oc":"Chicago","ga":"Chicago","ku":"Chicago","lv":"Čikāga","ht":"Chikago","fa":"شیکاگو","zu":"Chicago","fy":"Chicago","ko":"시카고","sr":"Чикаго","kl":"Chicago","my":"ရှီကာဂိုမြို့","gv":"Chicago","la":"Sicagum","bg":"Чикаго","os":"Чикаго","lt":"Čikaga","pl":"Chicago","et":"Chicago","tw":"Kyekago","tg":"Чикаго","ky":"Чикаго","tk":"Chicago","sv":"Chicago","ja":"シカゴ"},"lat":41.8755616,"lon":-87.6244212,"country":"US","state":"Illinois"}]
            var lat = data[0].lat;
            var lon = data[0].lon;
        console.log(lat + ", " + lon);
        getWeather(lat, lon);

        // create elements in here
    })
}

function getWeather(lat, lon){
    console.log("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=15bcd327b28cdd949d38c1ea8033b975");
}
getCity("chicago");