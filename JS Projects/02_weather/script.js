document.addEventListener('DOMContentLoaded',() => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temp = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_key = "47e63fbe65afc4598125729fad9f8ae0"; // env variable

  getWeatherBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if(!city) return;

    // whenever we are making a request to some other server 2 things to keep in mind
    // 1) the server may throw an error
    // 2) request always take time to get answer as server/database is always present in another continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);

    } catch (error){
      showError();
    }


  })

  async function fetchWeatherData(city){
    //gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_key}`;

    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE ",response);


    if(!response.ok){
      throw new Error("City not found");
    }
    const data = await response.json();
    return data;

  }

  function displayWeatherData(weatherData){
    //display
    console.log(weatherData);
    const {name, main, weather} = weatherData;
    cityName.textContent = name;
    temp.textContent = `Temperature: ${main.temp}`;
    description.textContent = `Weather: ${weather[0].description}`;

    // unlock the display

    weatherInfo.classList.remove('hidden');
    errorMessage.classList.add("hidden");

  }

  function showError(){
    weatherInfo.classList.add('hidden');
    errorMessage.classList.remove('hidden');
  }

});


// go to freeapi, do some exercise and learn how to handle these api