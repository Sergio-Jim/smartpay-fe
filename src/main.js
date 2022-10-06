import "./index.css";
import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
// import authPlugin from "./auth/authPlugin"
import VueLoaders from "vue-loaders";
import "vue-loaders/dist/vue-loaders.css";
import { vfmPlugin } from "vue-final-modal";
import "flowbite";


import * as apolloProvider from './apollo.provider'

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const app = createApp(App);

const options = {
  // You can set your default options here
};

app.use(Toast, options);

app.use(apolloProvider.provider);
app.use(VueLoaders);
app.use(vfmPlugin);
app.use(router);
app.mount("#app");
