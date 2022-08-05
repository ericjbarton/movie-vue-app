<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/movies.json").then((response) => {
        this.movies = response.data;
        console.log("All Movies:", this.movies);
      });
    },
  },
};
</script>
