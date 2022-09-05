import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import LoginVerification from "../views/LoginVerification.vue";
import Launchpad from "../views/Launchpad.vue";
import Home from "../views/launchpad/Home.vue";
import CreateClient from "../views/launchpad/CreateClient.vue";
import ManageClients from "../views/launchpad/ManageClients.vue";
import DebitOrders from "../views/launchpad/DebitOrders.vue";
import Calendar from "../views/launchpad/debitorders/Calendar.vue";
import OnceOffDebit from "../views/launchpad/debitorders/OnceOffDebit.vue";
import GenerateReport from "../views/launchpad/debitorders/GenerateReport.vue";
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
    path: "/loginVerification",
    name: "LoginVerification",
    component: LoginVerification,
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
        path: "/launchpad/debitorders",
        name: "DebitOrders",
        component: DebitOrders,
      },
      {
        path: "/launchpad/debitorders/calendar",
        component: Calendar,
      },
      {
        path: "/launchpad/debitorders/once-off-debit",
        component: OnceOffDebit,
      },
      {
        path: "/launchpad/debitorders/generate-report",
        component: GenerateReport,
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
