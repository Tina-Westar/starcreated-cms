import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/notice",
      name: "notice",
      component: () => import("../views/NoticeView.vue"),
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("../views/SettingView.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    //
    {
      path: '/staff',
      name: "Staff",
      component: () => import('../views/staff/StaffView.vue'),
      // children: [
      //   {
      //     path: 'add',
      //     name: "Add",
      //     component: () => import('../views/staff/StaffAddView.vue'),
      //   },
      //   {
      //     path: 'permissions',
      //     name: 'Permissions',
      //     component: () => import('../views/staff/StaffPermissionsView.vue'),
      //   },
      // ],
    },
    {
      path: '/staff-add',
      name: "Add",
      component: () => import('../views/staff/StaffAddView.vue'),
    },
    {
      path: '/staff-permissions',
      name: 'Permissions',
      component: () => import('../views/staff/StaffPermissionsView.vue'),
    },
    //
  ],
});

export default router;
