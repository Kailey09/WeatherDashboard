
var fetechWeather = function(city) {
    var apiKey = "b1893f739799a842b765fe8a4f5b519b";

    fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=" 
        + city +
        "&limit=5&appid=" 
        + this.apikey

    )
    .then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function(data){
                console.log(data);
            });
        };
    });

}


var displayWeather = function() {

}


fetechWeather();
