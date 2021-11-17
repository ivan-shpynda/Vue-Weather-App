<template>
  <div class="footer">
    <div>FOOTER</div>
    <div class="data" v-if="weatherData.description">
      <span>{{weatherData.description}}</span>
      &nbsp;
      <span>{{weatherData.temperature}}&#176;C</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Footer',

  computed: mapGetters(['weatherData']),

    methods: {
      ...mapActions(['fetchWeather']),
    },

    created() {
      this.fetchWeather();
    }
}
</script>

<style scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 10px;
    background-color: rgb(115, 140, 120);
    color: #fff;
  }
</style>