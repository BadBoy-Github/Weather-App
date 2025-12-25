

let submitButton = document.getElementById("card-right-input-child-button");
let inputBox = document.getElementById("card-right-input-child-pcode-input");

let clouds = document.getElementById("clouds");
let airquality = document.getElementById("airquality");
let windspeed = document.getElementById("windspeed");
let humidity = document.getElementById("humidity");
let rain = document.getElementById("rain");
let temp = document.getElementById("temp");
let snow = document.getElementById("snow");
let weather = document.getElementById("weather");

let rainpara = document.getElementById("rainpara");
let temppara = document.getElementById("temppara");
let snowpara = document.getElementById("snowpara");

let cityname = document.getElementById("cityname");

let weatherImg = document.getElementById("weatherImg");



submitButton.addEventListener("click", () => {
    let postcode = inputBox.value;

    let url = `https://api.weatherbit.io/v2.0/current?&postal_code=${postcode}&key=bb9da7a0e1864390b84a9dc385d365e6`;

    if (postcode === "" || isNaN(postcode) || postcode.length < 6) {
        alert("Please enter a valid postal code");
        return;
    } else {
        fetchWeatherData(url);
    }
})

let fetchWeatherData = async (url) => {
    let fetchdata = await fetch(url);
    let parsedData = await fetchdata.json();
    data = parsedData.data[0];
    console.log(data);

    // Particular data extraction
    cloudsData = data.clouds;
    airQualityData = data.aqi;
    windspeedData = data.wind_spd;
    humidityData = data.rh;
    partOdDayData = data.pod;

    weatherCode = data.weather.code;
    descriptionData = data.weather.description;

    cityData = data.city_name;
    countryData = data.country_code;

    precipData = data.precip;
    tempData = data.temp;
    snowData = data.snow;


    // Setting data to HTML elements
    clouds.innerText = cloudsData + "%";
    airquality.innerText = airQualityData + "%";
    windspeed.innerText = windspeedData + " m/s";
    humidity.innerText = humidityData + "%";
    if (partOdDayData == "d") {
        document.getElementById("pod-d").style.opacity = "100%";
        document.getElementById("pod-d").style.cursor = "pointer";
        document.getElementById("pod-d").title = "Day Time";
        document.getElementById("pod-d").style.outline = "2px solid yellow";

    } else {
        document.getElementById("pod-n").style.opacity = "100%";
        document.getElementById("pod-n").style.cursor = "pointer";
        document.getElementById("pod-n").title = "Night Time";
        document.getElementById("pod-n").style.outline = "2px solid black";
    }

    weather.innerText = descriptionData;

    rain.innerText = precipData + " mm";
    temp.innerText = tempData + " °C";
    snow.innerText = snowData + " mm";

    cityname.innerText = "  " + cityData + ", " + countryData;

    // Setting weather image based on weather code
    weatherImg.src = `./img/${partOdDayData}/${weatherCode}.png`;


    // Setting para texts based on data ranges

    // Precipitation para
    if (precipData == 0) {
        rainpara.innerText = "No Rain";
    } else if (precipData > 0 && precipData <= 2.5) {
        rainpara.innerText = "Light Rain";
    } else if (precipData > 2.5 && precipData <= 7.5) {
        rainpara.innerText = "Moderate Rain";
    } else if (precipData > 7.5 && precipData <= 50) {
        rainpara.innerText = "Heavy Rain";
    } else {
        rainpara.innerText = "Violent Rain";
    }

    // Temperature para
    if (tempData < 10) {
        temppara.innerText = "Colder";
    } else if (tempData >= 10 && tempData <= 18) {
        temppara.innerText = "Cold";
    } else if (tempData > 18 && tempData <= 25) {
        temppara.innerText = "Warm";
    } else if (tempData > 25 && tempData <= 35) {
        temppara.innerText = "Hot";
    } else {
        temppara.innerText = "Very Hot";
    }

    // Snow para
    if (snowData == 0) {
        snowpara.innerText = "No Snow";
    } else if (snowData > 0 && snowData <= 2.5) {
        snowpara.innerText = "Light Snow";
    } else if (snowData > 2.5 && snowData <= 7.5) {
        snowpara.innerText = "Moderate Snow";
    } else if (snowData > 7.5 && snowData <= 25) {
        snowpara.innerText = "Heavy Snow";
    } else {
        snowpara.innerText = "Blizzard";
    }
}


