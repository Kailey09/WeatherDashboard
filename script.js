
var currentWeather = function() {
    var apiKey = "b1893f739799a842b765fe8a4f5b519b";
    var city = document.getElementById("input-text").value;
    var api = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;

    fetch(api)
    .then(function(response){
        console.log(response);
        response.json().then(function(data){
            console.log(data);
            displayWeather(data);
        })
    });
};


var displayWeather = function(data) {
    document.getElementById("temp").textContent = data.main.temp

    document.getElementById("date").textContent = moment().format("M/D/YYYY")
    
}


// 5 day forcast same as current weather

document.getElementById("btn").addEventListener("click", currentWeather);
