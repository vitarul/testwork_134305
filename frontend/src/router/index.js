import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from "../layouts/BaseLayout.vue";
import UsersView from "../views/UsersView.vue";
import UserView from "../views/UserView.vue";
import HomeView from "../views/HomeView.vue";
import CreateUserView from "../views/CreateUserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: BaseLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          component: HomeView,
          name: 'home'
        },
        {
          path: 'users',
          component: UsersView,
          name: 'users'
        },
        {
          path: 'users/create',
          component: CreateUserView,
          name: 'user-create'
        },
        {
          path: 'users/:id',
          component: UserView,
          name: 'user-show'
        },
      ]
    }
  ]
})

export default router
