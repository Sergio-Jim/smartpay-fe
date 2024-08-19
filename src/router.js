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
import AdminLogin from "./pages/admin/AdminLogin.vue";
import AdminDashboard from "./pages/admin/AdminDashboard.vue";
import DashboardHome from "./pages/admin/DashboardHome.vue";
import RegisterBusiness from "./pages/admin/RegisterBusiness.vue";
import ViewBusinesses from "./pages/admin/ViewBusinesses.vue";
import AdminSettings from "./pages/admin/AdminSettings.vue";

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
  {
    path: "/admin",
    name: "AdminLogin",
    component: AdminLogin,
  },
  {
    path: "/admin/dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
    props: true,
    children: [
      {
        // redirect to default home page
        path: "",
        component: DashboardHome,
      },
      {
        path: "/dashboard/",
        component: DashboardHome,
      },
      {
        path: "/register",
        name: "RegisterBusiness",
        component: RegisterBusiness,
      },
      {
        path: "/businesses",
        name: "ViewBusinesses",
        component: ViewBusinesses,
        props: true,
        // children: [
        //   {
        //     path: "/admin/dashboard/businesses",
        //     name: "ViewBusinesses",
        //   liki  component: ViewBusinesses,
        //   },
        // ],
      },
      {
        path: "/settings",
        name: "AdminSettings",
        component: AdminSettings,
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
