$(document).ready(function () {



    $("#weather-btn").on("click", function (event) {

        event.preventDefault();

        var cityInput = $("#weather-input").val().trim();

        console.log(cityInput);
        currentWeather(cityInput)
        forecast(cityInput)

    })

    function currentWeather(city) {



        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8f63f215819badad4ad86bbbab862826&units=imperial"

        }).then(function (data) {
            console.log(data);

        })
    }



    function forecast(city) {




        $.ajax({
            method: "GET",
            url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=8f63f215819badad4ad86bbbab862826&units=imperial"

        }).then(function (data) {


        })


    }

        //uv index
        function uv(city) {




            $.ajax({
                method: "GET",
                url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=8f63f215819badad4ad86bbbab862826&units=imperial"

            }).then(function (data) {


            })
        }
    }
)