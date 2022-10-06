import { createRouter, createWebHistory } from "vue-router";
import Login from "./pages/Login.vue";
import LoginVerification from "./pages/LoginVerification.vue";
import Launchpad from "./pages/Launchpad.vue";
import Home from "./pages/launchpad/Home.vue";
import CreateClient from "./pages/launchpad/CreateClient.vue";
import ManageClients from "./pages/launchpad/ManageClients.vue";
import DebitOrders from "./pages/launchpad/DebitOrders.vue";
import Calendar from "./pages/launchpad/debitorders/Calendar.vue";
import OnceOffDebit from "./pages/launchpad/debitorders/OnceOffDebit.vue";
import GenerateReport from "./pages/launchpad/debitorders/GenerateReport.vue";
import Dashboard from "./pages/launchpad/Dashboard.vue";

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
