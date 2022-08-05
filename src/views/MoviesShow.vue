<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get("/movies/" + this.$route.params.id + ".json".then).then((response) => {
      this.movie = response.data;
    });
  },
};
</script>
<template>
  <div class="movies-show">
    <div class="container">
      <h1>{{ movie.title }}</h1>
      <p>
        {{ movie.year }}
      </p>
      <p>
        {{ movie.director }}
      </p>
      <router-link to="/movies">Return to All movies</router-link>
      |
      <router-link v-bind:to="`/movies/${movie.id}/edit`">Edit this Movie</router-link>
      <div>
        <button v-on:click="destroyMovie()">Delete this Movie</button>
      </div>
    </div>
  </div>
</template>
