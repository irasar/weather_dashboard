//global variables
var searchForm = document.querySelector("#search-form");


var formText = document.querySelector("#input-form");

var formBtn = document.querySelector("#btn-form");


var citiesArr = [];




$(document).ready(function () {


    //when we click the city button
    $("#weather-btn").on("click", function (event) {

        event.preventDefault();
        //get the city that the user put in 
        var cityInput = $("#weather-input").val().trim();

      
        //get current weather with the city they chose
        currentWeather(cityInput)
        //get the 5 day forecast with the city they chose
        forecast(cityInput)

    })


    //function for getting and displaying current weather
    function currentWeather(city) {
        //make an ajax call to get the weather
        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8f63f215819badad4ad86bbbab862826&units=imperial"

        }).then(function (data) {//data is the weather that came back
            var lat = data.coord.lat
            var long = data.coord.lon
            //put city name temp windspeed on the page
            $(".city").text(data.name);
            $(".temperature").text("Temperature " + data.main.temp);
            $(".humidity").text("Humidity " + data.main.humidity);
            $(".windspeed").text("Windspeed " + data.wind.speed);

            uv(lat, long);
        })
    }



    function forecast(city) {




        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=8f63f215819badad4ad86bbbab862826&units=imperial"

        }).then(function (data) {
            // console.log("five day", data.list)
            //loop over data and create cards with info for each day
            for (var i = 0; i < data.list.length; i+=8) {

               console.log(data.list[i].main.temp);
               $( ".forecast" ).append( "<div class='card'>Temp: " + data.list[i].main.temp + "</div>" );
            var card = $("<div>");
            var cardBody = $("<div>");
            var cardText = $("<p>");
            card.addClass("cardB");
            cardBody.addClass("card-body");
            cardText.text(data.list[i].main.temp);
            cardBody.append(cardText);
            card.append(cardBody);
            $(".forecast").append(card);
            

              }
            //append each card to the forecast div
        

{}
        })


    }

    //uv index
    function uv(lat, long) {




        $.ajax({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + long + "&appid=8f63f215819badad4ad86bbbab862826&"

        }).then(function (data) {
            console.log(data);
            $(".uvindex").text("UV Index " + data.value);
        })
    }
}
)

// //convert from kelvin  parent wro
// response.daily[i].temp.max - (273.15) * 9 / 5 + 32) + "\xB0");


// var forecastDay1 = moment().add(1, 'd').format("dddd, MMMM Do" );