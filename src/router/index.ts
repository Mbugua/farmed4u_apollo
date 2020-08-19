import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "/auth",
    component: () =>
      import(
        /* webpackChunkName: "simple-layout" */ "@/layout/SimpleLayout.vue"
      ),
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/auth/Login.vue")
      },
      {
        path: "forgot-password",
        component: () =>
          import(
            /* webpackChunkName: "forgot-password" */ "@/views/auth/ResetPassword.vue"
          )
      },
      {
        path: "/",
        redirect: "/auth/login"
      }
    ]
  },
  {
    path: "/app",
    component: () =>
      import(
        /* webpackChunkName: "default-layout" */ "@/layout/DefaultLayout.vue"
      ),
    children: [
      {
        path: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "@/views/dashboard/index.vue"
          )
      },
      {
        path: "messages",
        component: () =>
          import(
            /* webpackChunkName: "messages" */ "@/components/app/messages/index.vue"
          )
      },
      {
        path: "orders",
        component: () =>
          import(
            /* webpackChunkName: "orders" */ "@/components/app/orders/index.vue"
          )
      },
      {
        path: "queue",
        component: () =>
          import(
            /* webpackChunkName: "orders" */ "@/components/app/queue/index.vue"
          )
      },
      {
        path: "products",
        component: () =>
          import(
            /* webpackChunkName: "products" */ "@/components/app/products/index.vue"
          )
      },
      {
        path: "customers",
        component: () =>
          import(
            /* webpackChunkName: "customers" */ "@/components/app/customers/index.vue"
          )
      },
      {
        path: "payments",
        component: () =>
          import(
            /* webpackChunkName: "payments" */ "@/components/app/payments/index.vue"
          )
      }
    ]
  },
  {
    path: "/",
    redirect: "/app/dashboard"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
