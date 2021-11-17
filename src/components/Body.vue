<template>
  <div class="body">
    <h1>Weather in your city</h1>
    <input type="text" placeholder="Type your location here" v-model="city">
    <button @click="searchWeather()" class="btn">Search</button>
    <div v-if="weatherData.mistake" class="mistake">There is no such city. Try again</div>
    <div v-else class="weather-block">
      <h2>{{weatherData.city}}</h2>
      <p>{{weatherData.description}}</p>
      <p>{{weatherData.temperature}}&#176;C</p>
    </div>
    
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Body',

    data() {
      return {
        city: '',
      }
    },

    computed: mapGetters(['weatherData']),

    methods: {
      ...mapActions(['fetchWeather']),

      searchWeather() {
        this.fetchWeather(this.city);
        this.city = '';
      }
    },

    created() {
      this.fetchWeather('Lviv');
    }

  }
</script>

<style scoped>
  h1 {
    text-transform: uppercase;
    margin-bottom: 50px;
  }

  .body {
    width: 500px;
    border: 1px solid rgb(115, 140, 120);
    padding: 15px;
    margin: 20px auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input {
    padding: 10px 15px;
    border-radius: 15px;
    border: none;
    outline: none;
    margin-bottom: 20px;
    background-color: #DDE3DE;
  }

  .btn {
    padding: 5px 10px;
    border-radius: 15px;
    background-color: rgb(115, 140, 120);
    border: none;
    color: #fff;
    transition: all .4s ease-out;
    cursor: pointer;
  }


  .mistake {
    color: red;
    padding: 40px;
  }

  .weather-block {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>