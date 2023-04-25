import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";

// import bulma css
import "bulma/css/bulma.min.css";

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount("#app");
