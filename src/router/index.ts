import { createRouter, createWebHistory } from "vue-router";
import ExperienceView from "../views/ExperienceView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "experience",
      component: ExperienceView,
    },
    {
      path: "/projects",
      name: "projects",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/education",
      name: "education",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/EducationView.vue"),
    },
    // {
    //   path: "/resume",
    //   name: "resume",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/ProjectsView.vue"),
    // },
  ],
});

export default router;
