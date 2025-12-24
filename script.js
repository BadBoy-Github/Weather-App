

let submitButton = document.getElementById("card-right-input-child-button");
let inputBox = document.getElementById("card-right-input-child-pcode-input");



submitButton.addEventListener("click", () => {
    let postcode = inputBox.value;

    let url = `https://api.weatherbit.io/v2.0/current?&postal_code=${postcode}&key=bb9da7a0e1864390b84a9dc385d365e6`;

    fetchWeatherData(url);
})

let fetchWeatherData = async (url) => {
    let fetchdata = await fetch(url);
    let parsedData = await fetchdata.json();
    data = parsedData.data[0];

    // Particular data extraction
    cloudsData = data.clouds;
    airQualityData = data.aqi;
    windspeedData = data.wind_spd;
    humidityData = data.rh;
    partOdDayData = data.pod;
    descriptionData = data.weather.description;
    cityData = data.city_name;
    countryData = data.country_code;

    precipData = data.precip;
    weatherCode = data.weather.code;
    tempData = data.temp;
    snowData = data.snow;

    
}





