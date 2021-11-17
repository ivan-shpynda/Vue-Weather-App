import { createStore } from 'vuex';

const store = createStore({
  state: {
    weather: {}
  },

  actions: {
    async fetchWeather({ commit }, city = 'Lviv') {
      const convertTemperature = (kelvinTemperature) => {
        return String(Math.round(kelvinTemperature - 273.15));
      };

      const apiKey = '6e4ccfd18b2963ed40d17fb7a8ad201b';

      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      const weatherObj = {};

      try {
        const response = await fetch(URL);
        const data = await response.json();

        weatherObj.city = data.name;
        weatherObj.temperature = convertTemperature(data.main.temp);
        weatherObj.description = data.weather[0].description;
        weatherObj.wind = String(data.wind.speed);
      } catch (err) {
        weatherObj.mistake = true;
      }

      console.log(weatherObj);

      commit('setWeatherData', weatherObj);
    }
  },

  mutations: {
    setWeatherData: (state, weatherObj) => (state.weather = weatherObj),
  },

  getters: {
    weatherData: (state) => state.weather,
  },
})

export default store;
