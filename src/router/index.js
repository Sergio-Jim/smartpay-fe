import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Launchpad from "../views/Launchpad.vue";
import Home from "../views/launchpad/Home.vue";
import CreateClient from "../views/launchpad/CreateClient.vue";
import ManageClients from "../views/launchpad/ManageClients.vue";
import Reports from "../views/launchpad/Reports.vue";
import Dashboard from "../views/launchpad/Dashboard.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    props: true,
  },
  {
    path: "/launchpad",
    name: "Launchpad",
    component: Launchpad,
    props: true,
    children: [
      {
        // redirect to default home page
        path: "",
        component: Home,
      },
      {
        path: "/home",
        component: Home,
      },
      {
        path: "createclient",
        component: CreateClient,
      },
      {
        path: "manageclients",
        component: ManageClients,
      },
      {
        path: "reports",
        component: Reports,
      },
      {
        path: "dashboard",
        component: Dashboard,
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
