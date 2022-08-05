import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MoviesIndex from "../views/MoviesIndex";
import MoviesNew from "../views/MoviesNew";
import MoviesShow from "../views/MoviesShow";
import SignupView from "../views/SignupView.vue";
import SignupView from "../views/SignupView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/movies",
    name: "moviesindex",
    component: MoviesIndex,
  },
  {
    path: "/movies/new",
    name: "moviesnew",
    component: MoviesNew,
  },
  {
    path: "/movies/:id",
    name: "movies-show",
    component: MoviesShow,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
