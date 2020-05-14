import Vue from "vue";
import VueRouter from "vue-router";
// import MainP1 from "../views/MainP1.vue";
// import MainP2 from "../views/MainP2.vue";
// import Copy from "../views/Copy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "Page1"
  },
  {
    path: "/Page1",
    name: "MainP1",
    component: () => import("../views/MainP1.vue")
    // component: MainP1
  },
  {
    path: "/Page2",
    name: "MainP2",
    component: () => import("../views/MainP2.vue")
    // component: MainP2
  },
  {
    path: "/ColorCopied/:color",
    name: "Copy",
    component: () => import("../views/Copy.vue"),
    // component: Copy,
    props: true
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
