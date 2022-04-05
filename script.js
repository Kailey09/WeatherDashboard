
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
    document.getElementById("date").textContent = moment().format("M/D/YYYY");
    document.getElementById("speed").textContent = data.wind.speed
    document.getElementById("humidity").textContent = data.main.humidity
    document.getElementById("name").textContent = data.name

}


// 5 day forcast 
function fiveDayForcast() {
    var apiKey = "b1893f739799a842b765fe8a4f5b519b";
    var city = document.getElementById("input-text").value;
    console.log(city);
    var fiveDayApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&cnt=5&units=imperial&appid=" + apiKey;

    fetch(fiveDayApi)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        var list = data.list
        list.forEach(function(item, index){
            document.getElementById("temp" + index).textContent = item.main.temp;
            document.getElementById("wind" + index).textContent = item.wind.speed;
            document.getElementById("hot" + index).textContent = item.main.humidity;
            document.getElementById("date" + index).textContent = item.dt_txt;
            
        })
        
    }) 
        
}



document.getElementById("btn").addEventListener("click", currentWeather);
document.getElementById("btn").addEventListener("click", fiveDayForcast);
