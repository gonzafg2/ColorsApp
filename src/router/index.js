import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "colors",
  },
  {
    path: "/colors",
    name: "MainP1",
    component: () =>
      import(/* webpackChunkName: "bundle-colors" */ "../views/MainP1.vue"),
  },
  {
    path: "/colors-2",
    name: "MainP2",
    component: () =>
      import(/* webpackChunkName: "bundle-colors" */ "../views/MainP2.vue"),
  },
  {
    path: "/color/:name",
    name: "Copy",
    props: true,
    component: () =>
      import(/* webpackChunkName: "bundle-colors" */ "../views/Copy.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "bundle-about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
