import Vue from "vue";
import VueRouter from "vue-router";
// import MainP1 from "../views/MainP1.vue";
// import MainP2 from "../views/MainP2.vue";
// import Copy from "../views/Copy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "color"
  },
  {
    path: "/color",
    name: "MainP1",
    component: () =>
      import(/* webpackChunkName: "bundle-colors" */ "../views/MainP1.vue")
    // component: MainP1
  },
  {
    path: "/color",
    name: "MainP2",
    component: () =>
      import(/* webpackChunkName: "bundle-colors" */ "../views/MainP2.vue")
    // component: MainP2
  },
  {
    path: "/color/:name",
    name: "Copy",
    props: true,
    component: () =>
      import(/* webpackChunkName: "bundle-colors" */ "../views/Copy.vue")
    // component: Copy,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "bundle-about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
