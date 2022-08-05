<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
      newMovieParams: {},
      editMovieParams: {},
    };
  },
  createMovie: function () {
    axios
      .post("http://localhost:3000/movies", this.newMovieParams)
      .then((response) => {
        console.log("movie created ", response.data);
        this.movies.push(response.data);
        this.newmovieParams = {};
      })
      .catch((error) => (this.errorMessage = error));
  },
};
</script>

<template>
  <div class="movies-new">
    <h1>Add a Movie</h1>
    <div>
      <label for="title">title:</label>
      <input type="text" v-model="newMovieParams.title" id="title" placeholder="title" />
    </div>
    <div>
      <label for="year">year:</label>
      <input type="text" v-model="newMovieParams.year" id="year" placeholder="year" />
    </div>
    <div>
      <label for="director">director:</label>
      <input type="text" v-model="newMovieParams.director" id="director" placeholder="director" />
    </div>
    <div>
      <button v-on:click="createMovie()">Create</button>
    </div>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h5>{{ movie.title }}</h5>
      <h6>{{ movie.year }}</h6>
      <div></div>
    </div>
  </div>
</template>
