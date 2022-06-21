import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Launchpad from "../views/Launchpad.vue";
import Home from "../views/launchpad/Home.vue";
import CreateClient from "../views/launchpad/CreateClient.vue";
import ManageClients from "../views/launchpad/ManageClients.vue";
import Reports from "../views/launchpad/Reports.vue";
import CalendarReport from "../views/launchpad/reports/CalendarReport.vue";
import CreateReport from "../views/launchpad/reports/CreateReport.vue";
import GenerateReport from "../views/launchpad/reports/GenerateReport.vue";
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
        path: "/launchpad/reports",
        name: "Reports",
        component: Reports,
      },
      {
        path: "/launchpad/reports/calendar-report",
        component: CalendarReport,
      },
      {
        path: "/launchpad/reports/create-report",
        component: CreateReport,
      },
      {
        path: "/launchpad/reports/generate-report",
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
