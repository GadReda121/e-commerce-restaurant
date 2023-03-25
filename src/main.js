import { createApp } from 'vue'
import App from './App.vue';
// Router
import router from './router';
// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faMagnifyingGlass, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons';
/* add icons to the library */
library.add(faMagnifyingGlass, faUser, faBagShopping );
// Global Css
import './assets/main.css';
// App
const app = createApp(App)
// Use Router
app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
