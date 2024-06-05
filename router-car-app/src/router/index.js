import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CarView from "../views/CarView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../views/404View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/home",
      redirect: "/", //Cuando un usuario llama a la ruta /home lo redirige a otro sito que hemos definido, en este caso la home page
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
    },
    {
      path: "/cars/:id",
      name: "car",
      component: CarView,
      children: [
        {
          path: "contact",
          component: ContactView,
        },
      ],
    },
    {
      path: "/:catchall(.*)*", //Regular Expression para los paths que no hemos definido
      name: "Not Found",
      component: NotFoundView,
    },
  ],
});

export default router;
