import Vue from "vue";
import VueRouter from "vue-router";
import MainP1 from "../views/MainP1.vue";
import MainP2 from "../views/MainP2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "MainP1"
  },
  {
    path: "/MainP1",
    name: "MainP1",
    component: MainP1
  },
  {
    path: "/MainP2",
    name: "MainP2",
    component: MainP2
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
