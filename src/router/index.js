import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LogIn from "../views/LogIn.vue";
import ListCamera from "../views/ListCamera.vue";
import SignUp from "../views/SignUp.vue";
import DetailCam from "../views/DetailCam.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/user",
      name: "user",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/UserView.vue"),
    },
    {
      path: "/LogIn",
      name: "LogIn",
      component: LogIn,
    },
    {
      path: "/ListCamera",
      name: "ListCamera",
      component: ListCamera,
    },
    {
      path: "/SignUp",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/DetailCam/:id",
      name: "DetailCam",
      component: DetailCam,
    },

  ],
});

export default router;
