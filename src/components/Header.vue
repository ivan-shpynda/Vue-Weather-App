<template>
  <header>
    <div>HEADER</div>
    <div class="data" v-if="weatherData.description">
      <span>{{weatherData.description}}</span>
      &nbsp;
      <span>{{weatherData.temperature}}&#176;C</span>
    </div>

  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Header',

    computed: mapGetters(['weatherData']),

    methods: {
      ...mapActions(['fetchWeather']),
    },

    created() {
      this.fetchWeather();
    }

  }
</script>

<style>
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  header {
    color: #fff;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: rgb(115, 140, 120);
  }
</style>