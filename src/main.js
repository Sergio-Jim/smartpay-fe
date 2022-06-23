import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import LitepieDatepicker from "litepie-datepicker";

const dayjs = require("dayjs");
//import dayjs from 'dayjs' // ES 2015
dayjs().format();

createApp(App).use(router).mount("#app");
App.use(LitepieDatepicker);
