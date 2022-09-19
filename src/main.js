import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";

const Home = () => import('./views/Home.vue')
const Quiz = () => import('./views/Quiz.vue')
const Result = () => import('./views/Result.vue')

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/quiz", component: Quiz, name: "quiz" },
  { path: "/result", component: Result, name: "result" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
