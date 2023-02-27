import { createApp } from 'vue'
import App from './App.vue'
import axios from './http.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
let app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#app');