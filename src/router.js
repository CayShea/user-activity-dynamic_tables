import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Established from "./views/Established.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "New Users",
      component: Home
    },
    {
      path: "/established",
      name: "Established Users",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Established
      // () =>
      //   import(/* webpackChunkName: "about" */ "./views/Established.vue")
    }
  ]
});
