import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import VueRellax from 'vue-rellax'

const app = createApp(App);

app.use(router);


// Make BootstrapVue available throughout your project
app.use(BootstrapVue3)

app.use(VueRellax)


app.mount("#app");





