import Vue from "vue";
import Meta from "vue-meta";
import Router from "vue-router";

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: "hash",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: resovle => import("./views/Login.vue").then(resovle)
    },
    {
      path: "/overview",
      name: "overview",
      component: resovle => import("./views/Overview.vue").then(resovle)
    },
    {
      path: "/home",
      component: resovle => import("./views/Home.vue").then(resovle),
      children: [
        {
          path: "dashboard/:id",
          name: "dashboard",
          component: resovle => import("./views/database/Dashboard.vue").then(resovle)
        },
        {
          path: "datacoll/:db/:coll",
          name: "datacoll",
          component: resovle => import("./views/database/Datacoll.vue").then(resovle)
        }
      ]
    }
  ]
});
